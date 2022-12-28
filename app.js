const myLibrary = [];

const bookcase = document.querySelector('.bookcase');

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

// const myFavBook = {
//   title: "The Setup",
//   author: "Dan Bilzerian",
//   pages: 500,
//   read: true,
// }
// myLibrary.push(myFavBook);
addBookToLibrary("moses", "King David", 888, true);
addBookToLibrary("Starships and their inventors", "jodissius", 1829, true);

function displayBook(obj) {
  for (const book of obj) {
    const disp = document.createElement('div');
    disp.classList.add('book');
    for (let key in book) {
      const item = document.createElement('p');
      item.textContent = `${key}: ${book[key]}`;
      disp.appendChild(item);
      }
    bookcase.appendChild(disp);
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
// displayObjectContents(myLibrary);

