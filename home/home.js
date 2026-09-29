/* =========================================================================
   1. AUTOMATIC SPLASH SCREEN (EXACTLY 2 SECONDS)
   ========================================================================= */
const splashScreen = document.getElementById("splashScreen");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (splashScreen) {
      splashScreen.classList.add("fade-out");
      setTimeout(() => {
        splashScreen.style.display = "none";
      }, 800);
    }
  }, 2000);
});

/* =========================================================================
   2. TOPBAR NAVIGATION & MODAL PIPELINE
   ========================================================================= */
// Nav Buttons
const openLifelineTile = document.getElementById("openLifelineTile");
const openChatbotTile = document.getElementById("openChatbotTile");
const openBooksTile = document.getElementById("openBooksTile");
const openSpeechesTile = document.getElementById("openSpeechesTile");
const openAboutTile = document.getElementById("openAboutTile");
const openQuotesTile = document.getElementById("openQuotesTile");
const openPhotoVaultTile = document.getElementById("openPhotoVaultTile");
const openStatsTile = document.getElementById("openStatsTile");
const openSettingsTile = document.getElementById("openSettingsTile");
const openEmergencyTile = document.getElementById("openEmergencyTile");

// Hero Action Button
const heroExploreLegacyBtn = document.getElementById("heroExploreLegacyBtn");

// Modals
const lifelineModal = document.getElementById("lifelineModal");
const chatbotModal = document.getElementById("chatbotModal");
const booksModal = document.getElementById("booksModal");
const speechesModal = document.getElementById("speechesModal");
const aboutModal = document.getElementById("aboutModal");
const quotesModal = document.getElementById("quotesModal");
const statsModal = document.getElementById("statsModal");
const emergencyModal = document.getElementById("emergencyModal");

function openModal(modal) {
  closeAllModals();
  if (modal) modal.classList.add("active");
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  const frame = document.getElementById("mainSpeechFrame");
  if (frame && frame.src) {
    frame.src = frame.src;
  }
}

// Nav Click Listeners
if (openLifelineTile) openLifelineTile.addEventListener("click", () => openModal(lifelineModal));
if (openChatbotTile) openChatbotTile.addEventListener("click", () => openModal(chatbotModal));
if (openBooksTile) openBooksTile.addEventListener("click", () => {
  openModal(booksModal);
  renderBooksList(all39Books);
});
if (openSpeechesTile) openSpeechesTile.addEventListener("click", () => openModal(speechesModal));
if (openAboutTile) openAboutTile.addEventListener("click", () => openModal(aboutModal));
if (openQuotesTile) openQuotesTile.addEventListener("click", () => openModal(quotesModal));
if (openPhotoVaultTile) openPhotoVaultTile.addEventListener("click", () => openModal(lifelineModal));
if (openStatsTile) openStatsTile.addEventListener("click", () => openModal(statsModal));
if (openSettingsTile) openSettingsTile.addEventListener("click", () => openModal(aboutModal));
if (openEmergencyTile) openEmergencyTile.addEventListener("click", () => openModal(emergencyModal));

if (heroExploreLegacyBtn) {
  heroExploreLegacyBtn.addEventListener("click", () => openModal(aboutModal));
}

// Close Buttons
const closeLifelineBtn = document.getElementById("closeLifelineBtn");
const closeChatbotBtn = document.getElementById("closeChatbotBtn");
const closeBooksBtn = document.getElementById("closeBooksBtn");
const closeSpeechesBtn = document.getElementById("closeSpeechesBtn");
const closeAboutBtn = document.getElementById("closeAboutBtn");
const closeQuotesBtn = document.getElementById("closeQuotesBtn");
const closeStatsBtn = document.getElementById("closeStatsBtn");
const closeEmergencyBtn = document.getElementById("closeEmergencyBtn");

if (closeLifelineBtn) closeLifelineBtn.addEventListener("click", closeAllModals);
if (closeChatbotBtn) closeChatbotBtn.addEventListener("click", closeAllModals);
if (closeBooksBtn) closeBooksBtn.addEventListener("click", closeAllModals);
if (closeSpeechesBtn) closeSpeechesBtn.addEventListener("click", closeAllModals);
if (closeAboutBtn) closeAboutBtn.addEventListener("click", closeAllModals);
if (closeQuotesBtn) closeQuotesBtn.addEventListener("click", closeAllModals);
if (closeStatsBtn) closeStatsBtn.addEventListener("click", closeAllModals);
if (closeEmergencyBtn) closeEmergencyBtn.addEventListener("click", closeAllModals);

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeAllModals();
  });
});

