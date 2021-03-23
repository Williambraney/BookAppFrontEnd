import colors from '../../colors.json'

const Pages = () => {
    

    return (
        <>
            {/* page-1 book cover and info ---------------------------------------------*/}
            <div className="shadow-lg container" style= {
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
            <div className="shadow-lg container" style= {
                {
                    backgroundColor: "#fdfaf7",
                    width: "500px",
                    height: "800px",
                }
            }>

                <p className="title" style={
                    {
                        fontSize: "25px",
                    }
                }>Harry Potter and the Chamber of Secrets</p>
                

                <p className="author-name" style={
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
                <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
             
            </div>

            {/* page-3 author cover ---------------------------------------------------*/}
            <div className="container">
            </div>

            {/* page-4 author bio --------------------------------------------------*/}
            <div className="container">
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