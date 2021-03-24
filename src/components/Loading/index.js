import { connect } from "react-redux";
import Loading from "./Loading";
import { getBooks } from "../../data/actions/api"

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);