/* =========================================================================
   3. CLOCKWISE ROTATING LIFELINE ENGINE
   ========================================================================= */
const milestones = [
  {
    id: 1,
    year: "1891–1907",
    era: "Era 01 / 07",
    title: "Roots in Mhow & The Resolute Student",
    wheelImage: "../Life line/images/images (5).jpg",
    wheelCaption: "Early Lineage & Youth",
    narrative: "Born in Mhow to Bhimabai and Subedar Major Ramji Maloji Sakpal. Overcoming harsh caste segregation at school where he had to sit apart on a gunny sack, Bhimrao's unwavering dedication to books culminated in his matriculation in 1907.",
    gallery: [
      { url: "../Life line/images/images (5).jpg", title: "Babasaheb Ambedkar", desc: "14th April 1891 – 6th December 1956" },
      { url: "../Life line/images/images (4).jpg", title: "The Thinker", desc: "Archival Portrait" },
      { url: "../Life line/images/images (1).jpg", title: "Home Sanctuary", desc: "Moments of quiet peace" }
    ]
  },
  {
    id: 2,
    year: "1913–1923",
    era: "Era 02 / 07",
    title: "Columbia, London & Gray's Inn",
    wheelImage: "../Life line/images/Ambedkar_Barrister.jpg",
    wheelCaption: "Barrister-at-Law & Advocate",
    narrative: "After earning doctorates from Columbia University and the London School of Economics, Dr. Ambedkar was called to the Bar at Gray's Inn. Adorned in the advocate's gown and bands, he practiced at the Bombay High Court and championed the legal rights of the oppressed.",
    gallery: [
      { url: "../Life line/images/Ambedkar_Barrister.jpg", title: "Advocate's Gown", desc: "Bombay High Court Barrister" },
      { url: "../Life line/images/images (4).jpg", title: "The Jurist", desc: "Portrait with Spectacles" },
      { url: "../Life line/images/images (5).jpg", title: "Scholarly Tribute", desc: "Legal and constitutional mind" }
    ]
  },
  {
    id: 3,
    year: "1930s",
    era: "Era 03 / 07",
    title: "Rajgruha & The Library Sanctuary",
    wheelImage: "../Life line/images/images.jpg",
    wheelCaption: "The Scholar at Rajgruha",
    narrative: "Dr. Ambedkar built his residence, Rajgruha in Dadar, specifically designed to house his legendary collection of over 50,000 books. Standing in his traditional attire with his walking stick, his library served as the intellectual command center of the social movement.",
    gallery: [
      { url: "../Life line/images/images.jpg", title: "Walking Cane in Library", desc: "Among thousands of historical volumes" },
      { url: "../Life line/images/images (1).jpg", title: "Home Solitude", desc: "Verandah moments" },
      { url: "../Life line/images/Ambedkar_Barrister.jpg", title: "Legal Treatise", desc: "Constitutional jurisprudence" }
    ]
  },
  {
    id: 4,
    year: "1940s",
    era: "Era 04 / 07",
    title: "Quiet Companionship & Verandah Peace",
    wheelImage: "../Life line/images/images (1).jpg",
    wheelCaption: "Verandah with pet companion",
    narrative: "Beyond public assemblies, Dr. Ambedkar was a deeply compassionate soul and animal lover who found solace in the company of his pet dogs. Seated on the verandah in a relaxed suit, this rare moment captures his gentle, contemplative spirit away from political turmoil.",
    gallery: [
      { url: "../Life line/images/images (1).jpg", title: "With his Pet Dog", desc: "Relaxing on the verandah" },
      { url: "../Life line/images/images (3).jpg", title: "Verandah Wicker Chair", desc: "Deep reflection outdoors" },
      { url: "../Life line/images/images (2).jpg", title: "Garden Flora", desc: "Standing beside bougainvillea" }
    ]
  },
  {
    id: 5,
    year: "1946",
    era: "Era 05 / 07",
    title: "The Statesman: LIFE Magazine Session",
    wheelImage: "../Life line/images/images (2).jpg",
    wheelCaption: "LIFE Magazine Shoot, New Delhi",
    narrative: "During crucial constitutional negotiations, photojournalist Margaret Bourke-White photographed Dr. Ambedkar at his New Delhi residence for LIFE magazine. Pictured beside garden flora in a tailored suit, he embodied intellectual command and supreme dignity.",
    gallery: [
      { url: "../Life line/images/images (2).jpg", title: "Standing by Bougainvillea", desc: "LIFE Magazine Session, 1946" },
      { url: "../Life line/images/images (3).jpg", title: "Pensive on Verandah", desc: "Seated in cane chair" },
      { url: "../Life line/images/images (4).jpg", title: "Iconic Headshot", desc: "Signature spectacles and tie" }
    ]
  },
  {
    id: 6,
    year: "1947–1950",
    era: "Era 06 / 07",
    title: "Architect of the Indian Constitution",
    wheelImage: "../Life line/images/images (4).jpg",
    wheelCaption: "Chairman of Drafting Committee",
    narrative: "As free India's first Law Minister and Chairman of the Constitution Drafting Committee, Dr. Ambedkar framed the world's longest democratic constitution, guaranteeing equality before law, the abolition of untouchability, and progressive rights through the Hindu Code Bill.",
    gallery: [
      { url: "../Life line/images/images (4).jpg", title: "Law Minister Portrait", desc: "Architect of the Republic" },
      { url: "../Life line/images/images (5).jpg", title: "Babasaheb Memorial", desc: "Tribute to the Father of the Constitution" },
      { url: "../Life line/images/Ambedkar_Barrister.jpg", title: "The Legal Pioneer", desc: "Master of Jurisprudence" }
    ]
  },
  {
    id: 7,
    year: "1956",
    era: "Era 07 / 07",
    title: "Deekshabhoomi & The Eternal Light",
    wheelImage: "../Life line/images/images (3).jpg",
    wheelCaption: "Reflection & Buddhist Revival",
    narrative: "On 14 October 1956 at Nagpur's Deekshabhoomi, Babasaheb embraced Buddhism alongside half a million followers, reviving the Dhamma of compassion and human dignity. His final message endures as a beacon for humanity: 'Educate, Agitate, Organize.'",
    gallery: [
      { url: "../Life line/images/images (3).jpg", title: "Contemplation on the Verandah", desc: "Philosopher in deep thought" },
      { url: "../Life line/images/images (4).jpg", title: "The Visionary Guide", desc: "Timeless portrait" },
      { url: "../Life line/images/images (5).jpg", title: "Eternal Remembrance", desc: "Dr. B. R. Ambedkar (1891–1956)" }
    ]
  }
];

