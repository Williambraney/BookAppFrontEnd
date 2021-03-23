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
                <BookLarge>
                    <TestPage></TestPage>
                    <TestPage></TestPage>
                    <TestPage></TestPage>
                </BookLarge>
            </div>
        </>
)
};


export default App;