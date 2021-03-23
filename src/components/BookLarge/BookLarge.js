import HTMLFlipBook from "react-pageflip"
import TestPage from "../TestPage"
import test from "../../assets/test.png"

const BookLarge = () => {

    const divStyle = {
        border: "black 1px solid",
        backgroundColor: "red"
    }

    return (
        <div className="container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>

            <HTMLFlipBook width={300} height={500}>
                <div className="container" style={divStyle}>
                    <h1>This is a test page</h1>
                    <img src={test}></img>
                </div>
                <div className="container" style={divStyle}>
                    <h1>This is a test page</h1>
                    <img src={test}></img>
                </div>
                <div className="container" style={divStyle}>
                    <h1>This is a test page</h1>
                    <img src={test}></img>
                </div>
                <div className="container" style={divStyle}>
                    <h1>This is a test page</h1>
                    <img src={test}></img>
                </div>
                <div className="demoPage">Page 2</div>
                <div className="demoPage">Page 3</div>
                <div className="demoPage">Page 4</div>
            </HTMLFlipBook>
        </div>
    );
}


export default BookLarge;