let currentIndex = 0;
const totalNodes = milestones.length;
const angleStep = 360 / totalNodes;
const radius = 115;

const wheelTrack = document.getElementById("wheelTrack");
const eraBadge = document.getElementById("eraBadge");
const yearHeader = document.getElementById("yearHeader");
const storyTitle = document.getElementById("storyTitle");
const storyNarrative = document.getElementById("storyNarrative");
const galleryStrip = document.getElementById("galleryStrip");
const activeDishCaption = document.getElementById("activeDishCaption");
const timelineScrubber = document.getElementById("timelineScrubber");
const lifelineSection = document.getElementById("lifelineSection");

function initLifeLine() {
  if (!wheelTrack) return;
  buildWheel();
  buildScrubber();
  renderStage(0);

  if (lifelineSection) {
    lifelineSection.addEventListener("click", (e) => {
      if (e.target.closest(".gallery-thumb, .scrub-pill, .stationary-caption, .modal-close-btn")) return;
      nextStage();
    });
  }
}

function buildWheel() {
  wheelTrack.innerHTML = "";
  milestones.forEach((m, idx) => {
    const slot = document.createElement("div");
    slot.className = `dish-slot ${idx === 0 ? "active" : ""}`;
    slot.id = `dish-slot-${idx}`;

    const theta = (idx * angleStep) * (Math.PI / 180);
    const x = Math.cos(theta) * radius;
    const y = Math.sin(theta) * radius;
    slot.style.transform = `translate(${x}px, ${y}px)`;

    slot.innerHTML = `
      <div class="dish-portrait-frame" id="frame-${idx}">
        <img src="${m.wheelImage}" alt="${m.wheelCaption}" />
      </div>
    `;
    wheelTrack.appendChild(slot);
  });
}

