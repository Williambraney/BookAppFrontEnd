import './Footer.css'
import Facebook from '../../assets/icons/Facebook.png'
import github from '../../assets/icons/github.png'
import Google from '../../assets/icons/Google.png'
import Instagram from '../../assets/icons/Instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'


const Footer = () => {
    return (
        <>
            <div className="text-center text-white">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook  */}
                        <a
                            className="btn btn-footer fa-facebook-f"
                            href="https://www.facebook.com/books/"
                            role="button"><i className="fab fa-facebook-f"></i
                            ><img src={Facebook} /></a>
                        {/* Twitter  */}
                        <a
                            className="btn btn-footer"
                            href="https://twitter.com/TwitterBooks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                            role="button"><i className="fab fa-twitter"><img src={twitter} /></i
                            ></a>
                        {/* Google */}
                        <a
                            className="btn btn-footer "
                            href="https://books.google.co.uk/"
                            role="button"><i className="fab fa-google"><img src={Google} /></i
                            ></a>
                        {/* Instagram */}
                        <a
                            className="btn btn-footer "
                            href="https://www.instagram.com/booksthatmatteruk/?hl=en"
                            role="button"><i className="fab fa-instagram"><img src={Instagram} /></i
                            ></a>
                        {/* Linkedin  */}
                        <a
                            className="btn btn-footer "
                            href="https://www.linkedin.com/company/books-for-all-people-book-shop/"
                            role="button"><i className="fab fa-linkedin-in"><img src={linkedin} /></i
                            ></a>
                        {/* Github */}
                        <a
                            className="btn btn-footer"
                            href="https://github.com/learn-anything/books"
                        ><i className="fab fa-github"><img src={github} /></i></a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container  */}


                <div className="text-center p-3">
                    <a className="text-white" href="https://mdbootstrap.com/">&#169;The Book Hoppers</a>
                </div>
            </div>
        </>
    )
};

export default Footer;


