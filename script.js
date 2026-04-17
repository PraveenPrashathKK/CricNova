document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".card-video");
  videos.forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
const fmtTabs = document.querySelectorAll(".fmt-tab");
const fmtPanels = document.querySelectorAll(".fmt-panel");

fmtTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    fmtTabs.forEach(t => t.classList.remove("active"));
    fmtPanels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById("fmt-" + tab.dataset.fmt).classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("fullscreen-btn");
  const img = document.querySelector(".field-img");

  btn.addEventListener("click", () => {
    if (img.requestFullscreen) img.requestFullscreen();
    else if (img.webkitRequestFullscreen) img.webkitRequestFullscreen();
    else if (img.msRequestFullscreen) img.msRequestFullscreen();
  });
});

const menuIcon = document.querySelector(".menu-icon");
const navMenu  = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// ── Feedback Popup ──
const fbToggleBtn = document.getElementById('fb-toggle-btn');
const fbOverlay   = document.getElementById('fb-overlay');
const fbClose     = document.getElementById('fb-close');

fbToggleBtn.addEventListener('click', () => {
  fbOverlay.classList.add('fb-open');
});

fbClose.addEventListener('click', () => {
  fbOverlay.classList.remove('fb-open');
});

// Close on clicking outside the popup
fbOverlay.addEventListener('click', (e) => {
  if (e.target === fbOverlay) fbOverlay.classList.remove('fb-open');
});

// ── Validation ──
const fbName    = document.getElementById('fb-name');
const fbEmail   = document.getElementById('fb-email');
const fbMsg     = document.getElementById('fb-msg');
const fbBtn     = document.getElementById('fb-btn');
const fbSuccess = document.getElementById('fb-success');
const errName   = document.getElementById('err-name');
const errEmail  = document.getElementById('err-email');
const errMsg    = document.getElementById('err-msg');

function setErr(input, errEl, msg) {
  errEl.textContent = msg;
  input.classList.add('error');
}

function clearErr(input, errEl) {
  errEl.textContent = '';
  input.classList.remove('error');
}

fbName.addEventListener('input',  () => clearErr(fbName,  errName));
fbEmail.addEventListener('input', () => clearErr(fbEmail, errEmail));
fbMsg.addEventListener('input',   () => clearErr(fbMsg,   errMsg));

fbBtn.addEventListener('click', () => {
  let valid = true;
  fbSuccess.style.display = 'none';

  const name  = fbName.value.trim();
  const email = fbEmail.value.trim();
  const msg   = fbMsg.value.trim();

  if (name === '') {
    setErr(fbName, errName, 'Name is required.');
    valid = false;
  }
  if (email === '') {
    setErr(fbEmail, errEmail, 'Email is required.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setErr(fbEmail, errEmail, 'Enter a valid email address.');
    valid = false;
  }
  if (msg === '') {
    setErr(fbMsg, errMsg, 'Please write your feedback.');
    valid = false;
  } else if (msg.length < 10) {
    setErr(fbMsg, errMsg, 'Feedback must be at least 10 characters.');
    valid = false;
  }

  if (valid) {
    fbName.value  = '';
    fbEmail.value = '';
    fbMsg.value   = '';
    fbSuccess.style.display = 'block';
    fbBtn.textContent = '✓ Sent!';
    fbBtn.style.background = '#00c48c';
    fbBtn.style.color = '#fff';
    setTimeout(() => {
      fbBtn.textContent = 'Send Feedback';
      fbBtn.style.background = '';
      fbBtn.style.color = '';
      fbSuccess.style.display = 'none';
      fbOverlay.classList.remove('fb-open');
    }, 3000);
  }
});

// ── Player Profile Popup ──
const playerOverlay = document.getElementById('player-overlay');
const playerClose   = document.getElementById('player-close');

document.querySelectorAll('.view-profile-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('pp-img').src        = btn.dataset.img;
    document.getElementById('pp-name').textContent    = btn.dataset.name;
    document.getElementById('pp-role').textContent    = btn.dataset.role;
    document.getElementById('pp-country').textContent = btn.dataset.country;
    document.getElementById('pp-desc').textContent    = btn.dataset.desc;
    document.getElementById('pp-tests').textContent   = btn.dataset.tests;
    document.getElementById('pp-odis').textContent    = btn.dataset.odis;
    document.getElementById('pp-t20s').textContent    = btn.dataset.t20s;
    document.getElementById('pp-runs').textContent    = btn.dataset.runs;
    playerOverlay.classList.add('pp-open');
  });
});

playerClose.addEventListener('click', () => {
  playerOverlay.classList.remove('pp-open');
});

playerOverlay.addEventListener('click', (e) => {
  if (e.target === playerOverlay) playerOverlay.classList.remove('pp-open');
});