// this function is setting itself equal to what we get from the API

const loadBook = (state, action) => ({ ...state, book: action.book });
const loadBooks = (state, action) => ({ ...state, books: [...action.books] });
const loadAuthor = (state, action) => ({ ...state, author: action.author });
const loadAuthors = (state, action) => ({ ...state, authors: [...action.authors] });

const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_BOOK": return loadBook(state, action)
        case "LOAD_BOOKS": return loadBooks(state, action)
        case "LOAD_AUTHOR": return loadAuthor(state, action)
        case "LOAD_AUTHORS": return loadAuthors(state, action)
        default: return state;
    }
}

export default reducer
