class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

const books = new Map();
const createBook = (title, author, isbn)=>{
    const existingBook = books.has(isbn);
    if(existingBook){
        return books.get(isbn)
    }
    
    //If Book is not available
    const book = new Book(title, author, isbn);
    books.set(isbn, book);
    return book;
};

//The createBook functions help us create new instances of one type of book. However, a library contains multiple copies of the same book. Lets create an addBook function, which allows us to add multiple copies of the same book. It should invoke the createBook function, which returns either a newly created Book instance, or returns the already existing instance.


const bookList = [];

const addBook = (title, author, isbn, availability, sales)=>{
    const book = {
        ...createBook(title, author, isbn),
        sales,
        availability,
        isbn,
    };

    bookList.push(book);
    return book;
}

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);


console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", books.size);