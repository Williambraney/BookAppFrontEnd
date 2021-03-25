import { connect } from "react-redux";
import PagesBook2 from "./PagesBook2";
import { getBooks } from '../../data/actions/api'

const mapStateToProps = state => {
    return {
        author: state.author,
        synopsis: state.synopsis,
        title: state.title,
        type: state.type,
        binding: state.binding,
        pages: state.pages,
        publisher: state.publisher,
        publication_date: state.publication_date,
        rrp: state.rrp,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(getBooks())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PagesBook2);