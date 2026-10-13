// Secret: the Konami code (or five quick taps on the name) switches to a Game Boy palette.
// The page is complete without this file.
const root = document.documentElement;
const KEY = 'gameboy';

const read = () => {
  try {
    return localStorage.getItem(KEY) === 'on';
  } catch {
    return false;
  }
};

const save = (on) => {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {}
};

let toastTimer = 0;
const toast = (text) => {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('p');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
    el.offsetWidth; // let the hidden position render first, so the first toast slides in too
  }
  el.textContent = text;
  el.classList.add('is-shown');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-shown'), 2600);
};

const toggle = () => {
  const on = !root.hasAttribute('data-gameboy');
  root.toggleAttribute('data-gameboy', on);
  save(on);
  toast(on ? '★ Secret found: Game Boy mode' : '★ Back to normal colours');
};

if (read()) root.setAttribute('data-gameboy', '');

const CODE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
let step = 0;
addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  step = key === CODE[step] ? step + 1 : key === CODE[0] ? 1 : 0;
  if (step === CODE.length) {
    step = 0;
    toggle();
  }
});

// Touch screens have no arrow keys: five taps on the name within two seconds.
const name = document.querySelector('.top h1');
let taps = [];
name?.addEventListener('click', () => {
  const now = Date.now();
  taps = [...taps.filter((t) => now - t < 2000), now];
  if (taps.length === 5) {
    taps = [];
    toggle();
  }
});
