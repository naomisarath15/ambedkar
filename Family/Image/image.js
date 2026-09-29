// Exact filenames matching the photos alongside this file
const familyData = [
 {
    image: "father.jpg",
    relation: "FATHER & EARLY MENTOR",
    name: "Subedar Major Ramji Maloji Sakpal",
    lifespan: "1838 — 1913",
    oneLiner: "A British Indian Army Subedar of the Mahar Regiment, Ramji instilled strict discipline, love for books, and Kabir's egalitarian spiritual verses in young Bhimrao.",
    details: "Ramji borrowed money and pawned possessions to purchase school books for young Bhimrao in Bombay, continually encouraging him to attain the highest academic honors despite severe social barriers."
  },
  {
    image: "FAM (1).jpeg",
    relation: "FIRST WIFE & PILLAR OF SACRIFICE",
    name: "Matoshree Ramabai Ambedkar",
    lifespan: "1898 — 1935",
    oneLiner: "Ramabai endured extreme penury, personal loss, and prolonged separation in silence, enabling Babasaheb to complete his higher studies abroad.",
    details: "Affectionately called 'Ramai', Babasaheb dedicated his monumental book <em>Thoughts on Pakistan</em> to her, revering her goodness of heart, nobility of mind, and silent suffering during his early struggles."
  },
  {
    image: "FAM 2.jpg",
    relation: "SECOND WIFE, DOCTOR & COMPANION",
    name: "Dr. Savita Ambedkar (Mai)",
    lifespan: "1909 — 2003",
    oneLiner: "A medical doctor by profession, Dr. Savita dedicated her life to nursing Babasaheb through failing health during the drafting of the Indian Constitution.",
    details: "Revered as 'Mai', she embraced Buddhism alongside Babasaheb at Nagpur in 1956 and guarded his archival manuscripts, correspondence, and personal library for decades after his Mahaparinirvana."
  },
  {
    image: "FAM 3.jpeg",
    relation: "Family",
    name: "His Family & Household Companions",
    lifespan: "1912 — 1977",
    oneLiner: "This historic photograph shows Dr. B.R. Ambedkar with his family members and their pet at the Rajgraha residence in Bombay in February 1934.",
    details: "Yashwant: Dr. Ambedkar's son is seated on the far left.Dr. B.R. Ambedkar: Seated second from the left in a formal suit.Ramabai Ambedkar: Dr. Ambedkar's wife is seated in the center.Laxmibai: Wife of Dr. Ambedkar's elder brother Balaram, standing/seated next with a child.Mukundrao: His nephew is positioned toward the right side.Tobby: Their pet fox terrier is sitting in the foreground"
  },
  {
    image: "SON.jpg",
    relation: "SON & SOCIAL LEADER",
    name: "Yashwantrao Ambedkar (Bhaiyasaheb)",
    lifespan: "1912 — 1977",
    oneLiner: "The only surviving son of Babasaheb and Ramabai, Bhaiyasaheb served as President of the Buddhist Society of India and editor of the weekly Janata.",
    details: "He actively continued Babasaheb's educational and religious renaissance, leading mass conversion conventions and managing the Deekshabhoomi trust in Nagpur."
  },
  {
    image: "FAM 4.jpeg",
    relation: "FAMILY SANCTUARY & RESIDENCE",
    name: "The Sanctuary at Rajgruha",
    lifespan: "Dadar, Bombay",
    oneLiner: "Rajgruha was built as a family sanctuary custom-designed to house Babasaheb's monumental collection of over 50,000 books.",
    details: "In this historic home, Ramabai, his son Yashwant, and Babasaheb's beloved pets shared moments of quiet family warmth away from the storms of public life and political agitations."
  },
  {
    image: "FAM.jpeg",
    relation: "FAMILY PORTRAIT & KINSHIP",
    name: "Dr. Ambedkar with Family & Relatives",
    lifespan: "Historic Archival Record",
    oneLiner: "Rare archival portrait showing Dr. B. R. Ambedkar surrounded by his close family circle and household companions.",
    details: "Despite endless national battles for justice and the drafting of the Constitution, Babasaheb cherished his family circle, offering support and counsel to his household and community."
  }
];

let currentIndex = 0;

// DOM Elements
const familyPhoto = document.getElementById("familyPhoto");
const personRelation = document.getElementById("personRelation");
const personTitle = document.getElementById("personTitle");
const personLifespan = document.getElementById("personLifespan");
const personOneLiner = document.getElementById("personOneLiner");
const personDetails = document.getElementById("personDetails");
const slideCounter = document.getElementById("slideCounter");
const filmstripRow = document.getElementById("filmstripRow");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function initFamilyArchive() {
  buildThumbnails();
  renderSlide(0);

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % familyData.length;
      renderSlide(currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + familyData.length) % familyData.length;
      renderSlide(currentIndex);
    });
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
    if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
  });
}

function buildThumbnails() {
  if (!filmstripRow) return;
  filmstripRow.innerHTML = "";
  familyData.forEach((item, idx) => {
    const thumb = document.createElement("div");
    thumb.className = `thumb-item ${idx === 0 ? "active" : ""}`;
    thumb.id = `thumb-${idx}`;
    thumb.innerHTML = `<img src="${item.image}" alt="${item.name}" />`;
    thumb.addEventListener("click", () => {
      currentIndex = idx;
      renderSlide(idx);
    });
    filmstripRow.appendChild(thumb);
  });
}

function renderSlide(index) {
  const item = familyData[index];

  // Fade out
  if (familyPhoto) familyPhoto.style.opacity = 0;
  if (personTitle) personTitle.style.opacity = 0;
  if (personOneLiner) personOneLiner.style.opacity = 0;
  if (personDetails) personDetails.style.opacity = 0;

  setTimeout(() => {
    if (familyPhoto) familyPhoto.src = item.image;
    if (personRelation) personRelation.innerText = item.relation;
    if (personTitle) personTitle.innerText = item.name;
    if (personLifespan) personLifespan.innerText = item.lifespan;
    if (personOneLiner) personOneLiner.innerText = `"${item.oneLiner}"`;
    if (personDetails) personDetails.innerHTML = item.details;
    if (slideCounter) slideCounter.innerText = `Record ${index + 1} / ${familyData.length}`;

    // Update active thumbnail
    document.querySelectorAll(".thumb-item").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
      if (i === index) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Fade back in
    if (familyPhoto) familyPhoto.style.opacity = 1;
    if (personTitle) personTitle.style.opacity = 1;
    if (personOneLiner) personOneLiner.style.opacity = 1;
    if (personDetails) personDetails.style.opacity = 1;
  }, 180);
}

document.addEventListener("DOMContentLoaded", initFamilyArchive);