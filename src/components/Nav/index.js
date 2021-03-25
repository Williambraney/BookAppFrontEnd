import { connect } from "react-redux";
import { searchBooks } from "../../data/actions/api";
import Nav from "./Nav";

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Nav);
