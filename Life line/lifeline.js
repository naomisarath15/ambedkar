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
const openChatbotTile = document.getElementById("openChatbotTile");
const openBooksTile = document.getElementById("openBooksTile");
const openSpeechesTile = document.getElementById("openSpeechesTile");
const openAboutTile = document.getElementById("openAboutTile");
const openQuotesTile = document.getElementById("openQuotesTile");
const openStatsTile = document.getElementById("openStatsTile");
const openEmergencyTile = document.getElementById("openEmergencyTile");

// Modals
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

if (openChatbotTile) openChatbotTile.addEventListener("click", () => openModal(chatbotModal));
if (openBooksTile) openBooksTile.addEventListener("click", () => {
  openModal(booksModal);
  renderBooksList(all39Books);
});
if (openSpeechesTile) openSpeechesTile.addEventListener("click", () => openModal(speechesModal));
if (openAboutTile) openAboutTile.addEventListener("click", () => openModal(aboutModal));
if (openQuotesTile) openQuotesTile.addEventListener("click", () => openModal(quotesModal));
if (openStatsTile) openStatsTile.addEventListener("click", () => openModal(statsModal));
if (openEmergencyTile) openEmergencyTile.addEventListener("click", () => openModal(emergencyModal));

// Close Buttons
const closeChatbotBtn = document.getElementById("closeChatbotBtn");
const closeBooksBtn = document.getElementById("closeBooksBtn");
const closeSpeechesBtn = document.getElementById("closeSpeechesBtn");
const closeAboutBtn = document.getElementById("closeAboutBtn");
const closeQuotesBtn = document.getElementById("closeQuotesBtn");
const closeStatsBtn = document.getElementById("closeStatsBtn");
const closeEmergencyBtn = document.getElementById("closeEmergencyBtn");

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
   3. STRAIGHT DOTTED GOLDEN TIMELINE ENGINE (17 HISTORICAL MILESTONES)
   ========================================================================= */
