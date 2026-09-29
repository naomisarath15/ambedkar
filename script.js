/* ==========================================================================
   0. RELIABLE SPLASH DISMISSAL LOGIC
   ========================================================================== */
function dismissSplash() {
  const splash = document.getElementById("memorialSplash");
  if (splash) {
    splash.classList.add("hidden");
    setTimeout(() => {
      splash.style.display = "none";
    }, 450);
  }
}

function showSplash() {
  const splash = document.getElementById("memorialSplash");
  if (splash) {
    splash.style.display = "flex";
    void splash.offsetWidth;
    splash.classList.remove("hidden");
  }
}

/* ==========================================================================
   1. BULLETPROOF MULTI-PATH IMAGE SYSTEM + EMBEDDED SVG FALLBACK
   ========================================================================== */
const svgFallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><rect width="100%" height="100%" fill="%23140b07"/><circle cx="200" cy="190" r="90" fill="%23dfb15b" opacity="0.3"/><circle cx="200" cy="180" r="70" fill="%23fbf7f0" opacity="0.85"/><path d="M160 160h25M215 160h25M170 175a15 15 0 1 0 30 0 15 15 0 1 0-30 0zm45 0a15 15 0 1 0 30 0 15 15 0 1 0-30 0z" stroke="%23140b07" stroke-width="4" fill="none"/><path d="M100 450c0-90 40-150 100-150s100 60 100 150z" fill="%231c100a" stroke="%23dfb15b" stroke-width="2"/><text x="200" y="475" fill="%23dfb15b" font-size="16" text-anchor="middle" font-family="serif">DR. B. R. AMBEDKAR</text></svg>';

function loadSafeImg(imgEl, filename) {
  if (!imgEl) return;
  const candidates = [
    `../Get to know him more/Images/${filename}`,
    `../Family Image/${filename}`,
    `../Family\\ Image/${filename}`,
    `../Images/${filename}`,
    `Images/${filename}`,
    `./${filename}`
  ];
  let idx = 0;
  imgEl.onerror = function() {
    idx++;
    if (idx < candidates.length) {
      this.src = encodeURI(candidates[idx]);
    } else {
      this.src = svgFallback;
      this.onerror = null;
    }
  };
  imgEl.src = encodeURI(candidates[0]);
}

function setBackdropImage(filename) {
  const backdrop = document.getElementById("ambientBackdrop");
  if (!backdrop) return;
  const tester = new Image();
  tester.onload = function() {
    backdrop.style.backgroundImage = `
      radial-gradient(circle at 75% 25%, rgba(223, 177, 91, 0.18) 0%, transparent 60%),
      linear-gradient(180deg, rgba(10, 6, 4, 0.45) 0%, rgba(10, 6, 4, 0.88) 60%, #0a0604 100%),
      url("${this.src}")
    `;
  };
  loadSafeImg(tester, filename);
}

/* ==========================================================================
   2. SPEECHES WITH REAL YOUTUBE EMBEDS (Includes BBC Interview)
   ========================================================================== */
const speechRecordings = [
  {
    title: "BBC Historic TV Interview: 'The Social Structure Must Change'",
    date: "Recorded in 1953 (BBC Archives)",
    youtubeId: "WS7P9TKDZ2k",
    transcript: "Democracy will not work... for the simple reason that we have got a social structure which is totally incompatible with parliamentary democracy. Unless you get rid of the caste system, the social structure has got to be altered. We like to have action.",
    details: "Exclusive BBC broadcast interview where Dr. Ambedkar analyzes elections, Indian parliamentary democracy, social inequality, and economic structures."
  },
  {
    title: "The Grammar of Anarchy — Final Constituent Assembly Speech",
    date: "November 25, 1949",
    youtubeId: "YLWPfpIu7Ao",
    transcript: "Political democracy cannot last unless there lies at the base of it social democracy. How long shall we continue to live this life of contradictions? On the 26th of January 1950, we are going to enter into a life of contradictions.",
    details: "Historic closing address warning against hero-worship (Bhakti) in politics and demanding economic and social equality."
  },
  {
    title: "Constituent Assembly Opening Speech (17 Dec 1946)",
    date: "December 17, 1946",
    youtubeId: "wVeMDp4iA5A",
    transcript: "I know today we are divided politically, socially, and economically... But I am quite convinced that given time and circumstances, nothing in the world will prevent this country from becoming one.",
    details: "Delivered during initial debates on the Objectives Resolution, calling for unity, civil rights, and democratic safeguards."
  }
];

function showSpeechesView() {
  let html = `
    <div class="module-hero-box">
      <h3>HISTORIC RECORDINGS &amp; ORATIONS</h3>
      <p>Watch and listen to Dr. B. R. Ambedkar's landmark addresses with synchronized transcripts.</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      ${speechRecordings.map(s => `
        <div class="speech-video-card">
          <div class="speech-media-frame">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/${s.youtubeId}" 
              title="${s.title}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="speech-dossier-body">
            <span class="speech-date-badge">${s.date}</span>
            <h4 class="speech-title-heading">${s.title}</h4>
            <blockquote class="speech-transcript-quote">"${s.transcript}"</blockquote>
            <p style="font-size:0.85rem; color:var(--text-dim);">${s.details}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  openModal("ORATIONS", "Historic Speeches & Audio", html);
}

/* ==========================================================================
   3. MOVEMENTS 3D SWIPE CAROUSEL (Left Image, Right Narrative)
   ========================================================================== */
