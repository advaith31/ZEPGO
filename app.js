const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const toast = document.querySelector('#toast');
const loginScreen = document.querySelector('#login-screen');

function enterApp(message) {
  loginScreen?.classList.add('hidden');
  if (message && toast) {
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

document.querySelector('#demo-button')?.addEventListener('click', () => enterApp('Demo loaded · Welcome to ZepGO'));
document.querySelector('#login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  enterApp('Signed in · Welcome back');
});
document.querySelector('#toggle-password')?.addEventListener('click', (event) => {
  const input = document.querySelector('#password-input');
  input.type = input.type === 'password' ? 'text' : 'password';
  event.currentTarget.textContent = input.type === 'password' ? 'Show' : 'Hide';
});

function showView(name) {
  const target = document.querySelector(`#${name}-view`);
  if (!target) return;
  views.forEach((view) => view.classList.toggle('active-view', view === target));
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-view]');
  if (trigger) showView(trigger.dataset.view);
});

document.querySelector('#navigate-button')?.addEventListener('click', () => {
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3400);
});

document.querySelector('#planner-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  showView('dashboard');
  toast.textContent = 'Journey analyzed · Route updated';
  toast.classList.add('show');
  window.setTimeout(() => {
    toast.classList.remove('show');
    toast.textContent = 'Navigation started · GreenVolt Station';
  }, 3400);
});

document.querySelectorAll('.station-row').forEach((station) => {
  station.addEventListener('click', () => {
    station.closest('.station-list').querySelectorAll('.station-row').forEach((row) => row.classList.remove('selected'));
    station.classList.add('selected');
  });
});
