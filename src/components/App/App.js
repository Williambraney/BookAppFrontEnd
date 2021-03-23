import BookLarge from "../BookLarge"
import TestPage from "../TestPage"
import Nav from "../Nav"
import Search from "../Search"

const App = () => {
    return (
        <>
            <Nav />
            <Search />
            <div className="container">
                <BookLarge>
                    <TestPage></TestPage>
                    <TestPage></TestPage>
                    <TestPage></TestPage>
                </BookLarge>
            </div>
        </>
    );
}

export default App;