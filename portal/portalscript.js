const audio = document.getElementById("quoteAudio");
const audioToggle = document.getElementById("audioToggle");
const audioButtonLabel = document.getElementById("audioButtonLabel");
const audioStatus = document.getElementById("audioStatus");
let audioRequested = false;

function updateAudioButton(isPlaying) {
	audioButtonLabel.textContent = isPlaying ? "Pause the quote" : "Listen to the quote";
	audioToggle.querySelector(".audio-icon").textContent = isPlaying ? "Ⅱ" : "▶";
	audioToggle.setAttribute("aria-pressed", String(isPlaying));
	audioToggle.setAttribute("aria-label", isPlaying ? "Pause the quote audio" : "Play the quote audio");
}

audioToggle.addEventListener("click", async () => {
	audioRequested = true;
	audioStatus.textContent = "";

	if (audio.paused) {
		try {
			await audio.play();
		} catch {
			audioStatus.textContent = "The quote audio could not be played.";
		}
	} else {
		audio.pause();
	}
});

audio.addEventListener("play", () => updateAudioButton(true));
audio.addEventListener("pause", () => updateAudioButton(false));
audio.addEventListener("ended", () => updateAudioButton(false));
audio.addEventListener("error", () => {
	if (audioRequested) {
		audioStatus.textContent = "The quote audio could not be loaded.";
	}
});
