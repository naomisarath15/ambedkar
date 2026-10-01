const knowledge = [
	{ keys: ["columbia", "university", "new york", "study"], answer: "At Columbia University from 1913, Ambedkar studied economics, political science, and sociology under John Dewey and Edwin Seligman. His paper on Castes in India began there, and Columbia later awarded him an honorary Doctor of Laws in 1952." },
	{ keys: ["mahad", "water", "chavdar", "satyagraha"], answer: "On 20 March 1927 at Mahad, Ambedkar led thousands to claim the civic right to draw water from Chavdar Tank. He described the action as a declaration that oppressed people were human beings with equal public rights." },
	{ keys: ["constitution", "drafting", "article 32", "heart and soul"], answer: "As Chairman of the Drafting Committee, Ambedkar defended fundamental rights, adult franchise, and constitutional remedies. He called Article 32 the heart and soul because it lets people approach the Supreme Court to enforce their rights." },
	{ keys: ["women", "hindu code", "gender", "ramabai"], answer: "Ambedkar linked democracy with equality inside the family. He advocated inheritance, marriage, divorce, and guardianship reforms through the Hindu Code Bill, and measured community progress by the progress of its women." },
	{ keys: ["book", "annihilation", "caste", "writing"], answer: "Annihilation of Caste argues that caste is not simply a division of labour but a division of labourers. Ambedkar insisted that social democracy needs liberty, equality, and fraternity, not only political elections." },
	{ keys: ["buddha", "dhamma", "buddhism", "nagpur", "conversion"], answer: "On 14 October 1956 at Nagpur, Ambedkar embraced Buddhism with hundreds of thousands of followers and gave twenty-two vows. He presented Dhamma as an ethical path grounded in reason, compassion, and equality." },
	{ keys: ["labour", "worker", "8 hour", "water policy"], answer: "During his years on the Viceroy's Executive Council, Ambedkar helped establish the eight-hour workday, maternity protections, and institutions for irrigation, water, and power planning." },
	{ keys: ["life", "born", "mhow", "early"], answer: "Bhimrao Ramji Ambedkar was born on 14 April 1891 in Mhow. His education carried him from Elphinstone College to Columbia University and the London School of Economics before he returned to organize for equality." }
];

const fallbackAnswers = [
	"That question touches a large part of the archive. A useful place to begin is Ambedkar's insistence that education must become organized public action, not only personal advancement.",
	"The archive does not reduce Babasaheb to one role. He was an economist, lawyer, teacher, legislator, editor, constitutional thinker, and leader of mass movements for dignity.",
	"Try naming a place, book, movement, law, or idea. I can follow that thread through the archive and explain its historical significance."
];
const languageNames = { en: "English", hi: "Hindi", mr: "Marathi", bn: "Bengali", ta: "Tamil", te: "Telugu", kn: "Kannada", gu: "Gujarati", es: "Spanish", fr: "French", de: "German", ar: "Arabic" };
const messages = document.getElementById("messages");
const input = document.getElementById("questionInput");
const languageSelect = document.getElementById("languageSelect");
const speakToggle = document.getElementById("speakToggle");
const status = document.getElementById("voiceStatus");
let fallbackIndex = 0;

function addMessage(text, role) { const bubble = document.createElement("div"); bubble.className = `message ${role}`; bubble.textContent = text; messages.appendChild(bubble); messages.scrollTop = messages.scrollHeight; }
function findAnswer(question) { const normalized = question.trim().toLowerCase().replace(/[.!?,]+$/, ""); if (normalized === "hey bhim") return "Hey! I'm Bhim, your guide to Dr. B. R. Ambedkar's life and legacy. What would you like to know?"; const match = knowledge.find(item => item.keys.some(key => normalized.includes(key))); return match ? match.answer : fallbackAnswers[fallbackIndex++ % fallbackAnswers.length]; }
async function translate(text, target) { if (target === "en") return text; try { const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`); const data = await response.json(); return data[0].map(chunk => chunk[0]).join(""); } catch (error) { return text; } }
async function speak(text) { if (!("speechSynthesis" in window)) return; speechSynthesis.cancel(); const target = languageSelect.value; const translated = await translate(text, target); const utterance = new SpeechSynthesisUtterance(translated); utterance.lang = target; utterance.rate = .94; speechSynthesis.speak(utterance); }
async function ask(question) { const cleanQuestion = question.trim(); if (!cleanQuestion) return; addMessage(cleanQuestion, "user"); input.value = ""; const answer = findAnswer(cleanQuestion); addMessage(answer, "guide"); if (speakToggle.checked) await speak(answer); }

document.getElementById("sendButton").addEventListener("click", () => ask(input.value));
input.addEventListener("keydown", event => { if (event.key === "Enter") ask(input.value); });
document.querySelectorAll("[data-question]").forEach(button => button.addEventListener("click", () => { input.value = button.dataset.question; ask(input.value); }));
document.getElementById("stopVoice").addEventListener("click", () => { if ("speechSynthesis" in window) speechSynthesis.cancel(); });

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (Recognition) {
	const recognition = new Recognition(); recognition.continuous = false; recognition.interimResults = false;
	document.getElementById("voiceButton").addEventListener("click", () => { recognition.lang = `${languageSelect.value}-${languageSelect.value === "en" ? "IN" : "IN"}`; status.textContent = "Listening... ask your question."; recognition.start(); });
	recognition.onresult = event => { const transcript = event.results[0][0].transcript; status.textContent = `Heard: ${transcript}`; ask(transcript); };
	recognition.onerror = () => { status.textContent = "Voice input could not hear that. Try again or type your question."; };
	recognition.onend = () => { if (status.textContent === "Listening... ask your question.") status.textContent = "Voice input is ready."; };
} else { document.getElementById("voiceButton").disabled = true; status.textContent = "Voice input is unavailable in this browser. Typing and spoken replies still work."; }

addMessage(`Welcome. Ask me in ${languageNames[languageSelect.value]} about Ambedkar's life, ideas, books, movements, or Constitution.`, "guide");
