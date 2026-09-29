document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('backIcon').innerHTML = Icons.arrowLeft;

  try {
    const res = await fetch('speech.json');
    const speeches = await res.json();
    const list = document.getElementById('speechList');

    list.innerHTML = speeches.map(s => `
      <article class="speech-card">
        <div style="max-width: 75%;">
          <span style="font-size:0.78rem; font-weight:700; color:var(--accent-gold); text-transform:uppercase;">
            ${s.date} · ${s.location}
          </span>
          <h2 class="speech-title">${s.title}</h2>
          <p class="speech-excerpt">"${s.audioTranscript}"</p>
        </div>
        <button class="speech-play-btn" onclick="playArchivalSpeech('${encodeURIComponent(s.audioTranscript)}')">
          ${Icons.microphone} Play Voice
        </button>
      </article>
    `).join('');
  } catch (e) {
    console.error("Failed to load speech/speech.json", e);
  }
});

function playArchivalSpeech(encodedText) {
  const text = decodeURIComponent(encodedText);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.92;
    window.speechSynthesis.speak(utt);
  } else {
    alert("Speech audio synthesis is not supported on this browser.");
  }
}