// ── TLEA App Helpers ─────────────────────────────────────────

function buildNav(activePage) {
  const user = getSession();
  const nav = [
    { icon:'🏠', label:'Dashboard',       href:'dashboard.html',   key:'dashboard' },
    { icon:'📚', label:'Academy Curriculum', href:'academy.html',  key:'academy' },
    { icon:'🗺️', label:'TX Jurisdiction', href:'jurisdiction.html', key:'jurisdiction' },
    { icon:'🎭', label:'Scenarios',        href:'scenarios.html',  key:'scenarios' },
    { icon:'📋', label:'TCOLE Training',   href:'tcole.html',      key:'tcole' },
    { icon:'✏️', label:'Exams & Quizzes', href:'quiz.html',        key:'quiz' },
    { icon:'📖', label:'Study Guide',      href:'study-guide.html',key:'study' },
    { icon:'🔤', label:'Lexicon',          href:'lexicon.html',    key:'lexicon' },
    { icon:'📞', label:'Resources',        href:'resources.html',  key:'resources' },
  ];
  const sidebarEl = document.getElementById('sidebar');
  if (!sidebarEl) return;

  const displayName = user ? `${user.firstName} ${user.lastName}` : 'Guest';
  const roleLabel   = user ? getRoleLabel(user.role) : '';
  const initials    = user ? (user.firstName[0] + user.lastName[0]).toUpperCase() : '?';

  sidebarEl.innerHTML = `
    <div class="sidebar-header">
      <span class="sidebar-badge-icon">⚖️</span>
      <div>
        <div class="sidebar-title">TLEA Portal</div>
        <div class="sidebar-sub">Texas Law Enforcement Academy</div>
      </div>
    </div>
    <div class="sidebar-user">
      <div class="sidebar-avatar">${initials}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name truncate">${displayName}</div>
        <div class="sidebar-user-role">${roleLabel}</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">
        <div class="nav-section-label">Navigation</div>
        ${nav.map(n=>`
          <a href="${n.href}" class="nav-item ${activePage===n.key?'active':''}">
            <span class="nav-icon">${n.icon}</span>${n.label}
          </a>`).join('')}
      </div>
    </nav>
    <div class="sidebar-footer">
      <a href="#" class="nav-item" onclick="logout()">
        <span class="nav-icon">🚪</span> Sign Out
      </a>
    </div>`;
}

function buildTopbar(title, breadcrumbs = []) {
  const tb = document.getElementById('topbar');
  if (!tb) return;
  const now = new Date().toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const crumbHtml = breadcrumbs.length
    ? '<div class="topbar-breadcrumb">' +
        breadcrumbs.map((b,i)=>`<span onclick="${b.href?`location.href='${b.href}'`:''}">${b.label}</span>${i<breadcrumbs.length-1?'<span>/</span>':''}`).join('')+
      '</div>'
    : '';
  tb.innerHTML = `
    <div class="topbar-left">
      <button class="sidebar-toggle" onclick="toggleSidebar()" style="position:static;width:36px;height:36px;font-size:1rem">☰</button>
      <div>
        <div class="topbar-title">${title}</div>
        ${crumbHtml}
      </div>
    </div>
    <div class="topbar-right">
      <div class="topbar-clock" id="topbar-clock">${now}</div>
    </div>`;
  setInterval(()=>{
    const cl = document.getElementById('topbar-clock');
    if(cl) cl.textContent = new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  },1000);
}

function toggleSidebar() {
  const s = document.getElementById('sidebar');
  if (s) s.classList.toggle('open');
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  const s = document.getElementById('sidebar');
  if (s && s.classList.contains('open') && !s.contains(e.target)) {
    const tog = document.querySelector('.sidebar-toggle');
    if (!tog || !tog.contains(e.target)) s.classList.remove('open');
  }
});

function showToast(msg, type='info', duration=3500) {
  let tc = document.querySelector('.toast-container');
  if (!tc) { tc = document.createElement('div'); tc.className='toast-container'; document.body.appendChild(tc); }
  const t = document.createElement('div');
  const icons = {success:'✅',error:'❌',info:'ℹ️',warning:'⚠️'};
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => { t.classList.add('toast-removing'); setTimeout(()=>t.remove(),300); }, duration);
}

function rippleEffect(btn) {
  btn.addEventListener('click', function(e) {
    const r = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    r.className = 'ripple';
    this.appendChild(r);
    setTimeout(()=>r.remove(),600);
  });
}
document.querySelectorAll('.btn').forEach(rippleEffect);

function updateProgress(field, value) {
  const session = getSession();
  if (!session) return;
  const users = getUsers();
  const user = users[session.username];
  if (!user) return;
  user.progress[field] = value;
  users[session.username] = user;
  saveUsers(users);
  session.progress[field] = value;
  setSession(session, !!localStorage.getItem('tlea_session'));
}

function logHours(hours) {
  const session = getSession();
  if (!session) return;
  const users = getUsers();
  const user = users[session.username];
  if (!user) return;
  user.progress.hoursLogged = (user.progress.hoursLogged || 0) + hours;
  saveUsers(users);
}

function saveQuizScore(category, score, total) {
  const session = getSession();
  if (!session) return;
  const users = getUsers();
  const user = users[session.username];
  if (!user) return;
  if (!user.progress.quizScores) user.progress.quizScores = [];
  user.progress.quizScores.push({ category, score, total, pct: Math.round(score/total*100), date: new Date().toISOString() });
  user.progress.lessonsCompleted = (user.progress.lessonsCompleted || 0) + 1;
  users[session.username] = user;
  saveUsers(users);
}

function getAvgScore() {
  const session = getSession();
  if (!session || !session.progress.quizScores || !session.progress.quizScores.length) return 0;
  const pcts = session.progress.quizScores.map(s=>s.pct);
  return Math.round(pcts.reduce((a,b)=>a+b,0)/pcts.length);
}

// Accordion functionality
document.addEventListener('click', e => {
  const hdr = e.target.closest('.accordion-header');
  if (!hdr) return;
  const body = hdr.nextElementSibling;
  const isOpen = hdr.classList.contains('open');
  hdr.classList.toggle('open', !isOpen);
  if (body) body.classList.toggle('open', !isOpen);
});

// Tab functionality
document.addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  const tabs = btn.closest('.tabs');
  if (!tabs) return;
  const idx = Array.from(tabs.querySelectorAll('.tab-btn')).indexOf(btn);
  tabs.querySelectorAll('.tab-btn').forEach((b,i)=>b.classList.toggle('active',i===idx));
  const container = tabs.closest('[data-tabs-container]') || document;
  container.querySelectorAll('.tab-panel').forEach((p,i)=>p.classList.toggle('active',i===idx));
});
