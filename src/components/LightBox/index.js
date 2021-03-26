import { connect } from "react-redux";
import LightBox from "./LightBox";

const mapStateToProps = state => {
    return {
        lbToggle: state.lbToggle
    }
}
export default connect(mapStateToProps)(LightBox);
