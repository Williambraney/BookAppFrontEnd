import { Component } from "react"
import BookSmall from "../BookSmall/BookSmall"
import "./Gallery.css"
import { Card } from "react-bootstrap";
import Misery7 from ".././BookSmall/Misery7.jpg"
import ".././BookSmall/BookSmalls.css";
import colors from "../../colors.json"
import book from "../../book.json"
import { useState } from "react";
import FsLightbox from 'fslightbox-react';
import BookLarge from '../BookLarge';

const map = book.data.genre.map(genre => (genre));
var mapString = map.join(', ');

const BookSmallGallery = ({ books, bookMode }) => {

    const [toggler, setToggler] = useState(false);
    const [selectedBook, setSelectedBook] = useState(-1);
    const [productIndex, setProductIndex] = useState(0);



    // setselected books
    // use js stringsearch and use -1 for no book selected, or array index for selcted

    return (
        <>
            <div className="bookGallery">
                {bookMode ?
                    books.map((book, index) => {

                        let thisBook = book;
                        return (
                            <div onClick={() => {
                                setSelectedBook(index)
                                setToggler(!toggler)
                            }} key={index} className="cardContainer" style={{ backgroundColor: colors.lightGrey }}>
                                <Card className="card">
                                    <Card.Img className="image" variant="top" src={process.env.PUBLIC_URL + book.image_path} />

                                    <Card.Body>
                                        <Card.Title className="title">{`${book.title}`}</Card.Title>
                                        <Card.Text className="text">{`${book.author.name}`}</Card.Text>
                                        {/* <Card.Text className="text"><b>Genres:</b>{`${book.genre}`}</Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </div>)
                    })

                    :

                    books.map((book, index) => {

                        let thisBook = book;
                        return (
                            <div onClick={() => {
                                setSelectedBook(index)
                                setToggler(!toggler)
                            }} key={index} className="cardContainer" style={{ backgroundColor: colors.lightGrey }}>
                                <Card className="card">
                                    <Card.Img className="image" variant="top" src={process.env.PUBLIC_URL + book.author.image_path} />



                                    <Card.Body>
                                        <Card.Title className="title">{`${book.title}`}</Card.Title>
                                        <Card.Text className="text">{`${book.author.name}`}</Card.Text>
                                        {/* <Card.Text className="text"><b>Genres:</b>{`${book.genre}`}</Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </div>)

                    })

                }
            </div>
            <FsLightbox
                // toggler = bookindex < -1
                // using state outside of map to store index, then pass in the book to booklarge by index
                toggler={toggler}
                // onClose={() => {
                //     setSelectedBook(-1)
                //     setToggler(false)
                // }}
                sources={[
                    <div style={{ width: "1100px", height: "800px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <BookLarge book={books[selectedBook]} />
                    </div>
                ]}
            />
        </>
    )
};

export default BookSmallGallery;



