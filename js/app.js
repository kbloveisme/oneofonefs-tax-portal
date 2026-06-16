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

  // Inject sidebar overlay for mobile swipe-to-dismiss
  if (!document.querySelector('.sidebar-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.addEventListener('click', closeSidebar);
    document.body.appendChild(overlay);
  }

  // Init swipe-to-close on sidebar
  initSidebarSwipe(sidebarEl);
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
      <button class="sidebar-toggle" onclick="toggleSidebar()" style="position:static;width:44px;height:44px;font-size:1rem">☰</button>
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

function openSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.querySelector('.sidebar-overlay');
  if (s) s.classList.add('open');
  if (o) o.classList.add('active');
}

function closeSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.querySelector('.sidebar-overlay');
  if (s) s.classList.remove('open');
  if (o) o.classList.remove('active');
}

function toggleSidebar() {
  const s = document.getElementById('sidebar');
  if (s && s.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  const s = document.getElementById('sidebar');
  if (s && s.classList.contains('open') && !s.contains(e.target)) {
    const tog = document.querySelector('.sidebar-toggle');
    if (!tog || !tog.contains(e.target)) closeSidebar();
  }
});

// ── Swipe-to-close sidebar ────────────────────────────────────
function initSidebarSwipe(sidebar) {
  let startX = 0;
  let startY = 0;
  let tracking = false;

  sidebar.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
  }, { passive: true });

  sidebar.addEventListener('touchmove', e => {
    if (!tracking) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    // Only swipe-left gesture (dx < 0) and more horizontal than vertical
    if (dx < -10 && Math.abs(dx) > Math.abs(dy)) {
      const offset = Math.max(0, -dx);
      sidebar.style.transform = `translateX(-${offset}px)`;
    }
  }, { passive: true });

  sidebar.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    sidebar.style.transform = '';
    // If swiped more than 60px left, close
    if (dx < -60) {
      closeSidebar();
      triggerHaptic('light');
    }
  }, { passive: true });
}

// ── Edge swipe-right to open sidebar ─────────────────────────
(function initEdgeSwipe() {
  let startX = 0;
  let tracking = false;

  document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    // Only track touches starting within 20px of left edge
    tracking = startX < 20;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 60) {
      const s = document.getElementById('sidebar');
      if (s && !s.classList.contains('open')) {
        openSidebar();
        triggerHaptic('light');
      }
    }
  }, { passive: true });
})();

// ── Pull-to-refresh ───────────────────────────────────────────
(function initPullToRefresh() {
  const THRESHOLD = 80;
  let startY = 0;
  let pulling = false;
  let indicator = null;

  function getIndicator() {
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.className = 'ptr-indicator';
      indicator.innerHTML = '<div class="ptr-spinner"></div><span>Pull to refresh</span>';
      document.body.appendChild(indicator);
    }
    return indicator;
  }

  document.addEventListener('touchstart', e => {
    // Only trigger at top of page
    if (window.scrollY === 0) {
      startY = e.touches[0].clientY;
      pulling = true;
    }
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (!pulling) return;
    const dy = e.touches[0].clientY - startY;
    if (dy > 10) {
      const ind = getIndicator();
      ind.classList.add('ptr-pulling');
      ind.querySelector('span').textContent = dy > THRESHOLD ? 'Release to refresh' : 'Pull to refresh';
    }
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (!pulling) return;
    pulling = false;
    const dy = e.changedTouches[0].clientY - startY;
    const ind = indicator;
    if (!ind) return;

    if (dy > THRESHOLD) {
      ind.classList.add('ptr-refreshing');
      ind.querySelector('span').textContent = 'Refreshing…';
      triggerHaptic('medium');
      setTimeout(() => {
        location.reload();
      }, 600);
    } else {
      ind.classList.remove('ptr-pulling');
    }
  }, { passive: true });
})();

// ── Haptic feedback (Capacitor + native vibration fallback) ───
function triggerHaptic(style) {
  // Capacitor Haptics (available when running as native app)
  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) {
    const styleMap = { light: 'LIGHT', medium: 'MEDIUM', heavy: 'HEAVY' };
    window.Capacitor.Plugins.Haptics.impact({ style: styleMap[style] || 'LIGHT' }).catch(() => {});
    return;
  }
  // Web Vibration API fallback
  if (navigator.vibrate) {
    const durations = { light: 10, medium: 20, heavy: 40 };
    navigator.vibrate(durations[style] || 10);
  }
}

// ── Offline detection ─────────────────────────────────────────
(function initOfflineDetection() {
  function createBanner() {
    let banner = document.querySelector('.offline-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'offline-banner';
      banner.textContent = '⚠️  You are offline — content loaded from cache';
      document.body.appendChild(banner);
    }
    return banner;
  }

  function handleOnline() {
    const banner = document.querySelector('.offline-banner');
    if (banner) banner.classList.remove('visible');
  }

  function handleOffline() {
    createBanner().classList.add('visible');
    showToast('You are offline. Cached content is available.', 'warning', 5000);
  }

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Check on load
  if (!navigator.onLine) handleOffline();
})();

// ── PWA Install Prompt ────────────────────────────────────────
(function initInstallPrompt() {
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;

    // Don't show if already installed or dismissed
    if (localStorage.getItem('tlea_pwa_dismissed')) return;

    const banner = document.createElement('div');
    banner.className = 'pwa-install-banner';
    banner.innerHTML = `
      <span class="pwa-install-icon">⚖️</span>
      <div class="pwa-install-text">
        <strong>Install TLEA Portal</strong>
        <span>Add to your home screen for offline access</span>
      </div>
      <div class="pwa-install-actions">
        <button class="btn btn-sm btn-outline" id="pwa-dismiss">Later</button>
        <button class="btn btn-sm btn-gold" id="pwa-install">Install</button>
      </div>`;
    document.body.appendChild(banner);

    document.getElementById('pwa-install').addEventListener('click', async () => {
      banner.classList.add('hidden');
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        triggerHaptic('medium');
        showToast('TLEA Portal installed! 🎉', 'success');
      }
      deferredPrompt = null;
    });

    document.getElementById('pwa-dismiss').addEventListener('click', () => {
      banner.classList.add('hidden');
      localStorage.setItem('tlea_pwa_dismissed', '1');
    });
  });

  window.addEventListener('appinstalled', () => {
    showToast('TLEA Portal successfully installed!', 'success');
  });
})();

// ── iOS keyboard / viewport resize fix ───────────────────────
(function initIOSKeyboardFix() {
  // iOS shrinks the viewport when the keyboard appears.
  // Lock the visual viewport height to avoid layout jumps.
  if (!window.visualViewport) return;

  const setViewportHeight = () => {
    const vh = window.visualViewport.height * 0.01;
    document.documentElement.style.setProperty('--real-vh', `${vh}px`);
  };

  window.visualViewport.addEventListener('resize', setViewportHeight);
  setViewportHeight();
})();

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

