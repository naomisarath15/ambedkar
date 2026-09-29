// Exact image names mapped to your Movement/Images folder
const movementData = [
  {
    image: "Images/mahad satyagraha 1927.jpeg",
    year: "1927 • WATER LIBERATION",
    title: "Mahad Satyagraha: Chavadar Tank",
    tagline: "The declaration of human rights and dignity over public drinking water.",
    script: "On 20 March 1927, Dr. Ambedkar led thousands of untouchable delegates to the Chavadar Tank in Mahad, asserting their fundamental right to draw drinking water from public resources.",
    impact: "Babasaheb proclaimed: 'We are not going to the tank merely to drink water. We are going to establish that we are human beings with natural rights.'"
  },
  {
    image: "Images/mahad satyagraha 1927 (1).jpeg",
    year: "1927 • HISTORIC ASSEMBLY",
    title: "Mahad Assembly Delegates",
    tagline: "Gathering of delegates and peasant activists in Kolaba district.",
    script: "Over 10,000 delegates gathered across Western India. When orthodox priests spread rumors and incited riots following the march, Dr. Ambedkar strictly preserved non-violent discipline.",
    impact: "The Bombay High Court later upheld the civil right of depressed classes to use Chavadar Tank in a historic judgment in 1937."
  },
  {
    image: "Images/mahad satyagraha 1927 (2).jpeg",
    year: "1927 • SYMBOLIC REVOLT",
    title: "Burning of Manusmriti at Mahad",
    tagline: "Consigning the ancient code of social hierarchy and gender inequality to the flames.",
    script: "On 25 December 1927, during the second Mahad conference, Dr. Ambedkar and his associates publicly burned the Manusmriti on a specially prepared pyre as an open protest against caste oppression.",
    impact: "This landmark date is observed annually as 'Manusmriti Dahan Din', symbolizing emancipation from institutionalized caste servitude."
  },
  {
    image: "Images/mahad satyagraha 1927 (3).jpg",
    year: "1927 • SOCIAL MOBILIZATION",
    title: "Mahad Conference Resolution",
    tagline: "Unifying workers, women, and marginalized communities.",
    script: "At the Mahad conference, Dr. Ambedkar insisted on equal civil participation for women, advising them to break with superstitious caste customs and demand education.",
    impact: "This movement marked the definitive shift from passive petitioning to active constitutional and civil agitation."
  },
  {
    image: "Images/Samaj Samata Sangh movement 1927 ().jpg",
    year: "1927 • RADICAL EQUALITY",
    title: "Samaj Samata Sangh Foundation",
    tagline: "Organization dedicated to annihilating caste barriers through inter-dining and inter-marriage.",
    script: "Founded by Dr. Ambedkar on 4 September 1927, the Samaj Samata Sangh promoted genuine social fraternity, rejecting the idea of hereditary rank.",
    impact: "The Sangh organized communal meals and publicized inter-caste marriages as the true psychological cure for caste prejudice."
  },
  {
    image: "Images/Mahar Vatan Movement 1928.jpg",
    year: "1928 • ANTI-SERFDOM",
    title: "Abolition of Mahar Vatan",
    tagline: "Freeing rural laborers from hereditary feudal servitude.",
    script: "Dr. Ambedkar introduced a bill in the Bombay Legislative Council in 1928 to dismantle the centuries-old Mahar Vatan system, which bound village communities to unpaid menial servitude.",
    impact: "He demanded fixed wages, dignified working hours, and fair tenancy contracts, releasing thousands of rural families from generational debt bondage."
  },
  {
    image: "Images/Anti-Khoti Movement1929–1942.jpeg",
    year: "1929–1942 • PEASANT AWAKENING",
    title: "Anti-Khoti Peasant Agitation",
    tagline: "Direct action against oppressive revenue collectors and landlords in the Konkan.",
    script: "The Khoti system in Maharashtra allowed landlords to extort crop yields and evict tenants at will. Dr. Ambedkar organized tenant farmers to withhold excessive grain levies.",
    impact: "In 1937, he introduced a legislative bill in the Bombay Assembly that eventually led to the abolition of the Khoti tenure in 1949."
  },
  {
    image: "Images/Anti-Khoti Movement1929–1942 2.jpeg",
    year: "1938 • FARMER-WORKER MARCH",
    title: "The Great Bombay Peasant March",
    tagline: "25,000 peasants and industrial workers marching to the Bombay Council Hall.",
    script: "On 10 January 1938, Dr. Ambedkar led a mass rally of 25,000 farmers and mill workers to the Council Hall in Bombay, demanding immediate agrarian relief and debt cancellation.",
    impact: "This remains one of the largest united peasant-worker mobilizations against landlord exploitation in Indian colonial history."
  },
  {
    image: "Images/Kalaram Temple Entry Satyagraha.jpeg",
    year: "1930–1935 • MORAL STRUGGLE",
    title: "Kalaram Temple Satyagraha, Nashik",
    tagline: "Five-year non-violent struggle to assert spiritual equality.",
    script: "Launched on 2 March 1930 with 15,000 volunteers, the satyagraha sought unconditional entry to the sacred Kalaram temple in Nashik.",
    impact: "Babasaheb noted: 'We don't want God in this temple; we want to test whether this society considers us human beings.' The struggle convinced him that internal reform was impossible, leading to his 1935 Yeola declaration."
  },
  {
    image: "Images/Round Table Conference representation 1.jpeg",
    year: "1930–1932 • GLOBAL DIPLOMACY",
    title: "First Round Table Conference, London",
    tagline: "Securing statutory minority protections on the international stage.",
    script: "Appearing before British leaders and Indian princely delegates in London, Dr. Ambedkar articulated the demands of 60 million Depressed Classes for universal franchise and political representation.",
    impact: "He placed the civil and constitutional rights of India's untouchables at the center of the negotiations for Indian self-government."
  },
  {
    image: "Images/Round Table Conference representation.jpeg",
    year: "1931 • CONSTITUTIONAL DEBATES",
    title: "Second Round Table Conference",
    tagline: "Ideological clash over separate electorates and minority safeguards.",
    script: "In London, Dr. Ambedkar stood firm against orthodox objections, arguing that political representation was an indispensable shield for marginalized communities without economic power.",
    impact: "His advocacy led to the British Government granting the Communal Award in August 1932, guaranteeing representation for the Depressed Classes."
  },
  {
    image: "Images/Poona Pact movement.jpeg",
    year: "1932 • HISTORIC COMPROMISE",
    title: "The Poona Pact, Yerwada Prison",
    tagline: "Negotiating reserved legislative seats to safeguard the community.",
    script: "Signed on 24 September 1932 at Yerwada Central Jail in Pune between Dr. Ambedkar and caste Hindu leaders following Mahatma Gandhi's fast unto death.",
    impact: "The pact traded separate electorates for joint electorates with reserved seats, increasing legislative representation for the Depressed Classes from 71 to 148 seats in provincial councils."
  },
  {
    image: "Images/independent labour party 1936.jpg",
    year: "1936 • WORKING CLASS DEMOCRACY",
    title: "Independent Labour Party (ILP)",
    tagline: "Uniting agricultural tenants, factory workers, and Dalits under a socialist platform.",
    script: "Founded by Dr. Ambedkar in August 1936, the ILP fought elections on a comprehensive working-class program against landlordism and unbridled capitalism.",
    impact: "The party won 14 of 17 contested seats in the 1937 Bombay Legislative Assembly elections, becoming the primary opposition to the ruling government."
  },
  {
    image: "Images/\"Dr. B. R. Ambedkar with Women Activists — 1942.jpeg\"",
    year: "1942 • GENDER EMANCIPATION",
    title: "All-India Depressed Classes Women's Conference",
    tagline: "Empowering women as equal leaders in the social movement.",
    script: "On 20 July 1942 in Nagpur, over 25,000 women assembled under Dr. Ambedkar's guidance, passing resolutions on education, labor rights, and hygiene.",
    impact: "Dr. Ambedkar stated: 'I measure the progress of a community by the degree of progress which women have achieved.' This paved the way for his work on the Hindu Code Bill."
  }
];