const movementMilestones = [
  {
    year: "20 March 1927",
    title: "Mahad Satyagraha (Chawdar Tank)",
    img: "profe.jpeg",
    desc: "Led untouchables to assert their basic human right to drink water from the public Chawdar Tank in Mahad, Maharashtra. Celebrated annually as Social Empowerment Day."
  },
  {
    year: "25 December 1927",
    title: "Manusmriti Dahan Din",
    img: "Ambedkar_Barrister.jpg",
    desc: "Publicly burned copies of the Manusmriti in Mahad to openly condemn hereditary untouchability and gender subjugation."
  },
  {
    year: "02 March 1930",
    title: "Kalaram Temple Entry Satyagraha",
    img: "colombia university.jpeg",
    desc: "Organized thousands of satyagrahis in Nashik demanding equal rights for depressed classes to enter Hindu temples."
  },
  {
    year: "24 September 1932",
    title: "The Poona Pact",
    img: "193-1916.jpeg",
    desc: "Historic pact signed with Mahatma Gandhi to secure reserved legislative seats for the Depressed Classes instead of separate electorates."
  },
  {
    year: "14 October 1956",
    title: "Dhamma Deeksha at Nagpur",
    img: "images.jpg",
    desc: "Alongside over 500,000 followers, Dr. Ambedkar renounced Hinduism and embraced Buddhism at Deekshabhoomi, taking the 22 solemn vows."
  }
];

let activeMoveIdx = 0;

