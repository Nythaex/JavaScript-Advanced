class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error('Not enough space in the collection.')
        }

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        })

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let theBook = this.books.find(b => b.bookName == bookName)

        if (!theBook) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        else if (theBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            theBook.payed=true;
            return `${bookName} has been successfully paid.`
        }
    }


    removeBook(bookName) {
        let theBook = this.books.find(b => b.bookName == bookName)

        if (!theBook) {
            throw new Error(`The book, you're looking for, is not found.`)
        } else if (theBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            return `${bookName} remove from the collection.`
        }


    }

    getStatistics(bookAuthor) {
        let result = [];

        if (!bookAuthor) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)

            this.books.sort((b1, b2) => b1.bookName.localeCompare(b2.bookName)).forEach(b => {
                result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`)
            })

            return result.join('\n')
        } else {
            let theBook = this.books.find(b => b.bookAuthor === bookAuthor)

            if (theBook) {
                return `${theBook.bookName} == ${theBook.bookAuthor} - ${theBook.payed ? 'Has Paid' : 'Not Paid'}.`
            } else {
                return `${bookAuthor} is not in the collection.`
            }
        }
    }
}