const timelineMilestones = [
  {
    id: 0,
    year: "1891–1907",
    shortYear: "1891",
    pos: "node-pos-top",
    era: "Era 01 / 17",
    title: "Roots in Mhow & Early Schooling",
    caption: "Early Lineage & Youth",
    image: "../Life line/images/images (5).jpg",
    narrative: "Born in Mhow to Bhimabai and Subedar Major Ramji Maloji Sakpal. Overcoming harsh caste segregation at school where he had to sit apart on a gunny sack, Bhimrao's dedication culminated in his matriculation in 1907.",
    gallery: [{ url: "../Life line/images/images (5).jpg", title: "Babasaheb Ambedkar (1891–1956)" }]
  },
  {
    id: 1,
    year: "1908–1912",
    shortYear: "1908",
    pos: "node-pos-bottom",
    era: "Era 02 / 17",
    title: "Elphinstone College Graduation",
    caption: "Higher Education in Bombay",
    image: "../Life line/images/images (4).jpg",
    narrative: "Entering Elphinstone College with a scholarship from Maharaja Sayajirao Gaekwad of Baroda, graduating in 1912 with degrees in Economics and Political Science.",
    gallery: [{ url: "../Life line/images/images (4).jpg", title: "Scholar at Elphinstone" }]
  },
  {
    id: 2,
    year: "1913–1916",
    shortYear: "1913",
    pos: "node-pos-top",
    era: "Era 03 / 17",
    title: "Columbia University, New York",
    caption: "M.A. & Ph.D. Research Abroad",
    image: "../Life line/images/images.jpg",
    narrative: "Studied under John Dewey, Edwin Seligman, and Alexander Goldenweiser. In 1916, presented his landmark paper 'Castes in India: Their Mechanism, Genesis and Development'.",
    gallery: [{ url: "../Life line/images/images.jpg", title: "Columbia University Session" }]
  },
  {
    id: 3,
    year: "1916",
    shortYear: "1916",
    pos: "node-pos-bottom",
    era: "Era 04 / 17",
    title: "Admission to Gray's Inn & LSE",
    caption: "Legal Training in London",
    image: "../Life line/images/Ambedkar_Barrister.jpg",
    narrative: "Enrolled at Gray's Inn to read for the Bar and simultaneously registered at the London School of Economics to conduct doctoral research on public finance and currency.",
    gallery: [{ url: "../Life line/images/Ambedkar_Barrister.jpg", title: "Gray's Inn Legal Scholar" }]
  },
  {
    id: 4,
    year: "1918–1920",
    shortYear: "1918",
    pos: "node-pos-top",
    era: "Era 05 / 17",
    title: "Professor of Political Economy",
    caption: "Sydenham College, Bombay",
    image: "../Life line/images/images (1).jpg",
    narrative: "Served as Professor of Political Economy at Sydenham College of Commerce and Economics, saving his salary to return to London to complete his Doctor of Science (D.Sc.).",
    gallery: [{ url: "../Life line/images/images (1).jpg", title: "Academic Career" }]
  },
  {
    id: 5,
    year: "1920",
    shortYear: "1920",
    pos: "node-pos-bottom",
    era: "Era 06 / 17",
    title: "Mooknayak & Press Revolution",
    caption: "Leader of the Voiceless",
    image: "../Life line/images/images (2).jpg",
    narrative: "Launched the Marathi fortnightly Mooknayak with financial aid from Chhatrapati Shahu Maharaj of Kolhapur, articulating the demands of India's depressed classes.",
    gallery: [{ url: "../Life line/images/images (2).jpg", title: "Press Heritage" }]
  },
  {
    id: 6,
    year: "1923",
    shortYear: "1923",
    pos: "node-pos-top",
    era: "Era 07 / 17",
    title: "Doctor of Science & The Rupee",
    caption: "London School of Economics Thesis",
    image: "../Life line/images/Ambedkar_Barrister.jpg",
    narrative: "Awarded the D.Sc. for his seminal treatise 'The Problem of the Rupee: Its Origin and Its Solution', which later provided the framework for the Reserve Bank of India.",
    gallery: [{ url: "../Life line/images/Ambedkar_Barrister.jpg", title: "D.Sc. Jurisprudence" }]
  },
  {
    id: 7,
    year: "1923–1926",
    shortYear: "1924",
    pos: "node-pos-bottom",
    era: "Era 08 / 17",
    title: "Advocate at Bombay High Court",
    caption: "Practicing the Law of Justice",
    image: "../Life line/images/images (4).jpg",
    narrative: "Called to the Bar and began practicing at the Bombay High Court, dedicating his legal expertise to defending poor and marginalized clients facing exploitation.",
    gallery: [{ url: "../Life line/images/images (4).jpg", title: "Bombay High Court Barrister" }]
  },
  {
    id: 8,
    year: "1927",
    shortYear: "1927",
    pos: "node-pos-top",
    era: "Era 09 / 17",
    title: "Mahad Water Satyagraha",
    caption: "Declaration of Human Dignity",
    image: "../Life line/images/images.jpg",
    narrative: "Led thousands of satyagrahis to drink water from Chavadar Tank in Mahad, declaring: 'We are not going to the tank merely to drink water; we are asserting that we are human beings.'",
    gallery: [{ url: "../Life line/images/images.jpg", title: "Mahad Gathering" }]
  },
  {
    id: 9,
    year: "1927",
    shortYear: "Dec 1927",
    pos: "node-pos-bottom",
    era: "Era 10 / 17",
    title: "Burning of the Manusmriti",
    caption: "Manusmriti Dahan Din",
    image: "../Life line/images/images (5).jpg",
    narrative: "On 25 December 1927, consigned the Manusmriti to the flames at Mahad, symbolizing emancipation from centuries of institutionalized inequality.",
    gallery: [{ url: "../Life line/images/images (5).jpg", title: "Historic Pyre at Mahad" }]
  },
  {
    id: 10,
    year: "1930s",
    shortYear: "1930",
    pos: "node-pos-top",
    era: "Era 11 / 17",
    title: "Rajgruha Sanctuary & Library",
    caption: "Over 50,000 Rare Volumes",
    image: "../Life line/images/images (1).jpg",
    narrative: "Built Rajgruha in Dadar, Bombay, designed to house his collection of 50,000+ books. Here he conducted constitutional research and drafted memoranda for global forums.",
    gallery: [{ url: "../Life line/images/images (1).jpg", title: "Rajgruha Verandah" }]
  },
  {
    id: 11,
    year: "1930–1932",
    shortYear: "1931",
    pos: "node-pos-bottom",
    era: "Era 12 / 17",
    title: "London Round Table Conferences",
    caption: "Statutory Minority Rights",
    image: "../Life line/images/images (3).jpg",
    narrative: "Represented the Depressed Classes at the Round Table Conferences in London, demanding universal adult franchise and independent political representation.",
    gallery: [{ url: "../Life line/images/images (3).jpg", title: "London Plenary Sessions" }]
  },
  {
    id: 12,
    year: "1942–1946",
    shortYear: "1942",
    pos: "node-pos-top",
    era: "Era 13 / 17",
    title: "Labour Ministry & 8-Hour Workday",
    caption: "Member of Viceroy's Executive Council",
    image: "../Life line/images/images (2).jpg",
    narrative: "Enacted the 8-hour workday (down from 12 hours), paid maternity benefits, employment exchanges, and conceived India's multi-purpose river valley projects (Damodar and Hirakud).",
    gallery: [{ url: "../Life line/images/images (2).jpg", title: "Executive Council Session" }]
  },
  {
    id: 13,
    year: "1947–1950",
    shortYear: "1947",
    pos: "node-pos-bottom",
    era: "Era 14 / 17",
    title: "Drafting Committee Chairman",
    caption: "Architect of the Indian Constitution",
    image: "../Life line/images/images (4).jpg",
    narrative: "Appointed Chairman of the Constitution Drafting Committee, crafting the world's longest democratic constitution guaranteeing Fundamental Rights and the abolition of untouchability.",
    gallery: [{ url: "../Life line/images/images (4).jpg", title: "Presentation of Draft Constitution" }]
  },
  {
    id: 14,
    year: "1952",
    shortYear: "1952",
    pos: "node-pos-top",
    era: "Era 15 / 17",
    title: "Columbia Honorary LL.D.",
    caption: "Doctor of Laws Citation",
    image: "../Life line/images/images (5).jpg",
    narrative: "Awarded an honorary LL.D. by Columbia University, with the citation praising him as 'a great social reformer, jurist, and one of India's leading citizens.'",
    gallery: [{ url: "../Life line/images/images (5).jpg", title: "Doctor of Laws Conferment" }]
  },
  {
    id: 15,
    year: "1953",
    shortYear: "1953",
    pos: "node-pos-bottom",
    era: "Era 16 / 17",
    title: "Osmania University Honorary D.Litt.",
    caption: "Recognition of Academic Eminence",
    image: "../Life line/images/images.jpg",
    narrative: "Conferred the honorary degree of Doctor of Literature (D.Litt.) by Osmania University in recognition of his scholarship in economics, law, and social philosophy.",
    gallery: [{ url: "../Life line/images/images.jpg", title: "Osmania Convocation" }]
  },
  {
    id: 16,
    year: "1956",
    shortYear: "1956",
    pos: "node-pos-top",
    era: "Era 17 / 17",
    title: "Deekshabhoomi & The Dhamma Revival",
    caption: "Historic Conversion at Nagpur",
    image: "../Life line/images/images (3).jpg",
    narrative: "On 14 October 1956 at Nagpur, embraced Buddhism alongside 500,000 followers, reviving the Dhamma of compassion and reason before attaining Mahaparinirvana on 6 December 1956.",
    gallery: [{ url: "../Life line/images/images (3).jpg", title: "Deekshabhoomi, Nagpur" }]
  }
];

