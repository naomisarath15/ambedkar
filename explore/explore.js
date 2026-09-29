const articlesData = [
  // Mooknayak (1920)
  { id: 1, periodical: "Mooknayak", title: "Inaugural Manifesto: Awakening of the Voiceless", date: "31 January 1920", excerpt: "The first editorial comparing Hindu society to a multi-storeyed tower with no staircase or entrance.", body: "Hindu society is like a multi-storied tower with neither an entrance nor a staircase. Those born on a particular floor must die on that same floor. Without equal association and social mobility, no national unity can ever arise." },
  { id: 2, periodical: "Mooknayak", title: "The Curse of Social Boycott", date: "14 February 1920", excerpt: "Critique of ostracization and village caste sanctions against reformist untouchable families.", body: "Social boycott is the weapon through which orthodox majorities enforce servitude. We must establish legal protections that treat economic and social boycotts as punishable criminal offences." },
  { id: 3, periodical: "Mooknayak", title: "Education as the Gateway to Emancipation", date: "28 February 1920", excerpt: "A call to working-class parents to prioritize schooling above physical labor.", body: "Knowledge is the foundation of self-respect. An uneducated community is condemned to lifelong subjugation; our youth must enter primary, secondary, and collegiate education at all costs." },
  { id: 4, periodical: "Mooknayak", title: "Swaraj and the Depressed Classes", date: "13 March 1920", excerpt: "Examining why home rule without civil rights risks replacing foreign bureaucracy with domestic autocracy.", body: "If Swaraj merely transfers authority from British governors to orthodox feudal landlords, it is not freedom for the masses. True self-rule must establish equal citizenship before the law." },
  { id: 5, periodical: "Mooknayak", title: "The Problem of Communal Representation", date: "27 March 1920", excerpt: "Defense of separate electorates for minority communities denied equal voting power.", body: "Where societal hierarchy prevents free voting without retribution, political safeguards and reserved representation are indispensable guarantees of democracy." },
  { id: 6, periodical: "Mooknayak", title: "Labor, Wages, and Factory Reforms", date: "10 April 1920", excerpt: "Writings on the conditions of mill workers in Bombay and industrial rights.", body: "Capitalism without social conscience exploits the unorganized laborer. Working men must unite across caste lines to demand fixed hours, fair wages, and hygienic housing." },
  { id: 7, periodical: "Mooknayak", title: "Critique of Religious Dogma", date: "24 April 1920", excerpt: "Distinguishing between universal moral religion and statutory ritualism.", body: "A religion that preaches inequality, hatred, and social division does not deserve the name of religion. True religion must be founded on ethics and fraternity." },
  { id: 8, periodical: "Mooknayak", title: "A Call to the Princes of Baroda and Kolhapur", date: "8 May 1920", excerpt: "Acknowledging the progressive educational edicts issued by Chhatrapati Shahu Maharaj.", body: "The pioneering affirmative measures instituted by Chhatrapati Shahu Maharaj of Kolhapur demonstrate that state patronage can successfully dismantle barriers of birth." },
  
  // Bahishkrit Bharat (1927–1929)
  { id: 9, periodical: "Bahishkrit Bharat", title: "The Historic Declaration of Mahad", date: "3 April 1927", excerpt: "The manifesto justifying why drinking water at Chavadar Tank is an assertion of human rights.", body: "We did not go to Mahad to merely drink water; water from Chavadar Tank will not make us immortal. We went to assert our fundamental human equality and prove that we are human beings." },
  { id: 10, periodical: "Bahishkrit Bharat", title: "Why the Manusmriti Was Burned", date: "3 February 1928", excerpt: "Philosophical justification for the public burning of orthodox legal codes on 25 December 1927.", body: "The Manusmriti was consigned to flames not out of blind anger, but because it codified institutionalized inequality, denied education to Shudras, and deprived women of freedom." },
  { id: 11, periodical: "Bahishkrit Bharat", title: "The Temple Entry Movement at Parvati", date: "18 October 1929", excerpt: "Editorials documenting the non-violent struggle to enter orthodox shrines in Pune.", body: "Temple entry is not about idol worship; it is an ideological battleground to test whether the Hindu hierarchy recognizes the untouchable as an equal moral being." },
  { id: 12, periodical: "Bahishkrit Bharat", title: "Agrarian Serfdom and the Vatan System", date: "15 June 1928", excerpt: "Attack on hereditary feudal services that bound Mahars to village servitude.", body: "The Mahar Vatan is nothing short of state-sanctioned serfdom. It binds an entire community to round-the-clock menial chores for meager grain scraps; it must be abolished." },
  { id: 13, periodical: "Bahishkrit Bharat", title: "The Press and Social Reform", date: "20 July 1928", excerpt: "Exposing the bias of mainstream nationalist dailies toward caste atrocities.", body: "The mainstream press sheds tears for political liberty under colonial rule, but remains deliberately silent when Dalits are beaten for drawing water from village wells." },
  { id: 14, periodical: "Bahishkrit Bharat", title: "Simon Commission Submissions", date: "24 August 1928", excerpt: "Notes on constitutional memoranda presented on behalf of the Bahishkrit Hitakarini Sabha.", body: "We have submitted our constitutional blueprint demanding universal adult franchise, statutory representation in public services, and educational scholarships." },
  { id: 15, periodical: "Bahishkrit Bharat", title: "Women's Liberation and Maternity Rights", date: "14 December 1928", excerpt: "Address to women delegates at the Mahad conference advocating hygiene and education.", body: "You are the creators of our future generations. Educate yourselves, discard old superstitions, and instill in your children the spirit of unyielding self-respect." },
  { id: 16, periodical: "Bahishkrit Bharat", title: "The Failure of Paternalistic Philanthropy", date: "11 January 1929", excerpt: "Critique of upper-caste charities that offer pity rather than rights.", body: "We do not want patronizing charity or pity from upper-caste reformers. We demand rights as equal citizens of this nation." },

  // Samata (1928–1930)
  { id: 17, periodical: "Samata", title: "The Principles of Social Equality", date: "29 June 1928", excerpt: "The ideological mouthpiece of the Samata Sainik Dal (Soldiers for Equality).", body: "Equality is not an abstract concept; it must exist in daily dining, inter-marriage, economic opportunity, and civil rights across every village and town." },
  { id: 18, periodical: "Samata", title: "Organization of the Samata Sainik Dal", date: "13 July 1928", excerpt: "Guidelines on non-violent defense corps to protect peaceful gatherings.", body: "The Samata Sainik Dal is established not to attack anyone, but to maintain discipline, protect civil assemblies, and uphold peace against orthodox riots." },
  { id: 19, periodical: "Samata", title: "Inter-Caste Dining and Marriages", date: "24 August 1928", excerpt: "Proposing social intermingling as the only practical solvent of caste hierarchy.", body: "Caste cannot be cured by political treaties alone. The real remedy is inter-marriage and inter-dining; only blood fusion can destroy the consciousness of birth hierarchy." },
  { id: 20, periodical: "Samata", title: "Critique of Hereditary Occupations", date: "5 October 1928", excerpt: "Urging youth to abandon hereditary scavengery and menial trades.", body: "Do not cling to occupations of indignity because tradition tells you so. Move to cities, acquire mechanical and technical trades, and chart independent careers." },
  { id: 21, periodical: "Samata", title: "Kalaram Temple Satyagraha Manifesto", date: "2 March 1930", excerpt: "Strategic document preceding the historic 5-year peaceful protest at Nashik.", body: "At Kalaram, we are testing whether the principles of humanity are accepted by Indian society. If we are barred from God's house, the house itself is morally hollow." },

  // Janata (1930–1956)
  { id: 22, periodical: "Janata", title: "The London Round Table Reflections", date: "21 November 1930", excerpt: "Dispatches from London fighting for statutory minority status.", body: "At the Round Table Conference, I made it clear that the Depressed Classes will no longer be treated as political orphans. We demand our share in governance." },
  { id: 23, periodical: "Janata", title: "The Poona Pact and Its Bitter Aftermath", date: "30 September 1932", excerpt: "In-depth editorial assessing the compromise reached at Yerwada Central Jail.", body: "Under the threat to Gandhi's life, we accepted joint electorates with reserved seats in place of separate electorates. Time will prove the difficulties of this compromise." },
  { id: 24, periodical: "Janata", title: "Yeola Declaration: I Will Not Die a Hindu", date: "19 October 1935", excerpt: "His historic proclamation to renounce Hinduism after lifelong efforts for reform failed.", body: "I was born in an untouchable Hindu family, which was beyond my control. But I solemnly promise you that I will not die a Hindu." },
  { id: 25, periodical: "Janata", title: "Formation of the Independent Labour Party", date: "15 August 1936", excerpt: "ILP manifesto uniting industrial workers, tenant farmers, and Dalits.", body: "The Independent Labour Party stands for the rights of all working people. We fight both the monopoly of capital and the monopoly of caste." },
  { id: 26, periodical: "Janata", title: "The 1937 Bombay Legislative Elections Triumph", date: "26 February 1937", excerpt: "Celebrating the victory of ILP candidates against orthodox opponents.", body: "Our landslide electoral triumph proves that when the working masses unite under a programmatic banner, feudal dominance can be dismantled at the ballot box." },
  { id: 27, periodical: "Janata", title: "Industrial Disputes Bill Opposition", date: "15 September 1938", excerpt: "Speech defending the workers' absolute right to strike as a civil liberty.", body: "To penalize the worker for striking while permitting the employer to lockout is a travesty of justice. The right to strike is a fundamental industrial right." },
  { id: 28, periodical: "Janata", title: "Khoti System Abolition Bill", date: "12 December 1938", excerpt: "Legislative effort to emancipate Konkan tenants from landlord extortion.", body: "The Khoti system in Konkan bleeds the peasant dry. The landlord produces nothing yet claims ownership of everything; landlordism must be abolished." },
  { id: 29, periodical: "Janata", title: "World War II and the Defense of Democracy", date: "10 September 1939", excerpt: "Critique of Nazism, Fascism, and democratic inconsistencies.", body: "Fascism abroad and casteism at home are branches of the same poisonous tree. True lovers of democracy must defeat totalitarianism everywhere." },
  { id: 30, periodical: "Janata", title: "Scheduled Castes Federation Launch", date: "18 July 1942", excerpt: "Establishing an all-India political instrument at the Nagpur Convention.", body: "The All India Scheduled Castes Federation is formed to demand complete civil, political, and educational independence for sixty million oppressed citizens." },
  { id: 31, periodical: "Janata", title: "8-Hour Workday Enactment", date: "27 November 1942", excerpt: "As Labor Member of the Viceroy's Executive Council, reducing shifts from 12 to 8 hours.", body: "Labor is not a machine. We have enacted the 8-hour working day, paid maternity leaves, and provident fund frameworks across all Indian factories." },
  { id: 32, periodical: "Janata", title: "Damodar Valley and Water Resources Planning", date: "14 January 1944", excerpt: "Laying the foundations of modern multi-purpose river valley projects in India.", body: "Harnessing our rivers through the Damodar and Hirakud projects is vital to eradicate droughts, generate electricity, and industrialize rural India." },
  { id: 33, periodical: "Janata", title: "Foundation of People's Education Society", date: "8 July 1945", excerpt: "Establishing Siddharth College in Bombay to democratize higher learning.", body: "Siddharth College is established to open higher academic portals for students of poor and working-class backgrounds who were shut out of elite colleges." },
  { id: 34, periodical: "Janata", title: "Cabinet Mission Negotiations", date: "12 April 1946", excerpt: "Exposing the betrayal of minority rights in British partition plans.", body: "The British Cabinet Mission has sacrificed the Scheduled Castes on the altar of a hurried settlement. We will fight for constitutional guarantees." },
  { id: 35, periodical: "Janata", title: "Chairman of the Drafting Committee Appointment", date: "30 August 1947", excerpt: "Accepting the responsibility of shaping the basic law of sovereign India.", body: "I have undertaken the task of drafting the Constitution of free India with solemn commitment to justice, liberty, equality, and fraternity for every citizen." },
  { id: 36, periodical: "Janata", title: "Introduction of Draft Constitution", date: "5 November 1948", excerpt: "Defending the constitutional framework against assembly criticisms.", body: "The Constitution provides a flexible federal structure capable of peace and emergency operation, rooted in Fundamental Rights and universal adult franchise." },
  { id: 37, periodical: "Janata", title: "The Hindu Code Bill Manifesto", date: "24 February 1949", excerpt: "Explaining why reforming Hindu family law is essential for women's equality.", body: "No society can progress while half its population remains legally suppressed. The Hindu Code Bill establishes women's right to property, divorce, and monogamy." },
  { id: 38, periodical: "Janata", title: "Final Constituent Assembly Address", date: "26 November 1949", excerpt: "The immortal warning against Bhakti in politics and economic inequality.", body: "On 26th January 1950, we enter a life of contradictions: political equality and social inequality. We must remove this contradiction or our democracy will be blown up." },
  { id: 39, periodical: "Janata", title: "Resignation from Nehru's Cabinet", date: "28 September 1951", excerpt: "Statement explaining his resignation over foreign policy and stalling of the Hindu Code Bill.", body: "I have resigned as Law Minister because the Cabinet abandoned the Hindu Code Bill. Without women's liberation, political independence is incomplete." },
  { id: 40, periodical: "Janata", title: "First General Elections of 1952", date: "15 January 1952", excerpt: "Addressing voters on the necessity of an independent opposition in Parliament.", body: "Democracy without a vigilant opposition deteriorates into dictatorship. Vote for principle and integrity, not personality cults." },
  { id: 41, periodical: "Janata", title: "Election to the Rajya Sabha", date: "18 March 1952", excerpt: "Continuing his parliamentary battle for backward classes commission and land reforms.", body: "From the floor of the Council of States, I will continue to defend the reservation policies, backward classes rights, and international neutrality." },
  { id: 42, periodical: "Janata", title: "Speech at Osmania University", date: "20 May 1953", excerpt: "Lecturing students on the role of universities in social transformation.", body: "Universities must not become factories of degrees. They must be sanctuaries of free inquiry, ethical character, and fearless defense of truth." },
  { id: 43, periodical: "Janata", title: "World Fellowship of Buddhists in Rangoon", date: "4 December 1954", excerpt: "Discourses on the moral superiority of the Buddha's Dhamma over materialistic totalitarianism.", body: "The Dhamma is not escapism. It is a social gospel of Karuna (compassion) and Prajna (wisdom) capable of saving humanity from ideological destruction." },

  // Prabuddha Bharat (1956)
  { id: 44, periodical: "Prabuddha Bharat", title: "First Issue: The Dawn of Enlightenment", date: "4 February 1956", excerpt: "Renaming Janata to Prabuddha Bharat ahead of the Buddhist conversion.", body: "Janata has accomplished its purpose of political agitation. Now begins Prabuddha Bharat—the mission to create an enlightened, moral, and rational society." },
  { id: 45, periodical: "Prabuddha Bharat", title: "Why Buddhism?", date: "24 March 1956", excerpt: "Evaluating Buddhism on the touchstone of science, morality, and social equality.", body: "Buddhism is the only religion founded on reason and morality. It rejects supernatural gods and castes, establishing fraternity as the supreme virtue." },
  { id: 46, periodical: "Prabuddha Bharat", title: "The Historic 22 Oaths of Nagpur", date: "15 October 1956", excerpt: "The complete pledge administered to 500,000 followers at Deekshabhoomi.", body: "I shall have no faith in Brahma, Vishnu, and Mahesh. I shall believe that all human beings are equal and strive for wisdom and compassion." },
  { id: 47, periodical: "Prabuddha Bharat", title: "The Meaning of Navayana", date: "28 October 1956", excerpt: "Explaining the modern, rational renaissance of Dhamma for contemporary society.", body: "Navayana is not a sect; it is the original radical Dhamma stripped of superstitious rituals, addressing the real-world suffering and dignity of humankind." },
  { id: 48, periodical: "Prabuddha Bharat", title: "Buddha or Karl Marx: Final Address in Kathmandu", date: "20 November 1956", excerpt: "Comparison between Marxist violence and Buddhist moral transformation.", body: "The goal of ending exploitation is shared. But Marx achieves it through the dictatorship of force, while the Buddha achieves it through democratic moral change." },

  // Independent Press Articles & International Columns
  { id: 49, periodical: "Press Articles", title: "The Times of India Interview on Caste Reforms", date: "12 May 1928", excerpt: "Debate with orthodox leaders on the legal rights of depressed classes.", body: "Custom cannot override human dignity. Where ancient scripture conflicts with human rights, the law of the land must enforce human rights." },
  { id: 50, periodical: "Press Articles", title: "The New York Times Column: Untouchability in Modern India", date: "16 November 1930", excerpt: "International dispatch explaining the struggle of 60 million Indians to Western audiences.", body: "Untouchability is a crime against humanity unparalleled in world history. India cannot seek world respect while segregating one-fifth of its population." },
  { id: 51, periodical: "Press Articles", title: "Manchester Guardian: The Depressed Classes Demand Justice", date: "22 October 1931", excerpt: "British press interview detailing the impasse with Mahatma Gandhi at the Round Table Conference.", body: "I am told that my demands divide the nation. I ask: How can you divide what was never united? First unite us in social dignity, then demand unity in politics." },
  { id: 52, periodical: "Press Articles", title: "The Statesman: Tribute to the Constitution", date: "27 January 1950", excerpt: "Reflections on the inaugural day of the Republic of India.", body: "The Constitution gives us the legal apparatus of freedom. Whether it works or fails depends on the moral caliber and democratic conscience of the people." }
];

