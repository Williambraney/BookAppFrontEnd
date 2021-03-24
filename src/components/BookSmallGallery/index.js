import { connect } from "react-redux";
import BookSmallGallery from "./BookSmallGallery";
import { getBooks } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => getBooks(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSmallGallery);
