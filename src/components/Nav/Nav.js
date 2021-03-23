import test from "../../assets/test.png"
import hoppers from "../../assets/hoppers.png"
import { Button } from "react-bootstrap"
import colors from "../../colors.json"

const Nav = () => {

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.darkGrey,
        color: colors["5beige"],
        marginBottom: "1rem",
        width: 100 + "vw",
        padding: .4 + "rem"
    }

    const buttonStyle = {
        backgroundColor: "Transparent",
        fontSize: 1.7 + "rem",
        border: "none",        
    }

    const logoStyle = {
        display: "flex",
        alignItems: "center",        
        backgroundColor: "white",
        width: 100 + "vw",
        height: 25 + "px",
        fontSize: 1.2 + "rem",
        fontWeight: "bold",
        padding: 17 + "px",        

    }

    const logo = {
        width: 30 + "px",
    }

    return (
        <>
            <div style={logoStyle}>
                <p style={{ marginBottom: 4 + "px", marginRight: 5 + "px", padding: 0 }}>Hoppers</p>
                <img style={logo} src={hoppers} alt="hoppers icon"></img>
            </div>
            <div style={navStyle}>
                <Button style={buttonStyle}>Books</Button>
                <Button style={buttonStyle}>Authors</Button>
            </div>
        </>
    )
}


export default Nav;