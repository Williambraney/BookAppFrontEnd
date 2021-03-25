import { connect } from "react-redux";
import Search from "./Search";
import { searchBooks } from "../../data/actions/api"
import { setSearchTerm } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchBooks: (data) => dispatch(searchBooks(data)),
        updateSearchTerm: (data) => dispatch(setSearchTerm(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