function buildScrubber() {
  if (!timelineScrubber) return;
  timelineScrubber.innerHTML = "";
  milestones.forEach((m, idx) => {
    const pill = document.createElement("div");
    pill.className = `scrub-pill ${idx === 0 ? "active" : ""}`;
    pill.innerText = m.year.split("–")[0];
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      goToIndex(idx);
    });
    timelineScrubber.appendChild(pill);
  });
}

function renderStage(index) {
  currentIndex = index;
  const current = milestones[index];

  const textGroup = [yearHeader, storyTitle, storyNarrative, galleryStrip];
  textGroup.forEach(el => { if (el) el.style.opacity = 0; });

  setTimeout(() => {
    if (eraBadge) eraBadge.innerText = current.era;
    if (yearHeader) yearHeader.innerText = current.year;
    if (storyTitle) storyTitle.innerText = current.title;
    if (storyNarrative) storyNarrative.innerText = current.narrative;
    if (activeDishCaption) activeDishCaption.innerText = current.wheelCaption;

    if (galleryStrip) {
      galleryStrip.innerHTML = "";
      current.gallery.forEach(photo => {
        const thumb = document.createElement("div");
        thumb.className = "gallery-thumb";
        thumb.innerHTML = `<img src="${photo.url}" alt="${photo.title}" />`;
        thumb.addEventListener("click", (e) => {
          e.stopPropagation();
          openLightbox(photo);
        });
        galleryStrip.appendChild(thumb);
      });
    }

    textGroup.forEach(el => { if (el) el.style.opacity = 1; });
  }, 180);

  document.querySelectorAll(".dish-slot").forEach((el, i) => el.classList.toggle("active", i === index));
  document.querySelectorAll(".scrub-pill").forEach((el, i) => el.classList.toggle("active", i === index));

  const baseRotation = (index * angleStep) + 135;
  if (wheelTrack) wheelTrack.style.transform = `rotate(${baseRotation}deg)`;

  milestones.forEach((_, i) => {
    const frame = document.getElementById(`frame-${i}`);
    if (frame) frame.style.transform = `rotate(${-baseRotation}deg)`;
  });
}

function nextStage() { goToIndex((currentIndex + 1) % totalNodes); }
function prevStage() { goToIndex((currentIndex - 1 + totalNodes) % totalNodes); }
function goToIndex(idx) { renderStage(idx); }

/* =========================================================================
   4. BOT BABASAHEB (AI BOT + SPEECH-TO-TEXT + TEXT-TO-SPEECH)
   ========================================================================= */
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const toggleVoiceBtn = document.getElementById("toggleVoiceBtn");

let voiceEnabled = true;

function initChatbot() {
  if (toggleVoiceBtn) {
    toggleVoiceBtn.addEventListener("click", () => {
      voiceEnabled = !voiceEnabled;
      toggleVoiceBtn.classList.toggle("active", voiceEnabled);
    });
  }

  if (sendBtn) sendBtn.addEventListener("click", handleUserMessage);
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleUserMessage();
    });
  }

  document.querySelectorAll(".sugg-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (chatInput) {
        chatInput.value = chip.getAttribute("data-q");
        handleUserMessage();
      }
    });
  });

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    if (micBtn) {
      micBtn.addEventListener("click", () => {
        micBtn.classList.add("recording");
        recognition.start();
      });

      recognition.onresult = (e) => {
        if (chatInput) {
          chatInput.value = e.results[0][0].transcript;
          micBtn.classList.remove("recording");
          handleUserMessage();
        }
      };

      recognition.onerror = () => micBtn.classList.remove("recording");
      recognition.onend = () => micBtn.classList.remove("recording");
    }
  } else if (micBtn) {
    micBtn.style.display = "none";
  }
}

