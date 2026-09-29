const constitutionalArticles = [
  {
    category: "Fundamental Rights (Part III)",
    article: "Article 14",
    title: "Article 14 — Equality Before the Law",
    legalText: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    commentary: "Dr. Ambedkar framed this article to eradicate feudal privileges and royal immunities. He emphasized that 'equal protection of the laws' necessitates affirmative equalizing measures for unequal communities, preventing legal formal equality from masking substantive injustice."
  },
  {
    category: "Fundamental Rights (Part III)",
    article: "Article 15",
    title: "Article 15 — Prohibition of Discrimination",
    legalText: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. Nothing in this article shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes.",
    commentary: "Dr. Ambedkar personally championed Clause (4) through the First Constitutional Amendment (1951) to safeguard educational and governmental reservations following the Champakam Dorairajan judgment."
  },
  {
    category: "Fundamental Rights (Part III)",
    article: "Article 17",
    title: "Article 17 — Abolition of Untouchability",
    legalText: "'Untouchability' is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of 'Untouchability' shall be an offence punishable in accordance with law.",
    commentary: "A crowning milestone of his life's struggle. Dr. Ambedkar ensured that untouchability was not merely discouraged, but constitutionally criminalized without exception, laying the basis for the Protection of Civil Rights Act."
  },
  {
    category: "Fundamental Rights (Part III)",
    article: "Article 19",
    title: "Article 19 — Protection of Fundamental Freedoms",
    legalText: "All citizens shall have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions; to move freely and to practice any profession, trade or business.",
    commentary: "Dr. Ambedkar maintained that civil liberties must belong to every citizen equally. In assembly debates, he vigorously defended the worker's right to form trade unions and assemble peacefully as pillars of constitutional democracy."
  },
  {
    category: "Fundamental Rights (Part III)",
    article: "Article 21",
    title: "Article 21 — Protection of Life & Personal Liberty",
    legalText: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    commentary: "In the drafting committee, Dr. Ambedkar initially supported the American 'due process of law' clause, ensuring that executive autocracy could never unlawfully strip a citizen of personal liberty without judicial review."
  },
  {
    category: "Fundamental Rights (Part III)",
    article: "Article 25",
    title: "Article 25 — Freedom of Conscience & Religion",
    legalText: "All persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion, subject to public order, morality and health.",
    commentary: "Dr. Ambedkar explicitly subordinated religious practice to 'morality, health, and fundamental rights', ensuring religious traditions could never override social reform or justify exclusion from public spaces."
  },
  {
    category: "Heart & Soul of Constitution",
    article: "Article 32",
    title: "Article 32 — Right to Constitutional Remedies",
    legalText: "The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed. The Supreme Court shall have power to issue directions or orders or writs.",
    commentary: "Dr. Ambedkar famously proclaimed to the Constituent Assembly: 'If I was asked to name any particular article in this Constitution as the most important—an article without which this Constitution would be a nullity—I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it.'"
  },
  {
    category: "Directive Principles (Part IV)",
    article: "Article 39A",
    title: "Article 39A — Equal Justice & Free Legal Aid",
    legalText: "The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall provide free legal aid to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.",
    commentary: "Reflecting Dr. Ambedkar's career as a Bombay High Court advocate defending impoverished clients, this principle establishes that legal representation is an indispensable state obligation."
  },
  {
    category: "Directive Principles (Part IV)",
    article: "Article 46",
    title: "Article 46 — Promotion of Educational & Economic Interests",
    legalText: "The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation.",
    commentary: "Dr. Ambedkar embedded this directive to guarantee that national budgets, development policies, and university expansions systematically prioritize marginalized social classes."
  },
  {
    category: "Landmark Legislative Reforms",
    article: "Hindu Code Bill",
    title: "The Hindu Code Bill (1948–1951)",
    legalText: "Comprehensive codification establishing equal inheritance rights for daughters, legal monogamy, rights to divorce, and civil guardianship of children.",
    commentary: "Dr. Ambedkar regarded this bill as his greatest contribution to modern Indian law. When orthodox opposition stalled the bill in Parliament, he chose to resign his Cabinet seat as Law Minister in protest, affirming that democracy cannot coexist with the suppression of women."
  }
];

const articlesNav = document.getElementById("articlesNav");
const viewCategory = document.getElementById("viewCategory");
const viewTitle = document.getElementById("viewTitle");
const viewLegalText = document.getElementById("viewLegalText");
const viewCommentary = document.getElementById("viewCommentary");
let selectedAudience = "all";
const audienceArticles = {
  women: ["Article 14", "Article 15", "Article 21", "Hindu Code Bill"],
  employees: ["Article 14", "Article 19", "Article 21", "Article 39A"],
  children: ["Article 14", "Article 21", "Article 39A", "Article 46"],
  marginalized: ["Article 14", "Article 15", "Article 17", "Article 46", "Article 32"]
};

function fitsAudience(article) {
  if (selectedAudience === "all") return true;
  if (audienceArticles[selectedAudience].includes(article.article)) return true;
  const searchable = `${article.title} ${article.category} ${article.commentary}`.toLowerCase();
  const audienceTerms = {
    women: ["women", "inheritance", "marriage", "guardianship", "sex"],
    employees: ["worker", "trade union", "profession", "economic", "labour"],
    children: ["education", "child", "life", "free legal aid"],
    marginalized: ["caste", "weaker", "scheduled", "untouchability", "backward"]
  };
  return audienceTerms[selectedAudience].some(term => searchable.includes(term));
}

function initConstitution() {
  renderAudienceArticles();
  document.querySelectorAll(".audience-chip").forEach(button => button.addEventListener("click", () => {
    selectedAudience = button.dataset.audience;
    document.querySelectorAll(".audience-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderAudienceArticles();
  }));
}

function renderAudienceArticles() {
  articlesNav.innerHTML = "";
  const visibleArticles = constitutionalArticles.filter(fitsAudience);
  visibleArticles.forEach((art, index) => {
    const item = document.createElement("div");
    item.className = `article-nav-item ${index === 0 ? "active" : ""}`;
    item.innerHTML = `
      <div class="nav-art-num">${art.article}</div>
      <div class="nav-art-title">${art.title.split("—")[1] || art.title}</div>
    `;
    item.addEventListener("click", () => {
      document.querySelectorAll(".article-nav-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      renderArticleDetail(art);
    });
    articlesNav.appendChild(item);
  });

  renderArticleDetail(visibleArticles[0] || constitutionalArticles[0]);
}

function renderArticleDetail(art) {
  viewCategory.innerText = art.category;
  viewTitle.innerText = art.title;
  viewLegalText.innerText = art.legalText;
  viewCommentary.innerText = art.commentary;
}

document.addEventListener("DOMContentLoaded", initConstitution);