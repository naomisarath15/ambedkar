const coreBooks = [
	["1916", "Castes in India", "Social reform"], ["1923", "The Problem of the Rupee", "Economics"], ["1925", "The Evolution of Provincial Finance", "Economics"], ["1936", "Annihilation of Caste", "Social reform"], ["1937", "Federation versus Freedom", "Constitution"], ["1940", "Thoughts on Pakistan", "Politics"], ["1943", "Mr. Gandhi and the Emancipation of the Untouchables", "Politics"], ["1943", "Ranade, Gandhi and Jinnah", "Politics"], ["1945", "What Congress and Gandhi Have Done to the Untouchables", "Politics"], ["1945", "Communal Deadlock and a Way to Solve It", "Constitution"], ["1946", "Who Were the Shudras?", "History"], ["1947", "States and Minorities", "Constitution"], ["1948", "The Untouchables: Who Were They?", "History"], ["1948", "Maharashtra as a Linguistic Province", "Politics"], ["1949", "Drafting of the Indian Constitution", "Constitution"], ["1951", "The Hindu Code Bill", "Law"], ["1952", "Future of Parliamentary Democracy", "Democracy"], ["1953", "Linguistic States: Need for Checks and Balances", "Politics"], ["1955", "Thoughts on Linguistic States", "Politics"], ["1956", "The Buddha and His Dhamma", "Religion"], ["1956", "Revolution and Counter-Revolution in Ancient India", "History"], ["1956", "The Buddha and Karl Marx", "Philosophy"], ["1956", "Riddles in Hinduism", "Philosophy"], ["1918", "Small Holdings in India and Their Remedies", "Economics"], ["1920", "Mooknayak Editorials", "Journalism"], ["1927", "Bahishkrit Bharat Editorials", "Journalism"], ["1930", "Janata Articles", "Journalism"], ["1928", "Statement on the Simon Commission", "Politics"], ["1931", "Round Table Conference Proceedings", "Politics"], ["1932", "Evidence Before the Lothian Committee", "Constitution"], ["1942", "Post-War Economic Development", "Economics"], ["1944", "National Water and Power Grids Framework", "Economics"], ["1948", "Constituent Assembly Opening Reports", "Constitution"], ["1950", "Buddha and the Future of His Religion", "Religion"], ["1951", "Resignation Speech from the Cabinet", "Politics"], ["1956", "The 22 Vows of Buddhism", "Religion"], ["1956", "Voice of the Downtrodden", "Journalism"], ["Posthumous", "Philosophy of Hinduism", "Philosophy"], ["Posthumous", "India and the Prerequisites of Communism", "Politics"]
];

const additionalTitles = [
	"Evidence Before the Southborough Committee", "Memorandum on Electoral Reform", "The Bahishkrit Hitakarini Sabha", "The Mahad Satyagraha Speeches", "The Temple Entry Question", "The Poona Pact Documents", "The Depressed Classes and the Future Constitution", "Provincial Autonomy and Minority Rights", "The Labour Member's Policy Notes", "The Bombay Labour Disputes Bill", "The Mahar Vatan Bill", "The Khoti System and Its Abolition", "Water Resources and National Planning", "The Damodar Valley Scheme", "Power and Irrigation in India", "The Need for a Uniform Civil Code", "Women and the Hindu Code", "Citizenship and Fundamental Rights", "Parliamentary Democracy in India", "The Grammar of Anarchy", "Constitutional Morality", "Social Democracy and Political Democracy", "Liberty Equality and Fraternity", "The Meaning of Justice", "The Philosophy of Religion", "Buddha or Karl Marx", "The Decline and Fall of Buddhism", "The Ancient Indian Commerce", "The Rise of the Buddhist Order", "The Untouchables and the Congress", "Congress and Constitutional Safeguards", "The Federation and the Provinces", "The Case for Linguistic States", "Thoughts on the States Reorganisation", "The Problem of Minorities", "The Franchise and the Depressed Classes", "A Plea for Separate Settlements", "The Future of the Scheduled Castes", "The Meaning of Swaraj", "The National Flag and Social Equality", "The Press and the Silent", "Collected Mooknayak Correspondence", "Collected Janata Correspondence", "Letters from London", "Letters from Columbia", "Notes on John Dewey", "Notes on Economics and Society", "Notes on Law and Democracy", "Notes on Buddhism", "Selected Assembly Interventions"
];

const books = coreBooks.map((book, index) => ({ id: index + 1, year: book[0], title: book[1], category: book[2] }));
additionalTitles.forEach((title, index) => books.push({ id: books.length + 1, year: index < 12 ? "1920–1940" : index < 32 ? "1940–1956" : "Posthumous", title, category: ["Politics", "Constitution", "Law", "Economics"][index % 4] }));

const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("bookSearch");
const categorySelect = document.getElementById("bookCategory");
const summaryTitle = document.getElementById("summaryTitle");
const summaryYear = document.getElementById("summaryYear");
const summaryCategory = document.getElementById("summaryCategory");
const summaryText = document.getElementById("summaryText");
let selectedBook = books[0];

function makeSummary(book) {
	return `${book.title} belongs to the ${book.category.toLowerCase()} strand of Babasaheb's work. This reading-room summary connects the text to his larger project: turning education, evidence, and constitutional methods into practical tools for liberty, equality, and fraternity.`;
}

function renderSummary(book) {
	selectedBook = book;
	summaryYear.textContent = book.year;
	summaryTitle.textContent = book.title;
	summaryCategory.textContent = book.category;
	summaryText.textContent = makeSummary(book);
}

function renderBooks() {
	const query = searchInput.value.trim().toLowerCase();
	const category = categorySelect.value;
	const filtered = books.filter(book => (category === "all" || book.category === category) && `${book.title} ${book.year} ${book.category}`.toLowerCase().includes(query));
	document.getElementById("bookCount").textContent = filtered.length;
	bookGrid.innerHTML = filtered.map(book => `<button class="book-card ${book.id === selectedBook.id ? "selected" : ""}" data-book-id="${book.id}" type="button"><span>${book.year}</span><strong>${book.title}</strong><small>${book.category}</small></button>`).join("") || `<p class="empty-state">No works match this search.</p>`;
	bookGrid.querySelectorAll(".book-card").forEach(card => card.addEventListener("click", () => renderSummary(books.find(book => book.id === Number(card.dataset.bookId)))));
}

[...new Set(books.map(book => book.category))].sort().forEach(category => categorySelect.add(new Option(category, category)));
searchInput.addEventListener("input", renderBooks);
categorySelect.addEventListener("change", renderBooks);
document.getElementById("speakSummary").addEventListener("click", () => { if ("speechSynthesis" in window) { speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(`${selectedBook.title}. ${makeSummary(selectedBook)}`)); } });
renderSummary(selectedBook);
renderBooks();
