const myLibrary = [];

const bookcase = document.querySelector('.bookcase');
const addBookButton = document.getElementById('newBook');

addBookButton.addEventListener('click', () => createBookForm());

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// Book.prototype.changeRead = function() {
//   let knowledge = this.read === true ? false : true;
//   this.read = knowledge;
//  };

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  changeRead() {
    let knowledge = this.read === true ? false : true;
    this.read = knowledge;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const myBook = new Book(title, author, pages, read);
  console.log(Object.getPrototypeOf(myBook));
  myLibrary.push(myBook);
}

addBookToLibrary("moses", "King David", 888, true);
addBookToLibrary("Starships and their inventors", "jodissius", 1829, true);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function removeBook(x) {
  let index = myLibrary.findIndex(books => books.title === x.title);
  console.log(x);
  console.log(index);
  myLibrary.splice(index, 1);
  displayBook(myLibrary);
}

function readUpdate(x) {
  let index = myLibrary.findIndex(books => books.title === x.title);
  console.log(index);
  myLibrary[index].changeRead();
  displayBook(myLibrary);
}  

function displayBook(obj) {
  removeAllChildNodes(bookcase);
  for (const book of obj) {
    const disp = document.createElement('div');
    const source = book;
    disp.classList.add('book');
    for (let key in book) {
      let isOwn = book.hasOwnProperty(key);
      if (isOwn) {
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
    }
    bookcase.appendChild(disp);
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'Delete';
    removeButton.addEventListener('click', () => removeBook(source), false);
    disp.appendChild(removeButton);

    const changeButton = document.createElement('button');
    changeButton.classList.add('changeButton');
    changeButton.textContent = 'Read Status';
    changeButton.addEventListener('click', () => readUpdate(source), false);
    disp.appendChild(changeButton);
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
  noRead.setAttribute('value', false);
    
  const readLabel = document.createElement('label');
  readLabel.setAttribute('for', 'read');
  readLabel.textContent = "Read";
  const read = document.createElement('input');
  read.setAttribute('type', 'radio');
  read.setAttribute('id', 'read');
  read.setAttribute('name', 'read');
  read.setAttribute('value', true);
    
  const formButton = document.createElement('button');
  formButton.textContent = 'Submit';
  formButton.addEventListener('click', submitToLibrary, false);
  const readValue = function displayRadioValue() {
    let ele = document.getElementsByName('read');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
        let answer = (ele[i].value === 'true');
        return answer
    }
  }
}
  
  function submitToLibrary(event) {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, readValue() );
    displayBook(myLibrary);
    }
    
  form.append(titleLabel, title, authorLabel, author, pagesLabel, pages, noReadLabel, noRead,
  readLabel, read, formButton);
  bookcase.appendChild(form);
}

displayBook(myLibrary);


