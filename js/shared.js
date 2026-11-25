const BUSSOLAB_USER_KEY = 'bussolab_user';

function getStoredUser() {
  try {
    const raw = localStorage.getItem(BUSSOLAB_USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveStoredUser(user) {
  try {
    localStorage.setItem(BUSSOLAB_USER_KEY, JSON.stringify(user));
  } catch {

  }
}

function getInitials(name) {
  if (!name) return 'BL';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function initHeaderUser() {
  const pill = document.getElementById('header-user-pill');
  if (!pill) return;

  const user = getStoredUser();
  const initialsEl = pill.querySelector('.user-initials');
  const nameEl = pill.querySelector('.user-name-label');

  if (user && user.nome) {
    if (initialsEl) initialsEl.textContent = getInitials(user.nome);
    if (nameEl) nameEl.textContent = user.nome.split(' ')[0];
    pill.title = `Perfil simulado: ${user.nome} (clique para alterar)`;
  } else {
    if (initialsEl) initialsEl.textContent = '→';
    if (nameEl) nameEl.textContent = 'Entrar';
    pill.title = 'Entrar (simulado)';
  }
}

document.addEventListener('DOMContentLoaded', initHeaderUser);
