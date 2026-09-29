/**
 * Dr. B. R. Ambedkar Archival Interactive Timeline
 * Auto-detecting path architecture (Works regardless of folder placement)
 */

/* ==========================================================================
   1. IMAGE ASSETS REGISTRY (Just change filenames here if ever renamed)
   ========================================================================== */
const RAW_IMAGE_NAMES = {
  elphinstone: "1908 -1913— Entered Elphinstone College, Bombay.jpeg",
  columbia: "colombia university.jpeg",
  lse: "London School of Economics - UK.jpeg",
  professor: "profe.jpeg",
  barrister: "Ambedkar_Barrister.jpg",
  viceroyCouncil: "193-1916.jpeg",
  draftingCommittee: "Chairman Drafting Commitee.jpeg",
  lawMinister: "law.jpeg",
  columbiaLLD: "Honorary LL.D. — Columbia University, 1952.jpeg",
  osmaniaDoctorate: "Honorary Doctorate — Osmania University, 1953.jpeg",
  finalDhamma: "images.jpg",
};

/**
 * Smart Path Resolver:
 * Checks whether the current page is already inside /Images/ or in the parent folder
 */
function resolveImgPath(filename) {
  const currentPath = window.location.pathname.toLowerCase();
  // If the browser URL already ends with /images.html, don't double prepend "Images/"
  if (currentPath.includes("/images/")) {
    return encodeURI(filename);
  }
  return encodeURI(`Images/${filename}`);
}

// Built assets with intelligent resolution
const IMAGE_ASSETS = {};
for (const [key, val] of Object.entries(RAW_IMAGE_NAMES)) {
  IMAGE_ASSETS[key] = resolveImgPath(val);
}

/* ==========================================================================
   2. HISTORICAL MILESTONES DATASET
   ========================================================================== */
