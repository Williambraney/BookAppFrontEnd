import { forwardRef, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import OpenBook from "../../assets/OpenBook.jpg";
import { Row, Col, Container } from "react-bootstrap"
import TestPage from "../TestPage"
import PagesAuthor1 from "../PagesAuthor1"
import colors from "../../colors.json"
import pages from '../BookLarge/pages.scss'
import BookSmallGallery from "../BookSmallGallery";


const BookLarge = ({ book, author }) => {

    const BookPage1 = forwardRef((props, ref) => {

        if (!props.book) { return null }

        return (
            <div ref={ref} style={
                {
                    padding: 0,
                    border: "1px solid #c2b5a3",
                    overflow: "hidden",
                    backgroundColor: "#fdfaf7",
                    width: "490px",
                    height: "800px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }
            }>

                <div style={
                    {
                        display: "grid",
                        gridTemplateRows: "auto 60% auto",
                        border: "1px solid #c2b5a3",
                        overflow: "hidden",
                        backgroundColor: "#fdfaf7",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }
                }>
                    <p style={{ alignSelf: "center", justifySelf: "center" }} className="header">1</p>

                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={process.env.PUBLIC_URL + props.book.image_path} alt="logo" className="logo" />

                    <Container fluid="md" style={{ width: 100 + "%" }}>
                        <Row>
                            <Col>
                                <p className="type">Title: {props.book.title}</p>
                                <p className="binding">By: {props.book.author.name}</p>
                                <p className="publisher">Publication Date: {props.book.publication_date}</p>
                            </Col>
                            <Col>
                                <p className="pages">Pages: {props.book.pages}</p>
                                <p className="pubdate">RRP: £{props.book.rrp}</p>
                            </Col>
                        </Row>
                    </Container>                    
                </div>



            </div>
        );
    });

    const BookPage2 = forwardRef((props, ref) => {

        if (!props.book) { return null }

        return (
            <div ref={ref} style={
                {
                    padding: 0,
                    border: "1px solid #c2b5a3",
                    overflow: "hidden",
                    backgroundColor: "#fdfaf7",
                    width: "490px",
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
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }
                }>
                    <p style={{ position: "absolute", top: "10px", right: "10px" }}>Pull here to turn the page ☞</p>
                    <p className="title"
                        style={
                            {
                                fontSize: "25px",
                            }
                        }>{
                            `${props.book.title}`
                        }</p>

                    <p className="author-name"
                        style={
                            {
                                color: colors.darkGrey,
                            }
                        }>{
                            `${props.book.author.name}`
                        }</p>

                    <p className="bio" style={{ margin: "3rem" }}>{
                        props.book.synopsis.split(' ').map((word, i) => (<span key={i} className="bio-description-word">{word} </span>))
                    }
                    </p>
                    <p className="footer" style={
                        {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        }
                    }>2</p>
                </div>



            </div>
        );
    });

    const BookPage3 = forwardRef((props, ref) => {

        if (!props.book) { return null }

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
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }
                }>
                    {/* page-3 author image*/}
                    <p style={{ position: "absolute", top: "10px", left: "10px" }}>☜ Pull here to turn the page</p>
                    <img src={process.env.PUBLIC_URL + props.book.author.image_path}
                        style={
                            {
                                height: "270px",
                                width: "250px",
                                marginTop: "15px"
                            }
                        } />

                    <p className="author-n"
                        style={
                            {
                                fontSize: "40px",
                                marginTop: "50px",
                                marginLeft: "20px"
                            }
                        }>{props.book.author.name}</p>

                    <p className="quote"
                        style={
                            {
                                fontSize: "12px",
                                // marginTop: "200px",
                                // marginLeft: "-130px",
                                fontFamily: "Arial-ItalicMT",
                            }
                        }>{props.book.publication_date}</p>
                </div>



            </div>
        );
    });

    const BookPage4 = forwardRef((props, ref) => {

        if (!props.book) { return null }

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
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    }
                }>
                    <p className="author-name"
                        style={
                            {
                                fontSize: "40px",
                            }
                        }>Biography</p>

                    <p className="bio" style={{ margin: "3rem" }}>{
                        props.book.author.bio.split(' ').map((word, i) => (<span key={i} className="bio-description-word">{word} </span>))
                    }
                    </p>

                    <p className="footer" style={
                        {
                            display: "flex",
                            justifySelf: "flex-end",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        }
                    }>4</p>
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
            <HTMLFlipBook width={500} height={650}>
                <BookPage1 number="1" book={book} />
                <BookPage2 number="2" book={book} />
                <BookPage3 number="3" book={book} />
                <BookPage4 number="4" book={book} />
            </HTMLFlipBook>
        </div>
    );
}


export default BookLarge;