import BookSmall from "../BookSmall/BookSmall"
import BookLarge from "../BookLarge"
import TestPage from "../TestPage"
import Nav from "../Nav"
import Search from "../Search"
import Pages from '../Pages'


const App = () => {
    return (
        <>
            <Nav />
            <Search />
            <div className="container">
                <Pages></Pages>
                <BookSmall />
            </div>
            <BookLarge>
                <TestPage></TestPage>
                <TestPage></TestPage>
                <TestPage></TestPage>
            </BookLarge>
        </>
    )
};


export default App;