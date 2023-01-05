const myLibrary = [];

const bookcase = document.querySelector('.bookcase');
const addBookButton = document.getElementById('newBook');

addBookButton.addEventListener('click', () => createBookForm());

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book.prototype.info = function () {
//   const infoString = `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//   return infoString;
// };

function addBookToLibrary(title, author, pages, read) {
  const myBook = new Book(title, author, pages, read);
  myLibrary.push(myBook);
}


addBookToLibrary("moses", "King David", 888, true);
addBookToLibrary("Starships and their inventors", "jodissius", 1829, true);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function displayBook(obj) {
  removeAllChildNodes(bookcase);
  for (const book of obj) {
    const disp = document.createElement('div');
    disp.classList.add('book');
    for (let key in book) {
      const page = document.createElement('div');
      const item1 = document.createElement('p');
      item1.style.gridTemplateAreas = 'title';
      const item2 = document.createElement('p')
      item2.style.gridTemplateAreas = 'data';
      item1.textContent = `${key}: `;
      item2.textContent = `${book[key]}`;
      page.append(item1, item2)
      page.classList.add('divider')
      disp.appendChild(page);
      }
    bookcase.appendChild(disp);
    }
  }

  function createBookForm() {
    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "example.com/path");
    
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title:';
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('name', 'title');
    
    const authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author');
    authorLabel.textContent = 'Author:';
    const author = document.createElement('input');
    author.setAttribute('type', 'text');
    author.setAttribute('id', 'author');
    author.setAttribute('name', 'author');
    
    const pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.textContent = 'Pages:';
    const pages = document.createElement('input');
    pages.setAttribute('type', 'number');
    pages.setAttribute('id', 'pages');
    pages.setAttribute('name', 'pages');
    
    const noReadLabel = document.createElement('label');
    noReadLabel.setAttribute('for', 'noRead');
    noReadLabel.textContent = "Didn't Read";
    const noRead = document.createElement('input');
    noRead.setAttribute('type', 'radio');
    noRead.setAttribute('id', 'noRead');
    noRead.setAttribute('name', 'read');
    noRead.setAttribute('value', 'false');
    
    const readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'read');
    readLabel.textContent = "Read";
    const read = document.createElement('input');
    read.setAttribute('type', 'radio');
    read.setAttribute('id', 'read');
    read.setAttribute('name', 'read');
    read.setAttribute('value', 'true');
    
    const formButton = document.createElement('button');
    formButton.textContent = 'Submit';
    
    form.append(titleLabel, title, authorLabel, author, pagesLabel, pages, noReadLabel, noRead,
    readLabel, read, formButton);
    bookcase.appendChild(form);
  }

displayBook(myLibrary);


