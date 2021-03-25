import test from "../../assets/test.png"
import orangeBackground from "../../assets/orange-watercolor.png"
import hoppers from "../../assets/hoppers.png"
import { Button, Form } from "react-bootstrap"
import colors from "../../colors.json"
import fireVideo from "../FireVideo/FireVideo";

const Search = () => {


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
        // backgroundRepeat: "cover"
    }

    const searchBar = {
        width: 70 + "vw"
    }

    const quote = {
        backgroundColor: "Transparent",
        width: 70 + "vw",
        color: "black",
        fontSize: 1.7 + "rem",
        border: "none",
    }

    const logo = {
        width: 30 + "px",
    }

    return (
        <div style={searchWrapper}>
            <fireVideo />
            <Form style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Form.Group style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} controlId="search">
                    <Form.Control style={searchBar} type="text" placeholder="Discover your next great adventure..." />
                </Form.Group>
                <Form.Group style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button style={quote}>"Hearing voices no-one else can hear isn't a good sign, not even in the wizarding world."</Button>
                    <Form.Text className="text-muted">
                        by J.K. Rowling
                        </Form.Text>
                    <Form.Text className="text-muted">
                        Harry Potter and the Chamber of Secrets
                        </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}


export default Search;