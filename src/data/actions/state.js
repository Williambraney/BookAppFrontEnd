export const loadBook = (data) => {
    return {
        type: "LOAD_BOOK",
        book: data
    }
}
export const loadBooks = (data) => {
    return {
        type: "LOAD_BOOKS",
        books: data
    }
}
export const loadAuthor = (data) => {
    return {
        type: "LOAD_AUTHOR",
        author: data
    }
}
export const loadAuthors = (data) => {
    return {
        type: "LOAD_AUTHORS",
        authors: data
    }
}
export const setLB = () => {
    return {
        type: "SET_LIGHTBOX",
    }
}

// this sets up the action 