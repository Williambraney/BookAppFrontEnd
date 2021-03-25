import { Card } from "react-bootstrap";
import Misery7 from "./Misery7.jpg"
import "./BookSmalls.css";
import colors from "../../colors.json"
import { useState } from "react";
import FsLightbox from 'fslightbox-react';
import BookLarge from "../BookLarge";


const BookSmall = ({ toggleLightBox }) => {

    const [toggler, setToggler] = useState(false);

    return (
        <>
            <div className="cardContainer" style={{ backgroundColor: colors.lightGrey }}>
                <Card>
                    <Card.Img className="image" variant="top" src={Misery7} />
                    <Card.Body>
                        <Card.Title className="title">Misery</Card.Title>
                        <Card.Text className="text">By Stephen King</Card.Text>
                        <Card.Text className="text">Genre: Horror Non-Fiction Thriller</Card.Text>
                        {/* <Button style={{backgroundColor: colors.darkGrey}} className="Button" variant="primary">Find Out More</Button> */}
                    </Card.Body>
                </Card>
            </div>
        </>

    )
};

export default BookSmall;