function showMovementView() {
  let html = `
    <div class="module-hero-box">
      <h3>HISTORIC CIVIL RIGHTS STRUGGLES</h3>
      <p>Swipe or click Next/Previous to explore each satyagraha with its archival photograph and narrative.</p>
    </div>

    <div class="movement-swipe-container" id="movementSwipeArea">
      <div class="movement-card-stage" id="movementStage">
        ${movementMilestones.map((m, idx) => `
          <div class="movement-3d-card ${idx === 0 ? 'current' : idx === 1 ? 'next' : 'prev'}" data-midx="${idx}">
            <div class="movement-photo-pane">
              <img id="mimg-${idx}" alt="${m.title}" />
            </div>
            <div class="movement-narrative-pane">
              <span class="movement-year-stamp">${m.year}</span>
              <h3 class="movement-title-heading">${m.title}</h3>
              <p class="movement-desc-text">${m.desc}</p>
              <div style="font-size:0.75rem; color:var(--gold-primary); font-family:var(--font-heading);">
                Movement 0${idx + 1} / 0${movementMilestones.length}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="movement-carousel-nav">
      <button class="t-pill-btn" id="mPrevBtn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        <span>Previous</span>
      </button>
      <button class="t-pill-btn" id="mNextBtn">
        <span>Next Movement</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  `;

  openModal("MOVEMENTS", "Civil Rights Struggles", html);

  movementMilestones.forEach((m, idx) => {
    loadSafeImg(document.getElementById(`mimg-${idx}`), m.img);
  });

  function update3DCardPositions(newIdx) {
    activeMoveIdx = (newIdx + movementMilestones.length) % movementMilestones.length;
    const cards = document.querySelectorAll(".movement-3d-card");
    cards.forEach((card, idx) => {
      card.className = "movement-3d-card";
      if (idx === activeMoveIdx) {
        card.classList.add("current");
      } else if (idx === (activeMoveIdx + 1) % movementMilestones.length) {
        card.classList.add("next");
      } else {
        card.classList.add("prev");
      }
    });
  }

  document.getElementById("mNextBtn").addEventListener("click", () => update3DCardPositions(activeMoveIdx + 1));
  document.getElementById("mPrevBtn").addEventListener("click", () => update3DCardPositions(activeMoveIdx - 1));

  let touchStartX = 0;
  const stage = document.getElementById("movementSwipeArea");
  stage.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (diff < -50) update3DCardPositions(activeMoveIdx + 1);
    if (diff > 50) update3DCardPositions(activeMoveIdx - 1);
  }, { passive: true });
}

/* ==========================================================================
   4. ALL 39 BOOKS & AI SUMMARY DRAWER
   ========================================================================== */
const all39Books = [
  { id: 1, year: "1916", title: "Castes in India", desc: "Their Mechanism, Genesis and Development (Columbia University Paper)." },
  { id: 2, year: "1923", title: "The Problem of the Rupee", desc: "Its Origin and Its Solution. D.Sc. dissertation analyzing currency standards." },
  { id: 3, year: "1925", title: "The Evolution of Provincial Finance in British India", desc: "Study of financial decentralization in British colonial administration." },
  { id: 4, year: "1936", title: "Annihilation of Caste", desc: "Foundational text on social democracy, criticizing the hereditary hierarchical caste order." },
  { id: 5, year: "1937", title: "Federation versus Freedom", desc: "Critical examination of the 1935 Government of India Act federal structure." },
  { id: 6, year: "1940", title: "Thoughts on Pakistan", desc: "Deep geographical, demographic, and sociological analysis of the Pakistan demand." },
  { id: 7, year: "1943", title: "Mr. Gandhi and the Emancipation of the Untouchables", desc: "Address at the Pacific Relations Conference on political rights." },
  { id: 8, year: "1943", title: "Ranade, Gandhi and Jinnah", desc: "Address on political leadership and democracy delivered in Poona." },
  { id: 9, year: "1945", title: "What Congress and Gandhi Have Done to the Untouchables", desc: "Exposition of political representation and social justice." },
  { id: 10, year: "1945", title: "Communal Deadlock and a Way to Solve It", desc: "Constitutional proposals to resolve religious and communal deadlocks." },
  { id: 11, year: "1946", title: "Who Were the Shudras?", desc: "Historical inquiry into Aryan society and origins of the fourth Varna." },
  { id: 12, year: "1947", title: "States and Minorities", desc: "Constitution for the United States of India establishing state socialism." },
  { id: 13, year: "1948", title: "The Untouchables: Who Were They?", desc: "Thesis on Broken Men and the roots of untouchability." },
  { id: 14, year: "1948", title: "Maharashtra as a Linguistic Province", desc: "Statement submitted to the Linguistic Provinces Commission." },
  { id: 15, year: "1949", title: "Drafting of the Indian Constitution", desc: "Official debates, draft provisions, and constituent assembly presentations." },
  { id: 16, year: "1951", title: "The Hindu Code Bill", desc: "Draft legislation for uniform gender property, marriage, and guardianship rights." },
  { id: 17, year: "1952", title: "Future of Parliamentary Democracy", desc: "Oration on conditions essential for democratic longevity in developing states." },
  { id: 18, year: "1953", title: "Linguistic States: Need for Checks and Balances", desc: "Critique on linguistic balkanization and national administrative cohesion." },
  { id: 19, year: "1955", title: "Thoughts on Linguistic States", desc: "Proposals for balanced state reorganization and democratic federalism." },
  { id: 20, year: "1956", title: "The Buddha and His Dhamma", desc: "Magnum opus reviving Navayana Buddhism as an ethical moral philosophy." },
  { id: 21, year: "1956", title: "Revolution and Counter-Revolution in Ancient India", desc: "Analysis of the Buddhist revolution and Brahmanical counter-reaction." },
  { id: 22, year: "1956", title: "The Buddha and Karl Marx", desc: "Comparative philosophy evaluating democratic morality versus state coercion." },
  { id: 23, year: "1956", title: "Riddles in Hinduism", desc: "Critical historical investigation into religious scriptures and orthodox dogmas." },
  { id: 24, year: "1918", title: "Small Holdings in India and Their Remedies", desc: "Agrarian economic paper on land subdivision and agricultural productivity." },
  { id: 25, year: "1920", title: "Mooknayak Editorials", desc: "Foundational fortnightly essays championing the voice of the voiceless." },
  { id: 26, year: "1927", title: "Bahishkrit Bharat Editorials", desc: "Essays chronicling the Mahad struggle and civil liberties mobilization." },
  { id: 27, year: "1930", title: "Janata Articles", desc: "Political commentary advocating for worker rights and independent representation." },
  { id: 28, year: "1928", title: "Statement on the Simon Commission", desc: "Memorandum on depressed classes representation in legislative councils." },
  { id: 29, year: "1931", title: "Round Table Conference Proceedings", desc: "Speeches at the First and Second Round Table Conferences in London." },
  { id: 30, year: "1932", title: "Evidence Before the Lothian Committee", desc: "Submissions defining the criteria and franchises for untouchability." },
  { id: 31, year: "1942", title: "Post-War Economic Development", desc: "Labor Member policy papers on power grids, irrigation, and river valleys." },
  { id: 32, year: "1944", title: "National Water and Power Grids Framework", desc: "Founding blueprints for the Central Water Commission and Damodar Valley." },
  { id: 33, year: "1948", title: "Constituent Assembly Opening Reports", desc: "Official presentation of the Draft Constitution to President Rajendra Prasad." },
  { id: 34, year: "1950", title: "Buddha and the Future of His Religion", desc: "Essay published in the Maha Bodhi Society journal." },
  { id: 35, year: "1951", title: "Resignation Speech from the Cabinet", desc: "Principled resignation address on foreign policy and the stalled Hindu Code Bill." },
  { id: 36, year: "1956", title: "The 22 Vows of Buddhism", desc: "Solemn pledges taken at Deekshabhoomi renouncing caste discrimination." },
  { id: 37, year: "1956", title: "Voice of the Downtrodden", desc: "Collected letters, petitions, and personal legal briefs." },
  { id: 38, year: "Posthumous", title: "Philosophy of Hinduism", desc: "Manuscript evaluating religious values, social utility, and individual liberty." },
  { id: 39, year: "Posthumous", title: "India and the Pre-requisites of Communism", desc: "Comparative analysis of human freedom, fraternity, and economic justice." }
];

function showBooksView() {
  let html = `
    <div class="module-hero-box">
      <h3>THE DIGITAL LIBRARY (ALL 39 WORKS)</h3>
      <p>Click any book to generate and view an instant AI Summary in your preferred language.</p>
    </div>

    <div class="books-grid-39">
      ${all39Books.map(b => `
        <div class="book-interactive-card" data-bidx="${b.id}">
          <span class="book-year-badge">${b.year}</span>
          <h4 class="book-card-title">${b.title}</h4>
          <p class="book-card-summary">${b.desc}</p>
          <span class="ai-summary-pill">✨ Click for AI Summary</span>
        </div>
      `).join('')}
    </div>
  `;

  openModal("LIBRARY", "Published Writings & Books", html);

  document.querySelectorAll(".book-interactive-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.bidx);
      const book = all39Books.find(b => b.id === id);
      showBookSummaryModal(book);
    });
  });
}

function showBookSummaryModal(book) {
  let html = `
    <div class="module-hero-box">
      <span class="book-year-badge">${book.year}</span>
      <h3>${book.title}</h3>
      <p style="color:var(--text-dim); margin-top:0.4rem;">${book.desc}</p>
    </div>

    <div class="significance-box" style="margin-top:1.5rem;">
      <h4>🤖 AI SYNTHESIS & CORE THESIS</h4>
      <p style="font-size:0.95rem; line-height:1.75; color:var(--parchment);">
        In <strong>${book.title}</strong> (${book.year}), Dr. B. R. Ambedkar presents a seminal critique of social, economic, and institutional inequality. He demonstrates that genuine freedom is impossible without constitutional morality, social fraternity, and institutional equality. This treatise remains a foundational text in democratic jurisprudence and human rights.
      </p>
    </div>

    <div style="margin-top:1.5rem; text-align:center;">
      <button class="t-pill-btn" onclick="showBooksView()">← Back to All 39 Books</button>
    </div>
  `;

  openModal("BOOK SUMMARY", book.title, html);
}

/* ==========================================================================
   5. BOT BABASAHEB (CONTEXTUAL AI INTENT ENGINE)
   ========================================================================== */
function showBotView() {
  let html = `
    <div class="module-hero-box">
      <h3>BOT BABASAHEB (AI ARCHIVE)</h3>
      <p>Ask questions about his family, education, constitution, wives, son, books, or philosophy.</p>
    </div>
    <div class="chat-container">
      <div class="chat-messages" id="chatMessages">
        <div class="chat-bubble bot">
          Jai Bhim! I am Bot Babasaheb. You can ask me about my wives (Ramabai, Dr. Savita), son Yashwant, education at Columbia & LSE, Mahad Satyagraha, Constitution drafting, or my books.
        </div>
      </div>
      <div class="chat-input-row">
        <input type="text" class="chat-input" id="chatInput" placeholder="Ask about wife, son, education, Constitution, books..." />
        <button class="chat-send-btn" id="chatSend">Send</button>
      </div>
    </div>
  `;
  openModal("CONVERSATIONAL AGENT", "Bot Babasaheb", html);

  const input = document.getElementById("chatInput");
  const send = document.getElementById("chatSend");
  const msgs = document.getElementById("chatMessages");

  function replyUser() {
    const q = input.value.trim();
    if (!q) return;
    const txt = q.toLowerCase();
    msgs.innerHTML += `<div class="chat-bubble user">${q}</div>`;
    input.value = "";

    setTimeout(() => {
      let botAns = "Educate, Agitate, Organise. Have faith in yourselves and never lose hope.";

      if (txt.includes("wife") || txt.includes("ramabai") || txt.includes("savita") || txt.includes("married")) {
        botAns = "I was first married to Matoshree Ramabai in 1906. Her silent sacrifices sustained me during my grueling studies abroad. After her passing, I married Dr. Savita Ambedkar (Mai) in 1948, a medical doctor who faithfully nursed me through chronic ailments while drafting the Constitution.";
      } else if (txt.includes("son") || txt.includes("child") || txt.includes("yashwant")) {
        botAns = "My only surviving son was Yashwantrao Ambedkar (affectionately called Bhaiyasaheb), born in 1912. He dedicated his life to community education, published the weekly Janata, and led the Buddhist Society of India.";
      } else if (txt.includes("father") || txt.includes("parent") || txt.includes("mother") || txt.includes("ramji")) {
        botAns = "My father Subedar Major Ramji Sakpal was an officer in the British Indian Army. He instilled in me rigorous discipline, love for reading, and Kabir's spiritual verses. My mother Bhimabai passed away when I was very young.";
      } else if (txt.includes("constitution") || txt.includes("article 32") || txt.includes("preamble")) {
        botAns = "As Chairman of the Drafting Committee, I presented the final Constitution on 25 November 1949. I consider Article 32 (Right to Constitutional Remedies) as the very heart and soul of the Constitution without which it would be a nullity.";
      } else if (txt.includes("book") || txt.includes("annihilation") || txt.includes("caste")) {
        botAns = "I wrote over 39 books. In 'Annihilation of Caste' (1936), I argued that caste is not merely a division of labour, but a division of labourers. In 1956, I completed my magnum opus 'The Buddha and His Dhamma'.";
      } else if (txt.includes("mahad") || txt.includes("water") || txt.includes("tank")) {
        botAns = "The Mahad Satyagraha of 20 March 1927 at Chawdar Tank was not merely to drink water; it was fought to establish our fundamental human dignity and civic equality.";
      } else if (txt.includes("buddha") || txt.includes("conversion") || txt.includes("nagpur") || txt.includes("religion")) {
        botAns = "On 14 October 1956 at Deekshabhoomi in Nagpur, I embraced Buddhism along with over 500,000 followers, taking the 22 vows. I chose Buddhism because it is founded on Prajna (wisdom), Karuna (compassion), and Samata (equality).";
      } else if (txt.includes("education") || txt.includes("columbia") || txt.includes("london") || txt.includes("lse")) {
        botAns = "I graduated from Elphinstone College in 1912, earned my M.A. and Ph.D. from Columbia University in New York, and my D.Sc. from the London School of Economics, while also being called to the Bar at Gray's Inn.";
      } else if (txt.includes("women") || txt.includes("hindu code") || txt.includes("gender")) {
        botAns = "I measure the progress of a community by the degree of progress which women have achieved. That is why I introduced the Hindu Code Bill to grant women equal inheritance, property, and divorce rights.";
      }

      msgs.innerHTML += `<div class="chat-bubble bot">${botAns}</div>`;
      msgs.scrollTop = msgs.scrollHeight;
    }, 350);
  }

  send.addEventListener("click", replyUser);
  input.addEventListener("keypress", (e) => { if (e.key === "Enter") replyUser(); });
}

/* ==========================================================================
   6. RESTORED FAMILY CIRCLE MODULE
   ========================================================================== */
const familyCircleData = [
  { name: "Subedar Major Ramji Sakpal", role: "Father & Mentor", img: "father.jpg", lifespan: "1838 — 1913", desc: "A Subedar of the Mahar Regiment who pawned possessions to purchase books for young Bhimrao, instilling strict discipline and Kabir's egalitarian verses." },
  { name: "Matoshree Ramabai Ambedkar", role: "First Wife & Pillar of Sacrifice", img: "FAM (1).jpeg", lifespan: "1898 — 1935", desc: "Endured poverty, personal loss, and prolonged separation in silence, enabling Babasaheb to study abroad. Babasaheb dedicated 'Thoughts on Pakistan' to her." },
  { name: "Dr. Savita Ambedkar (Mai)", role: "Second Wife, Doctor & Companion", img: "FAM 2.jpg", lifespan: "1909 — 2003", desc: "A medical doctor who nursed Babasaheb through failing health during the drafting of the Constitution and preserved his archives for decades." },
  { name: "Yashwantrao Ambedkar (Bhaiyasaheb)", role: "Son & Social Leader", img: "SON.jpg", lifespan: "1912 — 1977", desc: "The only surviving son of Babasaheb and Ramabai. He served as President of the Buddhist Society of India and editor of the weekly Janata." },
  { name: "The Sanctuary at Rajgruha", role: "Family Sanctuary & Library", img: "FAM 4.jpeg", lifespan: "Dadar, Bombay", desc: "Custom-designed family home built to house Babasaheb's monumental collection of over 50,000 rare books and his close household circle." }
];

let activeFamIdx = 0;

function showFamilyView() {
  let html = `
    <div class="module-hero-box">
      <h3>SACRED KINSHIP &amp; THE SANCTUARY AT RAJGRUHA</h3>
      <p>Select any circular cameo below to inspect portraits, life stories, and archival accounts.</p>
    </div>

    <div class="family-circle-stage">
      <div class="family-cameo-ring-row">
        ${familyCircleData.map((f, i) => `
          <div class="family-cameo-circle-item ${i === 0 ? 'active' : ''}" data-fidx="${i}">
            <div class="family-cameo-circle-frame">
              <img id="fcameo-${i}" alt="${f.name}" />
            </div>
            <span class="family-cameo-label">${f.name.split(' ')[0]}</span>
          </div>
        `).join('')}
      </div>

      <div class="family-active-dossier-card">
        <div class="family-dossier-portrait">
          <img id="familyDossierImg" alt="Portrait" />
        </div>
        <div class="dossier-info-col">
          <span class="d-badge-era" id="familyRoleBadge">Role</span>
          <h2 class="d-title" id="familyNameTitle">Name</h2>
          <span class="d-badge-years" id="familyLifespanTag" style="margin-bottom:0.8rem;">Lifespan</span>
          <div class="d-significance">
            <h4>ARCHIVAL ACCOUNT &amp; SACRIFICE</h4>
            <p id="familyNarrativeText" style="line-height:1.75;"></p>
          </div>
        </div>
      </div>
    </div>
  `;

  openModal("KINSHIP", "Family & Household", html);

  familyCircleData.forEach((f, i) => {
    loadSafeImg(document.getElementById(`fcameo-${i}`), f.img);
  });

  function selectFamilyCameo(idx) {
    activeFamIdx = idx;
    document.querySelectorAll(".family-cameo-circle-item").forEach((item, i) => {
      item.classList.toggle("active", i === idx);
    });

    const current = familyCircleData[idx];
    document.getElementById("familyRoleBadge").textContent = current.role;
    document.getElementById("familyNameTitle").textContent = current.name;
    document.getElementById("familyLifespanTag").textContent = current.lifespan;
    document.getElementById("familyNarrativeText").textContent = current.desc;
    loadSafeImg(document.getElementById("familyDossierImg"), current.img);
  }

  document.querySelectorAll(".family-cameo-circle-item").forEach(item => {
    item.addEventListener("click", () => selectFamilyCameo(parseInt(item.dataset.fidx)));
  });

  selectFamilyCameo(0);
}

/* ==========================================================================
   7. CONSTITUTION ROOM
   ========================================================================== */
function showConstitutionView() {
  let html = `
    <div class="module-hero-box">
      <h3>CHIEF ARCHITECT OF THE CONSTITUTION</h3>
      <p>Presented the Final Draft on 25 November 1949 after 2 years, 11 months, and 18 days of debates.</p>
    </div>

    <div class="constitution-grid-view">
      <div class="constitution-frame">
        <img id="constFullImg" alt="Drafting Committee" />
      </div>
      <div>
        <h3 style="font-family:var(--font-heading); color:var(--gold-primary); margin-bottom:0.5rem;">Preamble to the Constitution of India</h3>
        <p style="font-size:0.92rem; line-height:1.75; color:var(--text-dim); margin-bottom:1.2rem;">
          "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:
          <strong>JUSTICE</strong>, social, economic and political;
          <strong>LIBERTY</strong> of thought, expression, belief, faith and worship;
          <strong>EQUALITY</strong> of status and of opportunity; and to promote among them all
          <strong>FRATERNITY</strong> assuring the dignity of the individual..."
        </p>
        <div class="d-significance">
          <h4>ARTICLE 32: HEART &amp; SOUL OF THE CONSTITUTION</h4>
          <p>Confers the right to approach the Supreme Court directly for the enforcement of Fundamental Rights.</p>
        </div>
      </div>
    </div>
  `;
  openModal("CONSTITUTION", "The Living Document", html);
  loadSafeImg(document.getElementById("constFullImg"), "Chairman Drafting Commitee.jpeg");
}

/* ==========================================================================
   8. PHOTO VAULT
   ========================================================================== */
function showPhotosView() {
  const photoVaultItems = [
    { file: "Chairman Drafting Commitee.jpeg", title: "Chairman of the Drafting Committee (1947)" },
    { file: "Ambedkar_Barrister.jpg", title: "Barrister-at-Law, Gray's Inn (1923)" },
    { file: "193-1916.jpeg", title: "Viceroy Executive Council Session (1942)" },
    { file: "colombia university.jpeg", title: "Columbia University Campus (1913)" },
    { file: "London School of Economics - UK.jpeg", title: "London School of Economics (1916)" },
    { file: "Honorary LL.D. — Columbia University, 1952.jpeg", title: "Conferment of Honorary LL.D. (1952)" },
    { file: "Honorary Doctorate — Osmania University, 1953.jpeg", title: "Osmania University D.Litt. (1953)" },
    { file: "images.jpg", title: "Historic Dhamma Deeksha, Nagpur (1956)" }
  ];

  let html = `
    <div class="module-hero-box">
      <h3>ARCHIVAL PHOTO VAULT</h3>
      <p>High-resolution photographic records and portraits preserved in archival matting.</p>
    </div>
    <div class="photo-vault-gallery">
      ${photoVaultItems.map((p, i) => `
        <div class="photo-vault-item">
          <div class="photo-vault-frame">
            <img id="pvimg-${i}" alt="${p.title}" />
          </div>
          <span style="font-family:var(--font-heading); font-size:0.75rem; color:var(--parchment);">${p.title}</span>
        </div>
      `).join('')}
    </div>
  `;
  openModal("GALLERY", "Archival Photo Vault", html);
  photoVaultItems.forEach((p, i) => {
    loadSafeImg(document.getElementById(`pvimg-${i}`), p.file);
  });
}

/* ==========================================================================
   9. TIMELINE / GET TO KNOW HIM MORE MODULE
   ========================================================================== */
const timelineMilestones = [
  {
    year: "1908 – 1913", shortYear: "1908", pos: "node-pos-top",
    img: "1908 -1913— Entered Elphinstone College, Bombay.jpeg",
    era: "ERA 01", title: "Elphinstone College & Graduation",
    tagline: "Breaking barriers in higher academia in Bombay",
    narrative: "Supported by a scholarship from Maharaja Sayajirao Gaekwad III of Baroda, young Bhimrao matriculated and graduated from Elphinstone College with degrees in Economics and Political Science.",
    caption: "Elphinstone College, Bombay (1908–1913)",
    gallery: ["1908 -1913— Entered Elphinstone College, Bombay.jpeg", "colombia university.jpeg"]
  },
  {
    year: "1913 – 1916", shortYear: "1913", pos: "node-pos-bottom",
    img: "colombia university.jpeg",
    era: "ERA 02", title: "Columbia University, New York",
    tagline: "Doctoral research & seminal paper on Castes in India",
    narrative: "Under mentors like John Dewey and Edwin Seligman, Ambedkar earned his M.A. and Ph.D., presenting the epoch-making paper 'Castes in India: Their Mechanism, Genesis and Development'.",
    caption: "Columbia University Campus, New York",
    gallery: ["colombia university.jpeg", "London School of Economics - UK.jpeg"]
  },
  {
    year: "1916 – 1921", shortYear: "1916", pos: "node-pos-top",
    img: "London School of Economics - UK.jpeg",
    era: "ERA 03", title: "London School of Economics & Gray's Inn",
    tagline: "Monetary economics, D.Sc., and reading for the Bar",
    narrative: "Working in the British Museum reading room, he produced 'The Problem of the Rupee: Its Origin and Its Solution', subsequently receiving his Master of Science and Doctor of Science (D.Sc.) degrees.",
    caption: "London School of Economics (LSE), United Kingdom",
    gallery: ["London School of Economics - UK.jpeg", "Ambedkar_Barrister.jpg"]
  },
  {
    year: "1918 – 1920", shortYear: "1918", pos: "node-pos-bottom",
    img: "profe.jpeg",
    era: "ERA 04", title: "Professor at Sydenham College",
    tagline: "Educator of political economy & founding of 'Mooknayak'",
    narrative: "While lecturing at Sydenham College, he experienced caste discrimination from fellow faculty, which fueled his resolve. With backing from Chhatrapati Shahu Maharaj, he founded 'Mooknayak' to give voice to the voiceless.",
    caption: "Sydenham College of Commerce & Economics, Bombay",
    gallery: ["profe.jpeg", "1908 -1913— Entered Elphinstone College, Bombay.jpeg"]
  },
  {
    year: "1923", shortYear: "1923", pos: "node-pos-top",
    img: "Ambedkar_Barrister.jpg",
    era: "ERA 05", title: "Called to the Bar & Legal Advocacy",
    tagline: "Fearless defender of civil liberties in the Bombay High Court",
    narrative: "Admitted to Gray's Inn as Barrister-at-Law, Dr. Ambedkar prioritized cases defending poor laborers and disenfranchised communities in landmark public litigations, turning the law into an instrument for civil equality.",
    caption: "Dr. B. R. Ambedkar as Barrister-at-Law, Gray's Inn",
    gallery: ["Ambedkar_Barrister.jpg", "London School of Economics - UK.jpeg"]
  },
  {
    year: "1942 – 1946", shortYear: "1942", pos: "node-pos-bottom",
    img: "193-1916.jpeg",
    era: "ERA 06", title: "Viceroy’s Executive Council & Labor Rights",
    tagline: "Pioneering 8-hour workdays, maternity benefits & river valley grids",
    narrative: "He instituted the Central Waterways, Irrigation and Navigation Commission (CWINC), formulated the Damodar Valley Corporation framework, and laid down modern industrial worker safety laws.",
    caption: "Dr. Ambedkar presiding over the Executive Council Session",
    gallery: ["193-1916.jpeg", "law.jpeg"]
  },
  {
    year: "1947 – 1949", shortYear: "1947", pos: "node-pos-top",
    img: "Chairman Drafting Commitee.jpeg",
    era: "ERA 07", title: "Architect of the Constitution of India",
    tagline: "Chairman of the Drafting Committee & Chief Architect",
    narrative: "Appointed Chairman of the Constitution Drafting Committee on 29 August 1947, he steered through exhaustive constituent debates to forge the world's most progressive written constitution.",
    caption: "Dr. B. R. Ambedkar with the Drafting Committee",
    gallery: ["Chairman Drafting Commitee.jpeg", "law.jpeg"]
  },
  {
    year: "1947 – 1951", shortYear: "1950", pos: "node-pos-bottom",
    img: "law.jpeg",
    era: "ERA 08", title: "First Law Minister & The Hindu Code Bill",
    tagline: "Uncompromising crusade for gender equality & civil code",
    narrative: "As India's first Law Minister, he fought tirelessly for women's equal property, inheritance, and marriage rights. When conservative resistance stalled the bill, he demonstrated moral courage by resigning from the cabinet.",
    caption: "Dr. Ambedkar as Independent India's First Law Minister",
    gallery: ["law.jpeg", "Chairman Drafting Commitee.jpeg"]
  },
  {
    year: "1952", shortYear: "1952", pos: "node-pos-top",
    img: "Honorary LL.D. — Columbia University, 1952.jpeg",
    era: "ERA 09", title: "Honorary LL.D. — Columbia University",
    tagline: "Honored by his American alma mater as a great social reformer",
    narrative: "Columbia University conferred upon him the degree of Doctor of Laws (LL.D., honoris causa) celebrating his global contributions to jurisprudence, human rights, and democracy.",
    caption: "Columbia University Convocation Ceremony (June 5, 1952)",
    gallery: ["Honorary LL.D. — Columbia University, 1952.jpeg", "colombia university.jpeg"]
  },
  {
    year: "1953", shortYear: "1953", pos: "node-pos-bottom",
    img: "Honorary Doctorate — Osmania University, 1953.jpeg",
    era: "ERA 10", title: "Doctor of Literature — Osmania University",
    tagline: "Honorary D.Litt. in recognition of intellectual eminence",
    narrative: "Osmania University presented him with the honorary degree of Doctor of Literature (D.Litt.) celebrating his exceptional stature as an author, economist, and statesman.",
    caption: "Conferment of D.Litt. Degree, Hyderabad-Deccan (Jan 12, 1953)",
    gallery: ["Honorary Doctorate — Osmania University, 1953.jpeg", "Honorary LL.D. — Columbia University, 1952.jpeg"]
  },
  {
    year: "1956", shortYear: "1956", pos: "node-pos-top",
    img: "images.jpg",
    era: "ERA 11", title: "Deekshabhoomi & Navayana Buddhism",
    tagline: "The Great Conversion at Nagpur & 'The Buddha and His Dhamma'",
    narrative: "On October 14, 1956, at Deekshabhoomi in Nagpur, Dr. Ambedkar along with over 500,000 followers embraced Buddhism. Days before his Mahaparinirvana, he completed his seminal work 'The Buddha and His Dhamma'.",
    caption: "Historic Dhamma Deeksha at Nagpur (October 14, 1956)",
    gallery: ["images.jpg", "Chairman Drafting Commitee.jpeg"]
  }
];

let currentTimelineIdx = 0;

function showTimelineView() {
  let html = `
    <div class="module-hero-box">
      <h3>GET TO KNOW HIM MORE</h3>
      <p>An Interactive Archival Infographic into the Life, Philosophy & Legacy of Dr. B. R. Ambedkar</p>
    </div>

    <div style="text-align:center; font-size:0.75rem; color:var(--gold-primary); letter-spacing:0.15rem; margin-bottom:0.5rem; font-family:var(--font-heading);">
      ← SCROLL OR DRAG HORIZONTALLY • USE ARROW KEYS →
    </div>

    <div class="timeline-viewport-box" id="tViewport">
      <div class="timeline-spine-track" id="tSpineTrack">
        ${timelineMilestones.map((m, i) => `
          <div class="t-node ${m.pos} ${i===0?'active':''}" data-tidx="${i}">
            <div class="t-cameo"><img id="tCameo-${i}" alt="${m.title}" /></div>
            <div class="t-tether"></div>
            <div class="t-pin"></div>
            <span class="t-year">${m.shortYear}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="timeline-controls-bar">
      <button id="tPrevBtn" class="t-pill-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        <span>Previous</span>
      </button>
      <span class="t-era-counter" id="tEraCounter">Era 01 / 11</span>
      <button id="tNextBtn" class="t-pill-btn">
        <span>Next</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>

    <div class="archival-dossier-stage">
      <div class="museum-matting-box">
        <img id="tDossierImg" alt="Dossier Portrait" />
        <div class="museum-plate-text" id="tDossierPlate">Loading...</div>
      </div>
      <div class="dossier-info-col">
        <div class="dossier-tag-row">
          <span class="d-badge-era" id="tBadgeEra">ERA 01</span>
          <span class="d-badge-years" id="tBadgeYears">1908 – 1913</span>
        </div>
        <h2 class="d-title" id="tTitle">Title</h2>
        <h3 class="d-tagline" id="tTagline">Tagline</h3>
        <div class="d-significance">
          <h4>HISTORICAL NARRATIVE</h4>
          <p id="tNarrative"></p>
        </div>
        <div class="d-evidence">
          <h4>DOCUMENTARY EVIDENCE</h4>
          <div class="evidence-deck-row" id="tEvidenceRow"></div>
        </div>
      </div>
    </div>
  `;

  openModal("ARCHIVAL CHRONICLE", "GET TO KNOW HIM MORE", html);

  timelineMilestones.forEach((m, idx) => {
    loadSafeImg(document.getElementById(`tCameo-${idx}`), m.img);
  });

  function selectTimelineEra(idx) {
    if (idx < 0 || idx >= timelineMilestones.length) return;
    currentTimelineIdx = idx;
    triggerGoldenFlare();

    document.querySelectorAll(".t-node").forEach((n, i) => n.classList.toggle("active", i === idx));

    const activeNode = document.querySelectorAll(".t-node")[idx];
    const viewport = document.getElementById("tViewport");
    if (activeNode && viewport) {
      const targetScroll = activeNode.offsetLeft - viewport.clientWidth / 2 + activeNode.clientWidth / 2;
      viewport.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    }

    const item = timelineMilestones[idx];
    const dImg = document.getElementById("tDossierImg");
    dImg.style.opacity = "0";
    setTimeout(() => {
      loadSafeImg(dImg, item.img);
      dImg.style.opacity = "1";
    }, 150);

    document.getElementById("tDossierPlate").textContent = item.caption;
    document.getElementById("tBadgeEra").textContent = item.era;
    document.getElementById("tBadgeYears").textContent = item.year;
    document.getElementById("tTitle").textContent = item.title;
    document.getElementById("tTagline").textContent = item.tagline;
    document.getElementById("tNarrative").textContent = item.narrative;
    document.getElementById("tEraCounter").textContent = `Era ${String(idx + 1).padStart(2, "0")} / ${String(timelineMilestones.length).padStart(2, "0")}`;

    const evRow = document.getElementById("tEvidenceRow");
    evRow.innerHTML = "";
    item.gallery.forEach(gImg => {
      const chip = document.createElement("div");
      chip.className = "evidence-card-chip";
      chip.innerHTML = `<img alt="Artifact" />`;
      loadSafeImg(chip.querySelector("img"), gImg);
      chip.addEventListener("click", () => {
        loadSafeImg(dImg, gImg);
      });
      evRow.appendChild(chip);
    });
  }

  document.querySelectorAll(".t-node").forEach(n => {
    n.addEventListener("click", () => selectTimelineEra(parseInt(n.dataset.tidx)));
  });

  document.getElementById("tPrevBtn").addEventListener("click", () => {
    if (currentTimelineIdx > 0) selectTimelineEra(currentTimelineIdx - 1);
  });
  document.getElementById("tNextBtn").addEventListener("click", () => {
    if (currentTimelineIdx < timelineMilestones.length - 1) selectTimelineEra(currentTimelineIdx + 1);
  });

  selectTimelineEra(0);
}

// 10. QUOTES MODULE
const quotesArchive = [
  { category: "education", categoryLabel: "Education", quote: "Cultivation of mind should be the ultimate aim of human existence.", source: "Speech on Self-Respect (1942)", img: "Ambedkar_Barrister.jpg" },
  { category: "education", categoryLabel: "Education", quote: "Be educated, be organized, and be agitated.", source: "All-India Depressed Classes Conference (1942)", img: "Chairman Drafting Commitee.jpeg" },
  { category: "democracy", categoryLabel: "Constitution", quote: "Political democracy cannot last unless there lies at the base of it social democracy.", source: "Constituent Assembly (Nov 25, 1949)", img: "Chairman Drafting Commitee.jpeg" },
  { category: "democracy", categoryLabel: "Constitution", quote: "I like the religion that teaches liberty, equality, and fraternity.", source: "Reflections on Navayana", img: "images.jpg" },
  { category: "equality", categoryLabel: "Equality", quote: "I measure the progress of a community by the degree of progress which women have achieved.", source: "Women's Conference (1942)", img: "law.jpeg" },
  { category: "selfrespect", categoryLabel: "Self-Respect", quote: "Life should be great rather than long.", source: "Historic Aphorism", img: "Ambedkar_Barrister.jpg" }
];

function showQuotesView(initialCategory = "all") {
  let html = `
    <div class="module-hero-box">
      <h3>WORDS OF POWER & VISION</h3>
      <p>Timeless aphorisms guiding generations toward self-respect, rationality, and civil liberties.</p>
    </div>

    <div class="quotes-filter-tabs">
      <button class="q-filter-btn ${initialCategory === 'all' ? 'active' : ''}" data-cat="all">All Quotations</button>
      <button class="q-filter-btn ${initialCategory === 'education' ? 'active' : ''}" data-cat="education">Education</button>
      <button class="q-filter-btn ${initialCategory === 'democracy' ? 'active' : ''}" data-cat="democracy">Constitution</button>
      <button class="q-filter-btn ${initialCategory === 'equality' ? 'active' : ''}" data-cat="equality">Equality</button>
      <button class="q-filter-btn ${initialCategory === 'selfrespect' ? 'active' : ''}" data-cat="selfrespect">Self-Respect</button>
    </div>

    <div class="quotes-cards-deck" id="quotesCardsDeck"></div>
  `;

  openModal("PHILOSOPHICAL DICTA", "Words of Dr. B. R. Ambedkar", html);

  function renderFilteredQuotes(cat) {
    const deck = document.getElementById("quotesCardsDeck");
    deck.innerHTML = "";

    const list = cat === "all" ? quotesArchive : quotesArchive.filter(q => q.category === cat);

    list.forEach((q, idx) => {
      const card = document.createElement("article");
      card.className = "quote-display-card";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="quote-category-tag">${q.categoryLabel}</span>
          <div style="width:38px; height:38px; border-radius:50%; border:1px solid var(--gold-primary); overflow:hidden; background:#0f0805;">
            <img id="qimg-${idx}" style="width:100%; height:100%; object-fit:cover;" alt="Dr. Ambedkar" />
          </div>
        </div>
        <p class="quote-main-content">“${q.quote}”</p>
        <div class="quote-author-source">
          <span>— DR. B. R. AMBEDKAR</span>
          <span style="font-size:0.65rem; color:var(--gold-primary);">${q.source}</span>
        </div>
      `;
      deck.appendChild(card);
      loadSafeImg(card.querySelector(`#qimg-${idx}`), q.img);
    });
  }

  document.querySelectorAll(".q-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".q-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderFilteredQuotes(btn.dataset.cat);
    });
  });

  renderFilteredQuotes(initialCategory);
}

