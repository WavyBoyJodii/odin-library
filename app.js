const myLibrary = [];

const bookcase = document.querySelector('.bookcase');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    const infoString = `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    return infoString;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const myBook = Object.create(Book);
  myBook.title = title;
  myBook.author = author;
  myBook.pages = pages;
  myBook.read = read;
  myLibrary.push(myBook);
}

const myFavBook = {
  title: "The Setup",
  author: "Dan Bilzerian",
  pages: 500,
  read: true,
}
myLibrary.push(myFavBook);
// addBookToLibrary("moses", "King David", 888, true);
// addBookToLibrary("Starships and their inventors", "jodissius", 1829, true);

function displayBook(obj) {
  for (let i = 0; i < obj.length; i++) {
    const book = document.createElement('div');
    book.classList.add('book');
    for (let key in obj[i]) {
    const item = document.createElement('p');
    item.textContent = obj[i][key];
    book.appendChild(item);
    }  
    bookcase.appendChild(book);
  }
}


function addBookContents(obj) {
  for (let key in obj) {
    const item = document.createElement('p');
    item.textContent = key;
    book.appendChild(item);
    // console.log(key);
    }  
}

function displayObjectContents(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

// for (let key in obj) {
//     const item = document.createElement('p');
//     item.textContent = obj[key];
//     book.appendChild(item);
//   }  
displayBook(myLibrary);
displayObjectContents(myLibrary);

