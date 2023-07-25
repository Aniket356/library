let myLibrary = []
const booksContainer = document.querySelector('.books');

function Book(title, author, isRead){
    this.title = title;
    this.author = author;
    this.isRead = isRead;
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

    myLibrary.forEach(book => {
        const newBook = document.createElement('div');
        newBook.classList.add('book');

        const bookTitle = document.createElement('p');
        bookTitle.classList.add('title');
        bookTitle.textContent = book.title;
        newBook.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = book.author;
        newBook.appendChild(bookAuthor);

        const bookReadBtn = document.createElement('button');
        bookReadBtn.classList.add(`${book.isRead ? 'read' : 'not-read'}`);
        bookReadBtn.textContent = `${book.isRead ? 'Already Read' : 'Not Read Yet'}`
        newBook.appendChild(bookReadBtn);

        const removeBookBtn = document.createElement('button');
        removeBookBtn.textContent = 'Delete Book';
        newBook.appendChild(removeBookBtn);

        booksContainer.appendChild(newBook);
    })
}

const formSubmitBtn = document.querySelector('.submit-btn > button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookIsReadInput = document.querySelector('#have-read');
formSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(`Title: ${titleInput.value}`);
    // console.log(`Author: ${authorInput.value}`);
    // console.log(`Is Read: ${bookIsReadInput.value}`);

    addBookToLibrary(titleInput.value, authorInput.value, bookIsReadInput.checked);
})