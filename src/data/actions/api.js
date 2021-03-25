import axios from '../../axios'
import { loaded } from './state'

export const getBooks = () => {
    return (dispatch) => {
        axios.get('/books').then(({data})=> {
            dispatch(loaded(data.data))
        })
    }
}