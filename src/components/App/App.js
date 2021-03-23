import BookLarge from "../BookLarge"
import TestPage from "../TestPage"
import Nav from "../Nav"

const App = () => {
    return (
        <>
            <Nav />
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