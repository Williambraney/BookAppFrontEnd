import test from "../../assets/test.png"
import orangeBackground from "../../assets/orange-watercolor.png"
import hoppers from "../../assets/hoppers.png"
import { Button, Form } from "react-bootstrap"
import colors from "../../colors.json"
import FireVideo from "../FireVideo/FireVideo";
import { useState, getState } from "react";




const Search = ({ searchBooks, searchTerm, quotation, changeQuote, author }) => {


    let [searchWord, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        const newValue = e.currentTarget.value;
        setSearchTerm(newValue);
        searchBooks(newValue);
    };

    const searchWrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "white",
        width: 100 + "vw",
        maxWidth: 100 + "%",
        height: 300 + "px",
        // backgroundImage: `url(${orangeBackground})`,
        backgroundSize: 100 + "%",
        backgroundRepeat: "cover",
    }

    const searchBar = {
        width: 70 + "vw",
        height: "40px",
        fontSize: 1.2 + "rem",
    }

    const searchLabel = {
        fontSize: 3.5 + "rem",
        color: "white",
        marginTop: "250px",
        marginBottom: "50px",
        display: "inline-block"
    }

    const quote = {
        width: 55 + "vw",
        color: "black",
        fontSize: 1.7 + "rem",
        border: "none",
        fontFamily: "Arial-ItalicMT",
        backgroundColor: "rgba(255,255,255,0.5)",
        marginTop: "100px"
    }

    const logo = {
        width: 30 + "px",
    }

    const authorBook = {
        fontWeight: "bold",
        color: "green",
        fontSize: 1.7 + "rem",
    }



    return (
        <div style={searchWrapper}>
            <FireVideo />
            <Form style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Form.Group style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} controlId="search">
                    <Form.Label style={searchLabel}>Discover your next great literary adventure...</Form.Label>
                    <Form.Control style={searchBar} type="text" placeholder="search for a book or author" value={searchWord} onChange={handleSearchTerm} />
                </Form.Group>

                <Form.Group style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" ,}}>
                    <Button onClick={ changeQuote } className="button-style" style={quote}>"{quotation}"</Button>

                    <Form.Text className="text-muted" style={authorBook}>
                        {author}
                        </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}


export default Search;