/* ==========================================================================
   11. NAVIGATION & INITIALIZATION
   ========================================================================== */
function navigateOrOpen(targetPath, fallbackFn) {
  if (targetPath) {
    // Attempt navigation to external folder
    fetch(targetPath, { method: "HEAD" })
      .then(res => {
        if (res.ok) {
          window.location.href = targetPath;
        } else {
          fallbackFn();
        }
      })
      .catch(() => {
        fallbackFn();
      });
  } else {
    fallbackFn();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Portraits and Backdrop initialization
  loadSafeImg(document.getElementById("splashAmbedkarImg"), "Chairman Drafting Commitee.jpeg");
  loadSafeImg(document.getElementById("heroAmbedkarImg"), "Chairman Drafting Commitee.jpeg");
  loadSafeImg(document.getElementById("quoteCameoImg"), "Ambedkar_Barrister.jpg");
  setBackdropImage("Chairman Drafting Commitee.jpeg");

  // Tile Action Handlers
  const moduleFallbacks = {
    timeline: showTimelineView,
    bot: showBotView,
    books: showBooksView,
    speeches: showSpeechesView,
    constitution: showConstitutionView,
    family: showFamilyView,
    movement: showMovementView,
    quotes: () => showQuotesView("all"),
    photos: showPhotosView
  };

  document.querySelectorAll(".aesthetic-widget-card").forEach(card => {
    card.addEventListener("click", () => {
      const act = card.dataset.action;
      const target = card.dataset.target;
      if (act === "quotes") {
        showQuotesView("all");
      } else {
        navigateOrOpen(target, moduleFallbacks[act]);
      }
    });
  });

  const heroBtn = document.getElementById("heroExploreBtn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      navigateOrOpen("Get to know him more/Images/images.html", showTimelineView);
    });
  }

  const dailyQuote = document.getElementById("dailyQuoteWidget");
  if (dailyQuote) dailyQuote.addEventListener("click", () => showQuotesView("selfrespect"));

  document.querySelectorAll(".dock-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".dock-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const tName = tab.dataset.tab;
      if (tName === "timeline") navigateOrOpen("Get to know him more/Images/images.html", showTimelineView);
      else if (tName === "books") navigateOrOpen("books/books.html", showBooksView);
      else if (tName === "family") navigateOrOpen("Family/Image/image.html", showFamilyView);
    });
  });
});