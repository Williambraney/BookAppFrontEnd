import { connect } from "react-redux";
import { searchBooks } from "../../data/actions/api";
import Nav from "./Nav";
import { setBookMode, setAuthorMode } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        bookMode: state.bookMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBookMode: () => dispatch(setBookMode()),
        setAuthorMode: () => dispatch(setAuthorMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
