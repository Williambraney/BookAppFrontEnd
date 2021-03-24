import colors from '../../colors.json'

const Pages = () => {
    

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
                    <p className="header">PAGE HEADER - 1</p>

                    {/* page-3 book cover image*/}
                    <figure className="img--book">
                        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg" alt="logo" class="logo"/>
                    </figure>
                </div>

                <div style={
                    {
                        width: "60%",
                    }
                }>
                    <p className="type">Type:</p>
                    <p className="binding">Binding:</p>
                    <p className="publisher">Publisher:</p>
                    <p className="pages">Pages:</p>
                    <p className="pubdate">Publication Date:</p>
                    <p className="rrp">RRP:</p>
                </div>

               
                    <p className="footer" style={
                        {
                            paddingLeft: "5px",
                        }
                    }>1</p>
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
                    }>Harry Potter and the Chamber of Secrets</p>

                    <p className="author-name" 
                       style={
                            {
                                color: colors.darkGrey,
                            }
                    }>J K Rowling</p>

                    <p className="review">Review
                    I've yet to meet a ten-year-old who hasn't been entranced by its witty, complex plot and the character of the eponymous Harry ― Independent

                    Spellbinding, enchanting, bewitching stuff ― Mirror

                    Teachers say a chapter can silence the most rowdy of classes ― Guardian

                    One of the greatest literary adventures of modern times ― Sunday Telegraph

                    The Harry Potter stories will join that small group of children's books which are read and reread into adulthood ― TLS
                    From the Back Cover
                    Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone ...Dobby's sinister predictions seem to be coming true. These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON ...</p>
                    <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
             
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

                        <p className="" 
                           style={
                            {
                                fontSize: "40px",
                                marginTop: "50px",
                                marginLeft: "20px"
                            }
                            }>J.K. Rowling</p>
                    </div>    
                   

                    <p className="about-info" 
                       style={
                        {
                            marginTop: "20px",
                            marginLeft: "5px"
                        }
                    }>About the Author
                    J.K. Rowling is best known as the author of the seven Harry Potter books, which were published between 1997 and 2007. The enduringly popular adventures of Harry, Ron and Hermione have gone on to sell over 500 million copies, be translated into over 80 languages and made into eight blockbuster films. Alongside the Harry Potter series, she also wrote three short companion volumes for charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them, in aid of Comic Relief and Lumos, and The Tales of Beedle the Bard, in aid of Lumos. J.K. Rowling collaborated with playwright Jack Thorne and director John Tiffany to continue Harry's story in a stage play, Harry Potter and the Cursed Child, which opened in London in 2016 and is now playing worldwide. In the same year, she made her debut as a screenwriter with the film Fantastic Beasts and Where to Find Them, the first in a series featuring Magizoologist Newt Scamander, which was inspired by the original companion volume. J.K.</p>
                
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
                                color: colors.darkGrey,
                            }
                    }>Biography</p>

                    <p className="bio">J.K. Rowling is best-known as the author of the seven Harry Potter books, which were published between 1997 and 2007. The enduringly popular adventures of Harry, Ron and Hermione have gone on to sell over 500 million copies, be translated into over 80 languages and made into eight blockbuster films.

                    Alongside the Harry Potter series, J.K. Rowling also wrote three short companion volumes for charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them, in aid of Comic Relief, and The Tales of Beedle the Bard, in aid of Lumos. The companion books and original series are all available as audiobooks.

                    In 2016, J.K. Rowling collaborated with playwright Jack Thorne and director John Tiffany to continue Harry’s story in a stage play, Harry Potter and the Cursed Child, which opened in London, followed by the USA and Australia.

                    In the same year, she made her debut as a screenwriter with the film Fantastic Beasts and Where to Find Them. Inspired by the original companion volume, it was the first in a series of new adventures featuring wizarding world magizoologist Newt Scamander. The second, Fantastic Beasts: The Crimes of Grindelwald, was released in 2018.

                    Both the screenplays, as well as the script of Harry Potter and the Cursed Child, are also available as books.

                    Fans of Fantastic Beasts and Harry Potter can find out more at www.wizardingworld.com.

                    J.K. Rowling also writes novels for adults. The Casual Vacancy was published in 2012 and adapted for television in 2015. Under the pseudonym Robert Galbraith, she is the author of the highly acclaimed ‘Strike’ crime series, featuring private detective Cormoran Strike and his partner Robin Ellacott. The first of these, The Cuckoo’s Calling, was published to critical acclaim in 2013, at first without its author’s true identity being known. The Silkworm followed in 2014, Career of Evil in 2015 and Lethal White in 2018. 
                    </p>
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