let activeEpochIndex = 0;

// DOM Elements
const nodesContainer = document.getElementById("nodesContainer");
const epochPhoto = document.getElementById("epochPhoto");
const epochCaption = document.getElementById("epochCaption");
const epochEraBadge = document.getElementById("epochEraBadge");
const epochYearHeader = document.getElementById("epochYearHeader");
const epochTitle = document.getElementById("epochTitle");
const epochNarrative = document.getElementById("epochNarrative");
const epochGalleryStrip = document.getElementById("epochGalleryStrip");
const epochStage = document.getElementById("epochStage");
const prevEpochBtn = document.getElementById("prevEpochBtn");
const nextEpochBtn = document.getElementById("nextEpochBtn");

function initLifeLine() {
  if (!nodesContainer) return;
  buildSpineNodes();
  selectEpoch(0, false);

  if (nextEpochBtn) {
    nextEpochBtn.addEventListener("click", () => {
      activeEpochIndex = (activeEpochIndex + 1) % timelineMilestones.length;
      selectEpoch(activeEpochIndex, true);
    });
  }

  if (prevEpochBtn) {
    prevEpochBtn.addEventListener("click", () => {
      activeEpochIndex = (activeEpochIndex - 1 + timelineMilestones.length) % timelineMilestones.length;
      selectEpoch(activeEpochIndex, true);
    });
  }

  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lifelineModal");
    if (modal && modal.classList.contains("active")) {
      if (e.key === "ArrowRight") nextEpochBtn.click();
      if (e.key === "ArrowLeft") prevEpochBtn.click();
    }
  });
}

