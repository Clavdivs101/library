
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const notRead = document.getElementById('notRead');

const bookForm = document.getElementById('addBookForm');
bookForm.style.visibility = "hidden";
const newBookBtn = document.getElementById('newBook');


// const bookTitle = document.getElementById('bookTitle');
// const bookAuthor = document.getElementById('bookAuthor');
// const bookCard = document.getElementById('bookCard');

const bookTable = document.getElementById('bookTable');

const addBtn = document.getElementById('addBook');
const removeBook = document.getElementById('removeBook');
const displayBtn = document.getElementById('displayBooks');

const removeBtn = document.createElement("input");
removeBtn.type = "button";
removeBtn.class = "removeBook";
removeBtn.value = "Remove";


const myLibrary =[];



function Book(title, author, pages, status, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.index = 0;
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages}, ${this.status}`)
    }

}

function getStatus (checkedValue){
let inputElements = document.getElementsByClassName('status');
for(let i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           return checkedValue;
      }
}
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');

console.log(theHobbit.info());

function addBookToLibrary() {
    const addBook = new Book(title.value, author.value, pages.value, getStatus(),);
    myLibrary.push(addBook);
    displayBooks();

}

function displayBooks() {
    bookTable.replaceChildren(bookTable.firstElementChild); // Adds a book to the library array and creates the display for it in the table
    for (let i = 0; i < myLibrary.length; i++) {
        let bookTitleCell = document.createElement("td");
        let bookAuthorCell = document.createElement("td");
        let bookPagesCell = document.createElement("td");
        let bookStatusCell = document.createElement("td");
        let bookOptionsCell = document.createElement("td");
        bookOptionsCell.className = 'bookOptions';
        const removeBtn = document.createElement("input");   
        removeBtn.type = "button";
        // removeBtn.className = "removeBook";
        removeBtn.value = "Remove";
        const changeStatusBtn = document.createElement("input");
        changeStatusBtn.type = "button";
        changeStatusBtn.value = "Change Status";
        bookTitleCell.textContent = myLibrary[i].title;
        bookAuthorCell.textContent = myLibrary[i].author;
        bookPagesCell.textContent = myLibrary[i].pages;
        bookStatusCell.textContent = myLibrary[i].status;
        myLibrary[i].index = i;
        // bookOptionsCell.textContent = myLibrary[i].index;
        let bookRow = document.createElement("tr");
        bookTable.appendChild(bookRow);
        bookOptionsCell.appendChild(removeBtn);
        bookOptionsCell.appendChild(changeStatusBtn);
        bookRow.appendChild(bookTitleCell);
        bookRow.appendChild(bookAuthorCell);
        bookRow.appendChild(bookPagesCell);
        bookRow.appendChild(bookStatusCell);
        bookRow.appendChild(bookOptionsCell);
        removeBtn.addEventListener("click", () => {
                console.log(myLibrary[i].index)
               myLibrary.splice(myLibrary[i].index, 1)
               displayBooks();
               console.log(myLibrary);
               return myLibrary;
        })

        changeStatusBtn.addEventListener("click", () => {
                if(myLibrary[i].status === 'Read' && myLibrary[i].index === i){
                    myLibrary[i].status = 'Not Read';
                    console.log(myLibrary);
                    displayBooks();
                } else if(myLibrary[i].status === 'Not Read' && myLibrary[i].index === i){
                    myLibrary[i].status = 'Read';
                    console.log(myLibrary);
                    displayBooks();
                }
        })
    }

}


addBtn.addEventListener("click", () => {
    addBookToLibrary();
    console.log(myLibrary);
    // displayBooks();
})

newBookBtn.addEventListener("click", () => {
    if(bookForm.style.visibility === "hidden"){
    bookForm.style.visibility = "visible";
    } else if(bookForm.style.visibility === "visible"){
        bookForm.style.visibility = "hidden";
    }
})

// displayBtn.addEventListener("click", () => {
//     bookCard.textContent = theHobbit.info();
//     displayBooks();
//     getBookIndex();

// })

// removeBook.addEventListener("click", () => {
//     for (i = 0; i < myLibrary.length; i++){
//     myLibrary.filter(Book => Book.title != myLibrary[i].title);
//     }
//     displayBooks();
//     console.log(myLibrary);
// })



// removeBtn.addEventListener("click", () => {
//     for(let i = 0; i < myLibrary.length; i++){
//         myLibrary.filter(Book => Book.index != myLibrary[i].index);
//         console.log(myLibrary);
//     }
// })
