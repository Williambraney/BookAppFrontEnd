import axios from '../../axios'
import { loadBook, loadBooks, loadAuthor, loadAuthors } from './state'

export const getBook = id => {
    return (dispatch) => {
        axios.get(`/book/${id}`).then(({ data }) => {
            dispatch(loadBook(data.data))
        })
    }
}

export const getBooks = () => {
    return (dispatch) => {
        axios.get('/books').then(({ data }) => {
            dispatch(loadBooks([...data.data]))
        })
    }
}

export const searchBooks = (searchTerm) => {
    console.log(searchTerm);
    return (dispatch) => {
        axios.get(`/books/search/${searchTerm}`).then(({ data }) => {
            console.log(data);
            dispatch(loadBooks([...data.data]))
        })
    }
}

export const getAuthor = id => {
    return (dispatch) => {
        axios.get(`/author/${id}`).then(({ data }) => {
            dispatch(loadAuthor(data.data))
        })
    }
}

export const getAuthors = () => {
    return (dispatch) => {
        axios.get('/authors').then(({ data }) => {
            dispatch(loadAuthors(data.data))
        })
    }
}