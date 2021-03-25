import { forwardRef, Component } from "react";
import HTMLFlipBook from "react-pageflip"
import test from "../../assets/test.png"

const TestPage = forwardRef((props, ref) => {
    return (
        <div className="shadow-lg container" ref={ref} style={
            {
                border: "1px solid #c2b5a3",
                overflow: "hidden",
                backgroundColor: "#fdfaf7",
                width: "500px",
                height: "800px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }
        }>

            <div style={
                {
                    border: "1px solid #c2b5a3",
                    overflow: "hidden",
                    backgroundColor: "#fdfaf7",
                    width: "500px",
                    height: "800px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }
            }>
                <p className="header">PAGE HEADER - 1</p>

                <figure className="img--book">
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg" alt="logo" class="logo" />
                </figure>
            </div>

            <div style={
                {
                    border: "1px solid #c2b5a3",
                    overflow: "hidden",
                    backgroundColor: "#fdfaf7",
                    width: "500px",
                    height: "800px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "60%",
                }
            }>
                <p className="type">Type:</p>
                <p className="binding">Binding:</p>
                <p className="publisher">Publisher:</p>
                <p className="pages">Pages:</p>
                <p className="pubdate">Publication Date:</p>
                <p className="rrp">RRP:</p>
            </div>


            <p className="footer" style={
                {
                    paddingLeft: "5px",
                }
            }>1</p>
        </div>
    );
});

export default TestPage;