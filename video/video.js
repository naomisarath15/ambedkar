const recordings = [
  { id: "lPsZLK540Cg", start: 122, title: "Archival Ambedkar Address", date: "Archival video • starts at 1:22", text: "A selected video record from the Speech Cinema collection, beginning at the requested timestamp.", watchUrl: "https://www.youtube.com/watch?v=lPsZLK540Cg&t=122s" },
  { id: "WS7P9TKDZ2k", start: 0, title: "The Social Structure Must Change", date: "BBC interview, 1953", text: "Democracy will not work for the simple reason that we have got a social structure which is totally incompatible with parliamentary democracy.", watchUrl: "https://www.youtube.com/watch?v=WS7P9TKDZ2k" }
];
const videoFrame = document.getElementById("videoFrame");
const videoList = document.getElementById("videoList");
const transcript = document.getElementById("transcript");
const youtubeFallback = document.getElementById("youtubeFallback");
function selectRecording(recording) { const startQuery = recording.start ? `?start=${recording.start}` : ""; videoFrame.src = `https://www.youtube.com/embed/${recording.id}${startQuery}`; youtubeFallback.href = recording.watchUrl; transcript.innerHTML = `<p class="eyebrow">${recording.date}</p><h2>${recording.title}</h2><blockquote>“${recording.text}”</blockquote>`; document.querySelectorAll(".recording-button").forEach(button => button.classList.toggle("active", button.dataset.id === recording.id)); }
recordings.forEach(recording => { const button = document.createElement("button"); button.className = "recording-button"; button.dataset.id = recording.id; button.innerHTML = `<span>${recording.date}</span><strong>${recording.title}</strong>`; button.addEventListener("click", () => selectRecording(recording)); videoList.appendChild(button); });
selectRecording(recordings[0]);
