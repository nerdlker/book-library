const addButton = document.querySelector(".book-add-button");
const newBook = document.querySelector(".new-book");
const modalDisplay = document.querySelector(".modal");
const shelf = document.querySelector(".book-list");

library = [
  {
    title: "Secret Seve",
    author: "Enid Blyton",
    pages: 384,
    isRead: true,
  },
];
// Book Constructor
class Book {
  constructor(title, author, pages, isRead = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

//Takes User Input and Adds Book to Library
function addBookToLibrary() {
  var bookTitle = document.querySelector("#book-name").value;
  var bookAuthor = document.querySelector("#book-author").value;
  var bookPages = document.querySelector("#book-pages").value;
  var book = new Book(bookTitle, bookAuthor, bookPages, (isRead = true));

  library.push(book);
  document.querySelector(".my-form").reset();
  modalDisplay.style.display = "none";
  renderLibrary();
}

addButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  addBookToLibrary();
});

newBook.addEventListener("click", () => {
  modalDisplay.style.display = "block";
});

function renderLibrary() {
  shelf.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    let newbook = document.createElement("div");
    newbook.classList.add("book-card");
    newbook.innerHTML = `
    <div class="book-title">${library[i].title}</div>
    <div class="book-by">By</div>
    <div class="book-author">${library[i].author}</div>
    <div class="book-pages">${library[i].pages}</div>
    <div class="toggle-switch">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>`;
    shelf.appendChild(newbook);
  }
}

renderLibrary();