const timelineMilestones = [
  {
    year: "1908 – 1913",
    shortYear: "1908",
    pos: "node-pos-top",
    image: IMAGE_ASSETS.elphinstone,
    rawName: RAW_IMAGE_NAMES.elphinstone,
    relation: "HIGHER STUDIES & GRADUATION",
    name: "Elphinstone College & Bombay University",
    oneLiner: "Overcoming severe social barriers to secure a bachelor's degree in Economics and Political Science.",
    details: "Supported by a scholarship from Maharaja Sayajirao Gaekwad III of Baroda, young Bhimrao matriculated and graduated from Elphinstone College, paving the way for his scholarly expeditions abroad.",
    caption: "Elphinstone College, Bombay (1908–1913)",
    gallery: [IMAGE_ASSETS.elphinstone, IMAGE_ASSETS.columbia]
  },
  {
    year: "1913 – 1916",
    shortYear: "1913",
    pos: "node-pos-bottom",
    image: IMAGE_ASSETS.columbia,
    rawName: RAW_IMAGE_NAMES.columbia,
    relation: "DOCTORAL RESEARCH & SCHOLARSHIP",
    name: "Columbia University, New York",
    oneLiner: "Earned his M.A. and Ph.D., presenting the seminal paper 'Castes in India: Their Mechanism, Genesis and Development'.",
    details: "Under mentors like John Dewey and Edwin Seligman, Ambedkar immersed himself in institutional pragmatism and civil liberty, laying the foundational philosophical tenets for social reform in India.",
    caption: "Columbia University Campus, New York",
    gallery: [IMAGE_ASSETS.columbia, IMAGE_ASSETS.lse]
  },
  {
    year: "1916 – 1921",
    shortYear: "1916",
    pos: "node-pos-top",
    image: IMAGE_ASSETS.lse,
    rawName: RAW_IMAGE_NAMES.lse,
    relation: "MONETARY ECONOMICS & BAR STUDIES",
    name: "London School of Economics & Gray's Inn",
    oneLiner: "Enrolled simultaneously for doctoral studies in economics and legal bar training in London.",
    details: "Working tirelessly in the British Museum reading room, he produced the monumental treatise 'The Problem of the Rupee: Its Origin and Its Solution', subsequently receiving his Master of Science and Doctor of Science (D.Sc.) degrees.",
    caption: "London School of Economics (LSE), United Kingdom",
    gallery: [IMAGE_ASSETS.lse, IMAGE_ASSETS.barrister]
  },
  {
    year: "1918 – 1920",
    shortYear: "1918",
    pos: "node-pos-bottom",
    image: IMAGE_ASSETS.professor,
    rawName: RAW_IMAGE_NAMES.professor,
    relation: "EDUCATOR & REVOLUTIONARY JOURNALIST",
    name: "Professor at Sydenham & Founder of 'Mooknayak'",
    oneLiner: "Educated students in Political Economy while launching the fortnightly journal 'Mooknayak' (Leader of the Silent).",
    details: "While lecturing at Sydenham College of Commerce, he experienced caste discrimination from fellow faculty, which fueled his resolve. With backing from Chhatrapati Shahu Maharaj, he founded 'Mooknayak' to give voice to the voiceless.",
    caption: "Sydenham College of Commerce & Economics, Bombay",
    gallery: [IMAGE_ASSETS.professor, IMAGE_ASSETS.elphinstone]
  },
  {
    year: "1923",
    shortYear: "1923",
    pos: "node-pos-top",
    image: IMAGE_ASSETS.barrister,
    rawName: RAW_IMAGE_NAMES.barrister,
    relation: "BARRISTER-AT-LAW & ADVOCACY",
    name: "Called to the Bar & Bombay High Court",
    oneLiner: "Admitted to Gray's Inn as Barrister-at-Law, establishing a fearless legal practice dedicated to human rights.",
    details: "He prioritized cases defending poor laborers and disenfranchised communities in landmark public litigations, turning the law into an instrument for civil equality.",
    caption: "Dr. B. R. Ambedkar as Barrister-at-Law, Gray's Inn",
    gallery: [IMAGE_ASSETS.barrister, IMAGE_ASSETS.lse]
  },
  {
    year: "1942 – 1946",
    shortYear: "1942",
    pos: "node-pos-bottom",
    image: IMAGE_ASSETS.viceroyCouncil,
    rawName: RAW_IMAGE_NAMES.viceroyCouncil,
    relation: "LABOR REFORM & NATIONAL INFRASTRUCTURE",
    name: "Viceroy’s Executive Council Member",
    oneLiner: "Reformed labor welfare by cutting work hours from 12 to 8, securing maternity benefits, and establishing national water grids.",
    details: "He instituted the Central Waterways, Irrigation and Navigation Commission (CWINC), formulated the Damodar Valley Corporation framework, and laid down modern industrial worker safety laws.",
    caption: "Dr. Ambedkar presiding over the Executive Council Session",
    gallery: [IMAGE_ASSETS.viceroyCouncil, IMAGE_ASSETS.lawMinister]
  },
  {
    year: "1947 – 1949",
    shortYear: "1947",
    pos: "node-pos-top",
    image: IMAGE_ASSETS.draftingCommittee,
    rawName: RAW_IMAGE_NAMES.draftingCommittee,
    relation: "CHAIRMAN OF THE DRAFTING COMMITTEE",
    name: "Architect of the Constitution of India",
    oneLiner: "Led the constituent assembly debates to frame the world's most progressive constitutional democracy.",
    details: "Enshrined fundamental civil rights, established universal adult franchise, abolished untouchability (Article 17), and framed constitutional remedies (Article 32) as the heart and soul of the Constitution.",
    caption: "Dr. B. R. Ambedkar with the Drafting Committee",
    gallery: [IMAGE_ASSETS.draftingCommittee, IMAGE_ASSETS.lawMinister]
  },
  {
    year: "1947 – 1951",
    shortYear: "1950",
    pos: "node-pos-bottom",
    image: IMAGE_ASSETS.lawMinister,
    rawName: RAW_IMAGE_NAMES.lawMinister,
    relation: "FIRST LAW MINISTER OF INDIA",
    name: "Cabinet Ministry & The Hindu Code Bill",
    oneLiner: "Pioneered legislative equality for Indian women through the Hindu Code Bill, choosing principle over power.",
    details: "He fought tirelessly for women's equal inheritance, guardianship, and marriage rights. When conservative roadblocks stalled the bill, he demonstrated unprecedented moral leadership by resigning from the cabinet.",
    caption: "Dr. Ambedkar as Independent India's First Law Minister",
    gallery: [IMAGE_ASSETS.lawMinister, IMAGE_ASSETS.draftingCommittee]
  },
  {
    year: "1952",
    shortYear: "1952",
    pos: "node-pos-top",
    image: IMAGE_ASSETS.columbiaLLD,
    rawName: RAW_IMAGE_NAMES.columbiaLLD,
    relation: "HONORARY DOCTOR OF LAWS (LL.D.)",
    name: "Columbia University Convocation",
    oneLiner: "Honored by his alma mater as a great social reformer and framer of the Indian Constitution.",
    details: "At the university's bicentennial celebration, Columbia conferred upon him the degree of Doctor of Laws (LL.D., honoris causa) celebrating his global contributions to jurisprudence and equality.",
    caption: "Columbia University Convocation Ceremony (June 5, 1952)",
    gallery: [IMAGE_ASSETS.columbiaLLD, IMAGE_ASSETS.columbia]
  },
  {
    year: "1953",
    shortYear: "1953",
    pos: "node-pos-bottom",
    image: IMAGE_ASSETS.osmaniaDoctorate,
    rawName: RAW_IMAGE_NAMES.osmaniaDoctorate,
    relation: "DOCTOR OF LITERATURE (D.LITT.)",
    name: "Osmania University Conferment",
    oneLiner: "Recognized with an honorary D.Litt. for outstanding academic erudition and public service.",
    details: "On January 12, 1953, Osmania University in Hyderabad-Deccan presented him with the honorary degree celebrating his exceptional stature as an author, economist, and statesman.",
    caption: "Conferment of D.Litt. Degree, Hyderabad-Deccan (Jan 12, 1953)",
    gallery: [IMAGE_ASSETS.osmaniaDoctorate, IMAGE_ASSETS.columbiaLLD]
  },
  {
    year: "1956",
    shortYear: "1956",
    pos: "node-pos-top",
    image: IMAGE_ASSETS.finalDhamma,
    rawName: RAW_IMAGE_NAMES.finalDhamma,
    relation: "REVIVAL OF DHAMMA & NAVAYANA",
    name: "Deekshabhoomi & The Final Chapter",
    oneLiner: "Embraced Buddhism with over 500,000 followers at Nagpur, championing Prajna, Karuna, and Samata.",
    details: "On October 14, 1956, Babasaheb set the Wheel of Dhamma in motion once more. Days before his Mahaparinirvana, he completed his seminal work 'The Buddha and His Dhamma'.",
    caption: "Historic Dhamma Deeksha at Nagpur (October 14, 1956)",
    gallery: [IMAGE_ASSETS.finalDhamma, IMAGE_ASSETS.draftingCommittee]
  }
];

