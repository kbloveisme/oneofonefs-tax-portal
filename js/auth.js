// ── TLEA Auth System (localStorage-based) ──────────────────
const USERS_KEY = 'tlea_users';
const SESSION_KEY = 'tlea_session';

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getSession() {
  return JSON.parse(sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY) || 'null');
}
function setSession(user, remember) {
  const data = JSON.stringify(user);
  sessionStorage.setItem(SESSION_KEY, data);
  if (remember) localStorage.setItem(SESSION_KEY, data);
}
function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(SESSION_KEY);
}
function requireAuth() {
  const s = getSession();
  if (!s) { window.location.href = 'index.html'; return null; }
  return s;
}
function getRoleLabel(role) {
  const map = { cadet:'Cadet', officer:'Peace Officer', professor:'Professor/Instructor',
    admin:'Administrator', da:'District Attorney', judge:'Judge/Magistrate' };
  return map[role] || role;
}
function getRoleBadgeClass(role) {
  const map = { cadet:'badge-blue', officer:'badge-gold', professor:'badge-purple',
    admin:'badge-red', da:'badge-amber', judge:'badge-green' };
  return map[role] || 'badge-blue';
}

// Seed demo account
(function seedDemo() {
  const users = getUsers();
  if (!users['cadet1']) {
    users['cadet1'] = {
      username:'cadet1', password:'academy123', firstName:'Alex', lastName:'Rodriguez',
      role:'cadet', badge:'C-2024-001', dept:'Harris County Sheriff Academy',
      joined: new Date().toISOString(),
      progress: { lessonsCompleted:3, quizScores:[], hoursLogged:12, currentWeek:1, currentDay:3 }
    };
  }
  if (!users['prof1']) {
    users['prof1'] = {
      username:'prof1', password:'professor1', firstName:'Dr. James', lastName:'Walker',
      role:'professor', badge:'P-0042', dept:'TLEA Faculty',
      joined: new Date().toISOString(),
      progress: { lessonsCompleted:78, quizScores:[], hoursLogged:480, currentWeek:26, currentDay:1 }
    };
  }
  saveUsers(users);
})();

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('login-user').value.trim();
  const password = document.getElementById('login-pass').value;
  const remember = document.getElementById('remember-me').checked;
  const errEl = document.getElementById('login-error');

  const users = getUsers();
  const user = users[username.toLowerCase()];
  if (!user || user.password !== password) {
    errEl.textContent = 'Invalid username or password. Try: cadet1 / academy123';
    errEl.classList.remove('hidden');
    return;
  }
  errEl.classList.add('hidden');

  // Log login
  user.lastLogin = new Date().toISOString();
  users[username.toLowerCase()] = user;
  saveUsers(users);

  const sessionUser = { ...user };
  delete sessionUser.password;
  setSession(sessionUser, remember);
  window.location.href = 'dashboard.html';
}

function handleRegister(e) {
  e.preventDefault();
  const first = document.getElementById('reg-first').value.trim();
  const last  = document.getElementById('reg-last').value.trim();
  const uname = document.getElementById('reg-user').value.trim().toLowerCase();
  const pass  = document.getElementById('reg-pass').value;
  const role  = document.getElementById('reg-role').value;
  const badge = document.getElementById('reg-badge').value.trim();
  const dept  = document.getElementById('reg-dept').value.trim();
  const errEl = document.getElementById('reg-error');

  if (!uname || !pass || !first || !last) {
    errEl.textContent = 'Please fill in all required fields.';
    errEl.classList.remove('hidden');
    return;
  }
  const users = getUsers();
  if (users[uname]) {
    errEl.textContent = 'Username already taken. Please choose another.';
    errEl.classList.remove('hidden');
    return;
  }
  const newUser = {
    username: uname, password: pass,
    firstName: first, lastName: last,
    role, badge, dept,
    joined: new Date().toISOString(),
    progress: { lessonsCompleted:0, quizScores:[], hoursLogged:0, currentWeek:1, currentDay:1 }
  };
  users[uname] = newUser;
  saveUsers(users);

  const sessionUser = { ...newUser }; delete sessionUser.password;
  setSession(sessionUser, false);
  window.location.href = 'dashboard.html';
}

function logout() {
  clearSession();
  window.location.href = 'index.html';
}
