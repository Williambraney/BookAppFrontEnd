import { forwardRef, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import OpenBook from "../../assets/OpenBook.jpg";

import { Row, Col, Container } from "react-bootstrap"


import TestPage from "../TestPage"

const BookLarge = ({ book }) => {

    console.log(book)

    const TestPage = forwardRef((props, ref) => {
        return (
            <div ref={ref} style={
                {
                    padding: 0,
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
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }
                }>
                    <p className="header">PAGE HEADER - 1</p>

                    <figure className="img--book">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg" alt="logo" className="logo" />
                    </figure>

                    <Container fluid="md" style={{ width: 80 + "%" }}>
                        <Row>
                            <Col>
                                <p className="type">Type: </p>
                                <p className="binding">Binding:</p>
                                <p className="publisher">Publisher:</p>
                            </Col>
                            <Col>
                                <p className="pages">Pages:</p>
                                <p className="pubdate">Publication Date:</p>
                                <p className="rrp">RRP:</p>
                            </Col>
                        </Row>
                    </Container>
                    <p className="footer">1</p>
                </div>



            </div>
        );
    });


    const divStyle = {
        border: "black 1px solid",
        backgroundColor: "red"
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <HTMLFlipBook width={500} height={693}>
                <TestPage number="1" />
                <TestPage number="2" />
                <TestPage number="3" />
                <TestPage number="4" />
            </HTMLFlipBook>
        </div>
    );
}


export default BookLarge;