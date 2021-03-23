import { forwardRef, Component } from "react";
import HTMLFlipBook from "react-pageflip"
import test from "../../assets/test.png"

const TestPage = () => {

    const divStyle = {
        border: "black 1px solid"
    }

    return (
        <div className="container" style={divStyle}>
            <h1>This is a test page</h1>
            <img src={test}></img>
        </div>
    );
}


export default TestPage;