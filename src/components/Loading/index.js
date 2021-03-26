import { connect } from "react-redux";
import Loading from "./Loading";
import { randomQuote } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => ({
    loaded,
});


const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(randomQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);