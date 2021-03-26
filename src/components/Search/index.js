import { connect } from "react-redux";
import Search from "./Search";
import { randomQuote, searchBooks } from "../../data/actions/api";
import { setSearchTerm, getQuote } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        quotation: state.quote.text,
        author: state.quote.author,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchBooks: (data) => dispatch(searchBooks(data)),
        updateSearchTerm: (data) => dispatch(setSearchTerm(data)),
        changeQuote: (data) => dispatch(randomQuote(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