const container = document.getElementById("articlesContainer");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const recordCount = document.getElementById("recordCount");

const articleModal = document.getElementById("articleModal");
const closeArticleModal = document.getElementById("closeArticleModal");
const modalPeriodical = document.getElementById("modalPeriodical");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");

let activeFilter = "all";

function renderArticles(list) {
  container.innerHTML = "";
  recordCount.innerText = `Showing ${list.length} Archival Records`;
  list.forEach(a => {
    const card = document.createElement("div");
    card.className = "article-card";
    card.innerHTML = `
      <div>
        <span class="pub-badge">${a.periodical}</span>
        <h3 class="article-title">${a.title}</h3>
        <div class="article-date">${a.date}</div>
        <p class="article-excerpt">${a.excerpt}</p>
      </div>
      <button class="read-btn" data-id="${a.id}">Read Full Document &rsaquo;</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".read-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      const doc = articlesData.find(d => d.id === id);
      if (doc) openDocModal(doc);
    });
  });
}

function openDocModal(doc) {
  modalPeriodical.innerText = doc.periodical;
  modalTitle.innerText = doc.title;
  modalMeta.innerText = `Published / Documented: ${doc.date} | Historic Periodical Archive`;
  modalBody.innerText = doc.body;
  articleModal.classList.add("active");
}

closeArticleModal.addEventListener("click", () => articleModal.classList.remove("active"));
articleModal.addEventListener("click", (e) => {
  if (e.target === articleModal) articleModal.classList.remove("active");
});

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const filtered = articlesData.filter(a => {
    const matchFilter = (activeFilter === "all" || a.periodical === activeFilter);
    const matchSearch = a.title.toLowerCase().includes(query) ||
                        a.excerpt.toLowerCase().includes(query) ||
                        a.body.toLowerCase().includes(query) ||
                        a.date.toLowerCase().includes(query);
    return matchFilter && matchSearch;
  });
  renderArticles(filtered);
}

searchInput.addEventListener("input", applyFilters);

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.getAttribute("data-periodical");
    applyFilters();
  });
});

document.addEventListener("DOMContentLoaded", () => renderArticles(articlesData));