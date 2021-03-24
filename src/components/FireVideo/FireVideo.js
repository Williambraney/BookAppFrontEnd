import "./FireVideo.css"

const FireVideo = () => {
    return (
        <video width="320" height="240" muted autoPlay>
            <source src={process.env.PUBLIC_URL + "/fireVideo.mp4"} type="video/mp4"></source>
            </video>
    )
};

export default FireVideo;