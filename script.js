let myLibrary = []
const booksContainer = document.querySelector('.books');

// function Book(title, author, isRead){
//     this.title = title;
//     this.author = author;
//     this.isRead = isRead;
// }

class Book {
    constructor(title, author, isRead){
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}

function addBookToLibrary(title, author, isRead){
    const newBook = new Book(title, author, isRead);
    myLibrary.push(newBook);
    showBooks();
}

function showBooks() {

    while(booksContainer.hasChildNodes()){
        booksContainer.removeChild(booksContainer.firstChild);
    }

    myLibrary.forEach((book, index) => {
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.setAttribute("data-id", index)
        
        //container for book details
        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');

        const bookTitle = document.createElement('p');
        bookTitle.classList.add('title');
        bookTitle.textContent = book.title;
        bookDetails.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = book.author;
        bookDetails.appendChild(bookAuthor);

        newBook.appendChild(bookDetails);

        //container for button elements of a book
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('buttons');

        const bookReadBtn = document.createElement('button');
        bookReadBtn.classList.add(`${book.isRead ? 'read' : 'not-read'}`);
        bookReadBtn.textContent = `${book.isRead ? 'Already Read' : 'Not Read Yet'}`;

        //if this button is clicked the value of book.isRead reverses
        bookReadBtn.addEventListener('click', (event) => {
            myLibrary[index].isRead = myLibrary[index].isRead ? false : true;
            
            event.target.classList.remove('read');
            event.target.classList.remove('not-read');
            bookReadBtn.classList.add(`${book.isRead ? 'read' : 'not-read'}`);
            bookReadBtn.textContent = `${book.isRead ? 'Already Read' : 'Not Read Yet'}`
        });

        btnContainer.appendChild(bookReadBtn);

        const removeBookBtn = document.createElement('button');
        removeBookBtn.textContent = 'Delete Book';

        removeBookBtn.addEventListener('click', (event) => {
            myLibrary.splice(index, 1);
            showBooks();
        })

        btnContainer.appendChild(removeBookBtn);


        newBook.appendChild(btnContainer);

        booksContainer.appendChild(newBook);
    })
}

const formSubmitBtn = document.querySelector('.submit-btn > button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookIsReadInput = document.querySelector('#have-read');
formSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if(titleInput.value === '' || authorInput.value === ''){
        return;
    }

    addBookToLibrary(titleInput.value, authorInput.value, bookIsReadInput.checked);

    titleInput.value = '';
    authorInput.value = '';
    bookIsReadInput.checked = false;
})