const addButton = document.querySelector(".book-add-button");
const newBook = document.querySelector(".new-book");
const modalDisplay = document.querySelector(".modal");

bookLibrary = [];

function Book(title, author, pages, isRead = true) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  var bookTitle = document.querySelector("#book-name").value;
  var bookAuthor = document.querySelector("#book-author").value;
  var bookPages = document.querySelector("#book-pages").value;
  var book = new Book(bookTitle, bookAuthor, bookPages, (isRead = true));

  bookLibrary.push(book);
  document.querySelector(".my-form").reset();
  modalDisplay.style.display = "none";
}

addButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  addBookToLibrary();
  console.table(bookLibrary[0]);
});

newBook.addEventListener("click", () => {
  modalDisplay.style.display = "block";
});