/* ==========================================================================
   3. CONTROLLER & INTERACTION
   ========================================================================== */
let currentIndex = 0;

// Elements
const timelineTrack = document.getElementById("timelineTrack");
const timelineViewport = document.getElementById("timelineViewport");
const revealImage = document.getElementById("revealImage");
const imageCaption = document.getElementById("imageCaption");
const dossierEraTag = document.getElementById("dossierEraTag");
const dossierYears = document.getElementById("dossierYears");
const dossierTitle = document.getElementById("dossierTitle");
const dossierTagline = document.getElementById("dossierTagline");
const dossierNarrative = document.getElementById("dossierNarrative");
const artifactDeck = document.getElementById("artifactDeck");
const eraIndicator = document.getElementById("eraIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const goldenFlare = document.getElementById("goldenFlare");

// Safe Image fallback switcher
function attachSafeImageFallback(imgElement, rawFilename) {
  imgElement.onerror = function() {
    // If it was trying "Images/...", try direct filename
    if (this.src.includes("Images/")) {
      this.src = encodeURI(rawFilename);
    } else {
      // Or try adding "Images/"
      this.src = encodeURI(`Images/${rawFilename}`);
    }
    // Prevent infinite loop
    this.onerror = null;
  };
}

// Render Timeline Nodes
function renderTimeline() {
  if (!timelineTrack) return;
  timelineTrack.innerHTML = "";

  timelineMilestones.forEach((item, index) => {
    const node = document.createElement("div");
    node.className = `timeline-node ${item.pos} ${index === currentIndex ? "active" : ""}`;
    node.dataset.index = index;

    node.innerHTML = `
      <div class="node-cameo-frame">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="node-tether-line"></div>
      <div class="node-anchor-pin"></div>
      <div class="node-year-label">${item.shortYear}</div>
    `;

    const img = node.querySelector("img");
    attachSafeImageFallback(img, item.rawName);

    node.addEventListener("click", () => selectEra(index));
    timelineTrack.appendChild(node);
  });
}

function triggerGoldenFlare() {
  if (!goldenFlare) return;
  goldenFlare.classList.remove("trigger-sweep");
  void goldenFlare.offsetWidth; // Force reflow
  goldenFlare.classList.add("trigger-sweep");
}

function selectEra(index) {
  if (index < 0 || index >= timelineMilestones.length) return;
  currentIndex = index;

  triggerGoldenFlare();

  // Active Pin Highlight
  const nodes = document.querySelectorAll(".timeline-node");
  nodes.forEach((node, i) => node.classList.toggle("active", i === currentIndex));

  // Auto Center Active Node in Viewport
  const activeNode = nodes[currentIndex];
  if (activeNode && timelineViewport) {
    const scrollTarget =
      activeNode.offsetLeft - timelineViewport.clientWidth / 2 + activeNode.clientWidth / 2;
    timelineViewport.scrollTo({ left: Math.max(0, scrollTarget), behavior: "smooth" });
  }

  const current = timelineMilestones[currentIndex];

  // Image Transition
  if (revealImage) {
    revealImage.style.opacity = "0";
    setTimeout(() => {
      attachSafeImageFallback(revealImage, current.rawName);
      revealImage.src = current.image;
      revealImage.alt = current.name;
      revealImage.style.opacity = "1";
    }, 180);
  }

  // Dossier Text Update
  if (imageCaption) imageCaption.textContent = current.caption;
  if (dossierEraTag) dossierEraTag.textContent = current.relation;
  if (dossierYears) dossierYears.textContent = current.year;
  if (dossierTitle) dossierTitle.textContent = current.name;
  if (dossierTagline) dossierTagline.textContent = current.oneLiner;
  if (dossierNarrative) dossierNarrative.innerHTML = current.details;
  if (eraIndicator) {
    eraIndicator.textContent = `Era ${String(currentIndex + 1).padStart(2, "0")} / ${String(
      timelineMilestones.length
    ).padStart(2, "0")}`;
  }

  // Gallery Artifacts Deck
  if (artifactDeck) {
    artifactDeck.innerHTML = "";
    current.gallery.forEach((imgPath, gIdx) => {
      const chip = document.createElement("div");
      chip.className = "artifact-chip";
      chip.innerHTML = `<img src="${imgPath}" alt="Artifact" />`;
      
      const chipImg = chip.querySelector("img");
      const fallbackName = gIdx === 0 ? current.rawName : RAW_IMAGE_NAMES.draftingCommittee;
      attachSafeImageFallback(chipImg, fallbackName);

      chip.addEventListener("click", () => {
        revealImage.src = imgPath;
      });
      artifactDeck.appendChild(chip);
    });
  }
}

// Navigation Controls
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) selectEra(currentIndex - 1);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentIndex < timelineMilestones.length - 1) selectEra(currentIndex + 1);
  });
}

// Keyboard Navigation
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && currentIndex > 0) selectEra(currentIndex - 1);
  if (e.key === "ArrowRight" && currentIndex < timelineMilestones.length - 1) selectEra(currentIndex + 1);
});

// Drag to Scroll Track
let isDown = false;
let startX, scrollLeft;
if (timelineViewport) {
  timelineViewport.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - timelineViewport.offsetLeft;
    scrollLeft = timelineViewport.scrollLeft;
  });
  timelineViewport.addEventListener("mouseleave", () => (isDown = false));
  timelineViewport.addEventListener("mouseup", () => (isDown = false));
  timelineViewport.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timelineViewport.offsetLeft;
    timelineViewport.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  selectEra(0);
});