function buildSpineNodes() {
  nodesContainer.innerHTML = "";
  timelineMilestones.forEach((m, idx) => {
    const node = document.createElement("div");
    node.className = `spine-node ${m.pos} ${idx === 0 ? "active" : ""}`;
    node.id = `spine-node-${idx}`;

    node.innerHTML = `
      <div class="node-tether-line"></div>
      <div class="node-gold-pin"></div>
      <div class="node-cameo-card">
        <span class="cameo-year-badge">${m.shortYear}</span>
        <div class="cameo-frame">
          <img src="${m.image}" alt="${m.title}" />
        </div>
      </div>
    `;

    node.addEventListener("click", () => {
      selectEpoch(idx, true);
    });

    nodesContainer.appendChild(node);
  });
}

function selectEpoch(index, scrollIntoView = true) {
  activeEpochIndex = index;
  const data = timelineMilestones[index];

  document.querySelectorAll(".spine-node").forEach((node, i) => {
    node.classList.toggle("active", i === index);
    if (i === index && scrollIntoView) {
      node.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });

  if (epochStage) {
    epochStage.style.opacity = 0;
    epochStage.style.transform = "translateY(6px)";
  }

  setTimeout(() => {
    if (epochPhoto) epochPhoto.src = data.image;
    if (epochCaption) epochCaption.innerText = data.caption;
    if (epochEraBadge) epochEraBadge.innerText = data.era;
    if (epochYearHeader) epochYearHeader.innerText = data.year;
    if (epochTitle) epochTitle.innerText = data.title;
    if (epochNarrative) epochNarrative.innerText = data.narrative;

    if (epochGalleryStrip) {
      epochGalleryStrip.innerHTML = "";
      data.gallery.forEach(art => {
        const thumb = document.createElement("div");
        thumb.className = "evidence-thumb";
        thumb.innerHTML = `<img src="${art.url}" alt="${art.title}" />`;
        thumb.addEventListener("click", (e) => {
          e.stopPropagation();
          if (epochPhoto) epochPhoto.src = art.url;
          if (epochCaption) epochCaption.innerText = art.title;
        });
        epochGalleryStrip.appendChild(thumb);
      });
    }

    if (epochStage) {
      epochStage.style.opacity = 1;
      epochStage.style.transform = "translateY(0)";
    }
  }, 160);
}

/* =========================================================================
   4. BOT BABASAHEB (AI BOT + SPEECH + VOICE RECOGNITION)
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
   5. 39 VOLUMES LIBRARY CATALOG DATA
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
   INIT
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initLifeLine();
  initChatbot();
});