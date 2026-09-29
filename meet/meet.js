let reelsData = [];

document.addEventListener('DOMContentLoaded', async () => {
  if (typeof Icons !== 'undefined') {
    document.getElementById('backIcon').innerHTML = Icons.arrowLeft;
  }

  try {
    const res = await fetch('meet.json');
    reelsData = await res.json();
    renderReels(reelsData);
  } catch (e) {
    console.error("Failed to load meet/meet.json", e);
  }
});

function renderReels(reels) {
  const catalog = document.getElementById('reelCatalog');
  catalog.innerHTML = reels.map((r, index) => `
    <article class="reel-card" id="card-${r.id}">
      <div style="max-width: 72%;">
        <span style="font-size:0.75rem; font-weight:700; color:var(--accent-gold); text-transform:uppercase;">${r.date}</span>
        <h2 class="reel-title">${r.title}</h2>
        <p class="reel-meta">${r.duration} · ${r.desc}</p>
      </div>
      <button class="nav-button" style="background:#7c441a; color:#fff;" onclick="playArchivalReel(${index})">
        ${(typeof Icons !== 'undefined' && Icons.video) ? Icons.video : ''} Play Footage
      </button>
    </article>
  `).join('');
}

function playArchivalReel(index) {
  const reel = reelsData[index];
  if (!reel) return;

  const deck = document.getElementById('cinemaDeck');
  const player = document.getElementById('kioskVideoPlayer');
  const source = document.getElementById('videoSource');

  // Highlight active reel card
  document.querySelectorAll('.reel-card').forEach(c => c.classList.remove('active-reel'));
  const activeCard = document.getElementById(`card-${reel.id}`);
  if (activeCard) activeCard.classList.add('active-reel');

  // Load MP4 stream and play directly via HTML5 Video
  source.src = reel.videoUrl;
  player.load();
  deck.classList.add('playing');
  player.play().catch(err => console.log("Autoplay waiting for user gesture:", err));

  deck.scrollIntoView({ behavior: 'smooth' });
}

function playFirstReel() {
  if (reelsData.length > 0) {
    playArchivalReel(0);
  }
}