let currentIndex = 0;

// DOM Elements
const movementPhoto = document.getElementById("movementPhoto");
const movementYear = document.getElementById("movementYear");
const movementTitle = document.getElementById("movementTitle");
const movementTagline = document.getElementById("movementTagline");
const movementScript = document.getElementById("movementScript");
const movementImpact = document.getElementById("movementImpact");
const slideCounter = document.getElementById("slideCounter");
const filmstripRow = document.getElementById("filmstripRow");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function initMovementArchive() {
  buildThumbnails();
  renderSlide(0);

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % movementData.length;
    renderSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + movementData.length) % movementData.length;
    renderSlide(currentIndex);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  });
}

function buildThumbnails() {
  filmstripRow.innerHTML = "";
  movementData.forEach((item, idx) => {
    const thumb = document.createElement("div");
    thumb.className = `thumb-item ${idx === 0 ? "active" : ""}`;
    thumb.id = `thumb-${idx}`;
    thumb.innerHTML = `<img src="${item.image}" alt="${item.title}" />`;
    thumb.addEventListener("click", () => {
      currentIndex = idx;
      renderSlide(idx);
    });
    filmstripRow.appendChild(thumb);
  });
}

function renderSlide(index) {
  const item = movementData[index];

  // Fade out slightly
  movementPhoto.style.opacity = 0;
  movementTitle.style.opacity = 0;
  movementScript.style.opacity = 0;
  movementImpact.style.opacity = 0;

  setTimeout(() => {
    movementPhoto.src = item.image;
    movementYear.innerText = item.year;
    movementTitle.innerText = item.title;
    movementTagline.innerText = item.tagline;
    movementScript.innerText = `"${item.script}"`;
    movementImpact.innerHTML = `<strong>Impact:</strong> ${item.impact}`;
    slideCounter.innerText = `Record ${index + 1} / ${movementData.length}`;

    // Update active thumbnail
    document.querySelectorAll(".thumb-item").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
      if (i === index) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Fade in
    movementPhoto.style.opacity = 1;
    movementTitle.style.opacity = 1;
    movementScript.style.opacity = 1;
    movementImpact.style.opacity = 1;
  }, 180);
}

document.addEventListener("DOMContentLoaded", initMovementArchive);