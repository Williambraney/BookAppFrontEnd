// this function is setting itself equal to what we get from the API

const loadBook = (state, action) => ({ ...state, book: action.book });
const loadBooks = (state, action) => ({ ...state, loaded: true, books: [...action.books] });
const loadAuthor = (state, action) => ({ ...state, author: action.author });
const loadAuthors = (state, action) => ({ ...state, authors: [...action.authors] });
const setSearchTerm = (state, action) => ({ ...state, searchTerm: action.searchTerm })
const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_BOOK": return loadBook(state, action)
        case "LOAD_BOOKS": return loadBooks(state, action)
        case "LOAD_AUTHOR": return loadAuthor(state, action)
        case "LOAD_AUTHORS": return loadAuthors(state, action)
        case "SET_SEARCH_TERM": return setSearchTerm(state, action)
        default: return state;
    }
}

export default reducer
