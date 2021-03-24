export const loadBook = (data) => {
    return {
        book: data,
        type: "LOAD_BOOK"
    }
}
export const loadBooks = (data) => {
    return {
        books: data,
        type: "LOAD_BOOKS"
    }
}
export const loadAuthor = (data) => {
    return {
        author: data,
        type: "LOAD_AUTHOR"
    }
}
export const loadAuthors = (data) => {
    return {
        authors: data,
        type: "LOAD_AUTHORS"
    }
}

// this sets up the action 