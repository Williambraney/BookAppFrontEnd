import BookSmall from "../BookSmall/BookSmall"
import "./Gallery.css"
import { Card } from "react-bootstrap";
import Misery7 from ".././BookSmall/Misery7.jpg"
import ".././BookSmall/BookSmalls.css";
import colors from "../../colors.json"
import book from "../../book.json"

const map = book.data.genre.map(genre => (genre));
var mapString = map.join(', ');


const BookSmallGallery = () => {
    const Books = [book, book, book, book]
    return ( 
        <>
        <div style={{display: "flex"}}>
        {Books.map((book, index) => (
            <div className="cardContainer" style={{ backgroundColor: colors.lightGrey }}>
                <Card className="card">
                    <Card.Img className="image" variant="top" src={Misery7} />
                    <Card.Body>
                        <Card.Title className="title">{book.data.title}</Card.Title>
                        <Card.Text className="text">By {book.data.author}</Card.Text>
                        <Card.Text className="text"><b>Genres:</b> {mapString} </Card.Text>
                    </Card.Body>
                </Card>
            </div>

))


}
        </div>
        </>
    )
};

export default BookSmallGallery;