function handleUserMessage() {
  if (!chatInput) return;
  const query = chatInput.value.trim();
  if (!query) return;

  appendChatMsg(query, "user");
  chatInput.value = "";

  setTimeout(() => {
    const reply = generateAiReply(query);
    appendChatMsg(reply, "ai");
    if (voiceEnabled) speakText(reply);
  }, 400);
}

function appendChatMsg(text, sender) {
  if (!chatMessages) return;
  const div = document.createElement("div");
  div.className = `chat-msg msg-${sender}`;
  div.innerHTML = `<div class="msg-bubble">${text}</div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAiReply(q) {
  const lower = q.toLowerCase();
  if (lower.match(/\b(hey|hi|hello|namaste|jai bhim|greetings)\b/)) {
    return "Jai Bhim! Greetings. I am pleased to converse with you. What guidance or historical knowledge do you seek today?";
  }
  if (lower.match(/\b(bye|goodbye|see you|tata)\b/)) {
    return "Farewell! Always remember: Educate, Agitate, and Organize. Have unshakeable faith in your self-respect.";
  }
  if (lower.includes("how old") || lower.includes("age") || lower.includes("birth")) {
    return "I was born on April 14, 1891 in Mhow, and lived for 65 dedicated years until December 6, 1956, when I attained Mahaparinirvana in New Delhi.";
  }
  if (lower.includes("who is") || lower.includes("who are you") || lower.includes("ambedkar")) {
    return "I was an Indian jurist, economist, and social reformer who served as the Chairman of the Constitution Drafting Committee and independent India's first Minister of Law and Justice.";
  }
  if (lower.includes("article 32") || lower.includes("constitution")) {
    return "I considered Article 32—the right to Constitutional Remedies—as the very 'heart and soul' of the Indian Constitution, without which fundamental rights are a nullity.";
  }
  if (lower.includes("youth") || lower.includes("message")) {
    return "My message to the youth has ever been: Cultivate the mind; it is the ultimate aim of human existence. Fearlessly champion reason, equality, and human fraternity.";
  }
  return "That is a profound question. In my life's struggle, I observed that political democracy cannot last unless there lies at the base of it social democracy. Strive for equality and fraternity.";
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 0.95;
  utterance.rate = 0.98;
  window.speechSynthesis.speak(utterance);
}

/* =========================================================================
   5. 39 BOOKS CATALOG DATA
   ========================================================================= */
const all39Books = [
  { vol: "Volume 01", title: "Castes in India & Other Essays", year: "1916–1936", summary: "Contains the seminal Columbia University paper analyzing endogamy as the mechanism of caste, along with Annihilation of Caste." },
  { vol: "Volume 02", title: "Dr. Ambedkar in Bombay Legislature", year: "1927–1939", summary: "Speeches, debates, and bills introduced in the Bombay Legislative Council on education, labor reform, and the Khoti system." },
  { vol: "Volume 03", title: "Philosophy of Hinduism & India and Pre-requisites of Communism", year: "1930s–1940s", summary: "Critical analysis comparing the philosophy of Hinduism with justice and evaluating communist ideology in India." },
  { vol: "Volume 04", title: "Riddles in Hinduism", year: "1954", summary: "Incisive exposition interrogating mythological and religious scriptures with rational, ethical scrutiny." },
  { vol: "Volume 05", title: "Untouchables or The Children of India's Ghetto", year: "1948", summary: "Sociological study of the origin of Untouchability, broken men hypothesis, and dietary and occupational taboos." },
  { vol: "Volume 06", title: "The Problem of the Rupee: Its Origin & Solution", year: "1923", summary: "Doctoral dissertation at the London School of Economics that helped formulate the foundations of the Reserve Bank of India." },
  { vol: "Volume 07", title: "Who Were the Shudras? & The Untouchables", year: "1946", summary: "Historical treatise dedicated to Mahatma Jyotirao Phule investigating the origin of the fourth Varna in Indo-Aryan society." },
  { vol: "Volume 08", title: "Pakistan or The Partition of India", year: "1940", summary: "Geopolitical, economic, and cultural dissection of the communal question and the demand for Pakistan." },
  { vol: "Volume 09", title: "What Congress and Gandhi Have Done to the Untouchables", year: "1945", summary: "Comprehensive documentary critique of political representation and the Poona Pact of 1932." },
  { vol: "Volume 10", title: "Dr. Ambedkar with The Simon Commission & Round Table Conferences", year: "1928–1932", summary: "Official memoranda and speeches submitted to Lord Simon and during the three Round Table Conferences in London." },
  { vol: "Volume 11", title: "The Buddha and His Dhamma", year: "1956", summary: "His magnum opus on Buddhist philosophy, reconstructing the life, rational teachings, and ethical revolution of Siddhartha Gautama." },
  { vol: "Volume 12", title: "Unpublished Writings & Ancient Indian Commerce", year: "1915", summary: "His earliest Columbia University M.A. thesis examining ancient commercial routes, trade policies, and monetary systems." },
  { vol: "Volume 13", title: "Dr. Ambedkar as the Principal Architect of Constitution (Part 1)", year: "1946–1948", summary: "Drafting committee sessions, initial draft articles, fundamental rights, and assembly debates." },
  { vol: "Volume 14", title: "Dr. Ambedkar as the Principal Architect of Constitution (Part 2)", year: "1948–1950", summary: "Final deliberations, adoption of the Constitution on 26 November 1949, and commencement of the Republic." },
  { vol: "Volume 15", title: "Dr. Ambedkar as Free India's First Law Minister", year: "1947–1951", summary: "Introduction of the landmark Hindu Code Bill to liberate women's property and marriage rights." },
  { vol: "Volume 16", title: "Pali-English Dictionary & Linguistic States", year: "1950s", summary: "Lexicographical work on the Pali language and thoughts on linguistic reorganization of Indian states." },
  { vol: "Volume 17", title: "Dr. Ambedkar and His Egalitarian Revolution (Part 1)", year: "1920–1935", summary: "Speeches, organizational records of Bahishkrit Hitakarini Sabha, and the Mahad Satyagraha." },
  { vol: "Volume 18", title: "Dr. Ambedkar and His Egalitarian Revolution (Part 2)", year: "1936–1946", summary: "Formation of the Independent Labour Party and Scheduled Castes Federation." },
  { vol: "Volume 19", title: "Dr. Ambedkar and His Egalitarian Revolution (Part 3)", year: "1947–1956", summary: "Post-independence social and spiritual movements leading to the historic Deeksha at Nagpur." },
  { vol: "Volume 20", title: "Economic Writings & The Evolution of Provincial Finance", year: "1925", summary: "Doctoral dissertation examining financial relations between Imperial and Provincial governments in British India." },
  { vol: "Volume 21", title: "Speeches on Foreign Affairs & International Law", year: "1940s–1950s", summary: "Speeches on global geopolitics, democratic alliances, and the United Nations." },
  { vol: "Volume 22", title: "Essays on Indian Nationalism & Human Rights", year: "1930s", summary: "Critique of orthodox nationalism that ignores internal socio-economic inequalities." },
  { vol: "Volume 23", title: "Notes on Parliamentary Democracy & Franchise", year: "1932", summary: "Submissions to the Lothian Franchise Committee advocating universal adult suffrage." },
  { vol: "Volume 24", title: "The Hindu Code Bill Debates", year: "1948–1951", summary: "Speeches defending women's right to divorce, inheritance, and monogamy against orthodox opposition." },
  { vol: "Volume 25", title: "Labour Policy & Factory Legislation", year: "1942–1946", summary: "Establishment of the 8-hour working day, dearness allowance, and maternity benefit legislation." },
  { vol: "Volume 26", title: "Agrarian Reform & Small Holdings in India", year: "1918", summary: "Economic study arguing that fragmentation of land can be cured by industrialization and cooperative farming." },
  { vol: "Volume 27", title: "Education, Universities & Cultural Renaissance", year: "1928–1952", summary: "Establishment of the People's Education Society, Siddharth College, and Milind College." },
  { vol: "Volume 28", title: "Religious Conversion & Navayana Buddhism", year: "1956", summary: "The 22 oaths administered at Deekshabhoomi and rationale for renouncing caste society." },
  { vol: "Volume 29", title: "Editorials from Mooknayak (Leader of the Voiceless)", year: "1920", summary: "Collection of first editorial articles published in his Marathi fortnightly paper." },
  { vol: "Volume 30", title: "Editorials from Bahishkrit Bharat (Excluded India)", year: "1927–1929", summary: "Revolutionary Marathi writings chronicling Mahad water rights and temple entry agitations." },
  { vol: "Volume 31", title: "Editorials from Samata & Janata", year: "1929–1940", summary: "Writings advocating working-class solidarity and constitutional emancipation." },
  { vol: "Volume 32", title: "Editorials from Prabuddha Bharat (Enlightened India)", year: "1956", summary: "Final writings focused on national regeneration, morality, and enlightenment." },
  { vol: "Volume 33", title: "Personal Correspondence & Archival Letters (Part 1)", year: "1913–1935", summary: "Letters to Maharaja Sayajirao Gaekwad, Ramabai, teachers, and global contemporaries." },
  { vol: "Volume 34", title: "Personal Correspondence & Archival Letters (Part 2)", year: "1936–1956", summary: "Letters to Jawaharlal Nehru, Vallabhbhai Patel, Dr. Savita Ambedkar, and international scholars." },
  { vol: "Volume 35", title: "Book Reviews & Critical Bibliographies", year: "1918–1950", summary: "His intellectual reviews of books on economics, race, jurisprudence, and theology." },
  { vol: "Volume 36", title: "Drafting Committee Memoranda & Amendments", year: "1947–1949", summary: "Internal drafting committee notes, legal alterations, and comparative constitutional models." },
  { vol: "Volume 37", title: "Notes on Kabir, Jyotirao Phule & Gautama Buddha", year: "1950s", summary: "Essays on his three chosen intellectual and spiritual mentors." },
  { vol: "Volume 38", title: "Waiting for a Visa (Autobiographical Notes)", year: "1935–1936", summary: "Personal accounts of experiencing untouchability as a child and returning scholar." },
  { vol: "Volume 39", title: "Historical Chronology & Master Index of Speeches", year: "1891–1956", summary: "Comprehensive timeline of all addresses, meetings, publications, and archival records." }
];

const booksContainer = document.getElementById("booksContainer");
const bookSearchInput = document.getElementById("bookSearchInput");

if (bookSearchInput) {
  bookSearchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = all39Books.filter(b => 
      b.title.toLowerCase().includes(term) || 
      b.vol.toLowerCase().includes(term) || 
      b.summary.toLowerCase().includes(term)
    );
    renderBooksList(filtered);
  });
}

function renderBooksList(list) {
  if (!booksContainer) return;
  booksContainer.innerHTML = "";
  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card-item";
    card.innerHTML = `
      <span class="book-vol-tag">${book.vol}</span>
      <h4 class="book-title">${book.title}</h4>
      <div class="book-year">Published: ${book.year}</div>
      <div class="book-summary">${book.summary}</div>
    `;
    booksContainer.appendChild(card);
  });
}

/* =========================================================================
   6. SPEECHES & VIDEO THEATER
   ========================================================================= */
const mainSpeechFrame = document.getElementById("mainSpeechFrame");
const currentSpeechTitle = document.getElementById("currentSpeechTitle");
const currentSpeechDesc = document.getElementById("currentSpeechDesc");

document.querySelectorAll(".playlist-card").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".playlist-card").forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    const vid = item.getAttribute("data-vid");
    const start = item.getAttribute("data-start") || 0;
    const title = item.getAttribute("data-title");
    const desc = item.getAttribute("data-desc");

    if (mainSpeechFrame) {
      mainSpeechFrame.src = `https://www.youtube-nocookie.com/embed/${vid}?start=${start}&autoplay=1&enablejsapi=1`;
    }
    if (currentSpeechTitle) currentSpeechTitle.innerText = title;
    if (currentSpeechDesc) currentSpeechDesc.innerText = desc;
  });
});

/* =========================================================================
   7. LIGHTBOX PREVIEWS
   ========================================================================= */
const lightboxModal = document.getElementById("lightboxModal");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");

function openLightbox(photo) {
  if (!lightboxModal) return;
  lightboxImg.src = photo.url;
  lightboxTitle.innerText = photo.title;
  lightboxDesc.innerText = photo.desc;
  lightboxModal.classList.add("active");
}

function closeLightbox() {
  if (lightboxModal) lightboxModal.classList.remove("active");
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightboxModal) {
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
}

/* =========================================================================
   INIT
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initLifeLine();
  initChatbot();
});