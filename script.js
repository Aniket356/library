let myLibrary = []
const booksContainer = document.querySelector('.books');

function Book(name, author, isRead){
    this.name = name;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(name, author, isRead){
    const book = new Book(name, author, isRead);
    myLibrary.push(book);
    showBooks();
}

function removeBook(index){
    myLibrary.splice(index, 1);
}

function showBooks() {
    booksContainer.innerHTML = "";
    myLibrary.forEach(book => {

        const newBook = document.createElement('div');
        newBook.classList.add('book')

        const bookName = document.createElement('p');
        bookName.innerText = book.name;
        bookName.classList.add('book-name');

        const bookAuthor = document.createElement('p');
        bookAuthor.innerText = book.author;
        bookAuthor.classList.add('book-author');

        const isReadBook = document.createElement('button');
        isReadBook.innerText = `${book.isRead ? 'Read' : 'Not read'}`
        isReadBook.classList.add('book-is-read');

        newBook.appendChild(bookName);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(isReadBook);

        booksContainer.appendChild(newBook)
    })
}