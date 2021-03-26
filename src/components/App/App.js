import BookSmall from "../BookSmall/"
import BookSmallGallery from "../BookSmallGallery/"
import BookLarge from "../BookLarge"
import TestPage from "../TestPage"
import Nav from "../Nav"
import Search from "../Search"
import Pages from '../Pages'
import FireVideo from "../FireVideo/FireVideo"
import LightBox from '../LightBox'
import Footer from '../Footer/Footer'
import Loading from "../Loading"




const App = () => {

    return (
        <>
            <Loading>
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
            </Loading>
        </>
    )
};


export default App;