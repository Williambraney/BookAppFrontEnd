import colors from '../../colors.json'
import authors from '../../authors.json'
import books from '../../books.json'
import pages from '../../components/Pages/pages.scss'

const Pages = ({ author, synopsis, title, type, binding, pages, publisher, publication_date, rrp, getBooks }) => {

const description = `J.K. Rowling is best known as the author of the seven Harry Potter books, which were published between 1997 and 2007. The enduringly popular adventures of Harry, Ron and Hermione have gone on to sell over 500 million copies, be translated into over 80 languages and made into eight blockbuster films. Alongside the Harry Potter series, she also wrote three short companion volumes for charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them, in aid of Comic Relief and Lumos, and The Tales of Beedle the Bard, in aid of Lumos. J.K. Rowling collaborated with playwright Jack Thorne and director John Tiffany to continue Harry's story in a stage play, Harry Potter and the Cursed Child, which opened in London in 2016 and is now playing worldwide. In the same year, she made her debut as a screenwriter with the film Fantastic Beasts and Where to Find Them, the first in a series featuring Magizoologist Newt Scamander, which was inspired by the original companion volume. J.K.`

const bioDescription = `J.K. Rowling is best-known as the author of the seven Harry Potter books, which were published between 1997 and 2007. The enduringly popular adventures of Harry, Ron and Hermione have gone on to sell over 500 million copies, be translated into over 80 languages and made into eight blockbuster films.

Alongside the Harry Potter series, J.K. Rowling also wrote three short companion volumes for charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them, in aid of Comic Relief, and The Tales of Beedle the Bard, in aid of Lumos. The companion books and original series are all available as audiobooks.

In 2016, J.K. Rowling collaborated with playwright Jack Thorne and director John Tiffany to continue Harry’s story in a stage play, Harry Potter and the Cursed Child, which opened in London, followed by the USA and Australia.

In the same year, she made her debut as a screenwriter with the film Fantastic Beasts and Where to Find Them. Inspired by the original companion volume, it was the first in a series of new adventures featuring wizarding world magizoologist Newt Scamander. The second, Fantastic Beasts: The Crimes of Grindelwald, was released in 2018.

Both the screenplays, as well as the script of Harry Potter and the Cursed Child, are also available as books.

Fans of Fantastic Beasts and Harry Potter can find out more at www.wizardingworld.com.

J.K. Rowling also writes novels for adults. The Casual Vacancy was published in 2012 and adapted for television in 2015. Under the pseudonym Robert Galbraith, she is the author of the highly acclaimed ‘Strike’ crime series, featuring private detective Cormoran Strike and his partner Robin Ellacott. The first of these, The Cuckoo’s Calling, was published to critical acclaim in 2013, at first without its author’s true identity being known.`



    return (
        <>
            {/* page-1 book cover and info. PARENT DIV----------------------*/}
            <div className="shadow-lg container" 
                 style= {
                {
                    backgroundColor: "#fdfaf7",
                    width: "500px",
                    height: "800px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }
            }>
                
                <div>
                    <p className="header"
                       style={
                           {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                           }
                       }
                    >PAGE HEADER - 1</p>

                    {/* page-3 book cover image*/}
                    <figure className="img--book" 
                            style={
                                {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column"
                                }

                            }>
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg" alt="logo" className="logo"/>
                    </figure>
                </div>

                <div style={
                    {
                        width: "60%",
                    }
                }>
                    <p className="type">Type:&nbsp;{
                        books.data.books[0].type
                    }</p>
                    <p className="binding">Binding:&nbsp;{
                        books.data.books[0].binding
                    }</p>
                    <p className="publisher">Publisher:&nbsp;{
                        books.data.books[0].publisher
                    }</p>
                    <p className="pages">Pages:&nbsp;{
                        books.data.books[0].pages
                    }</p>
                    <p className="pubdate">Publication Date:&nbsp;{
                        books.data.books[0].publication_date
                    }</p>
                    <p className="rrp">RRP:&nbsp;{
                        books.data.books[0].rrp
                    }</p>
                </div>

               
                    <p className="footer">1</p>
            </div>


                {/* page-2 book review  --------------------------------------------------*/}
            <div className="shadow-lg container" 
                    style= {
                {
                    backgroundColor: "#fdfaf7",
                    width: "500px",
                    height: "800px",
                }
            }>

                    <p className="title" 
                       style={
                        {
                            fontSize: "25px",
                        }
                    }>{
                        books.data.books[0].title
                    }</p>

                    <p className="author-name" 
                       style={
                            {
                                color: colors.darkGrey,
                            }
                    }>{
                        books.data.books[0].author
                    }</p>

                    <p className="review">{
                        books.data.books[0].synopsis
                    }</p>
                    <p className="footer" style={
                        {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        }
                    }>2</p>
            </div>


                {/* page-3 author cover ---------------------------------------------------------------------------------*/}
            <div className="shadow-lg container"
                 style={
                        {
                        backgroundColor: "#fdfaf7",
                        width: "500px",
                        height: "800px",
                        }
            }>
                    <div style={
                            {
                                display: "flex",
                            }
                    }>
                        {/* page-3 author image*/}
                        <img src="https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/fvh43djng407r1iq142ng0sk5f._SY200_.jpg" 
                            style={
                                {
                                    height: "270px",
                                    width: "250px",
                                    marginTop: "15px"
                                }    
                        }/>

                        <p className="author-n" 
                           style={
                            {
                                fontSize: "40px",
                                marginTop: "50px",
                                marginLeft: "20px"
                            }
                            }>J.K. Rowling</p>

                        <p className="quote" 
                           style={
                            {
                                fontSize: "12px",
                                marginTop: "200px",
                                marginLeft: "-130px",
                                fontFamily: "Arial-ItalicMT",
                            }
                            }>"Hearing voices no-one else can hear isn't a good sign, not even in the wizarding world.</p>
                      
                    </div>    
                   

                    <p className="about-info" 
                       style={
                        {
                            marginTop: "20px",
                            marginLeft: "5px",
                        }
                    }>About the Author
                    {
                        description.split(' ').map((word, i) => (<span key={i} className="description-word">{word} </span>))
                    }
                    </p>

                    <p className="footer" style={
                           {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                           }
                       }>3</p>
                
            </div> 
                {/* page-4 author bio --------------------------------------------------*/}
            <div className="shadow-lg container"
                style={
                    {
                    backgroundColor: "#fdfaf7",
                    width: "500px",
                    height: "800px",
                    }
                }>
                     <p className="author-name" 
                       style={
                            {
                                fontSize: "40px",
                            }
                    }>Biography</p>

                    <p className="bio">{
                        bioDescription.split(' ').map((word, i) => (<span key={i} className="bio-description-word">{word} </span>))
                    }
                    </p>

                    <p className="footer" style={
                           {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                           }
                       }>4</p>
                    
            </div>
            
        </>
    )
}


export default Pages;


//   <div style= {
//     {
//         color: colors.yellow
//     }
// }