import BookSmall from "../BookSmall/"
import BookSmallGallery from "../BookSmallGallery/"
import BookLarge from "../BookLarge"
import TestPage from "../TestPage"
import Nav from "../Nav"
import Search from "../Search"
import Pages from '../Pages'
import FireVideo from "../FireVideo/FireVideo"
import LightBox from '../LightBox'
import Loading from '../Loading'
import Footer from '../Footer/Footer'




const App = () => {

    return (
        <>
            <Nav />
            <Search />
            {/* <div className="container">
                    <Pages></Pages>
                </div>
                <BookLarge>
                    <TestPage></TestPage>
                    <TestPage></TestPage>
                    <TestPage></TestPage>
                </BookLarge> */}
            <BookSmallGallery />
            <FireVideo />
            {/* <LightBox /> */}
            <Footer />
        </>
    )
};


export default App;