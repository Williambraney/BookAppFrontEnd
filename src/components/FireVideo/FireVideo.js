import "./FireVideo.css"

const FireVideo = () => {
    return (
        <video  muted autoPlay loop id="video" playbackRate= "0.5">
            <source src={process.env.PUBLIC_URL + "/Book.mp4"} type="video/mp4"></source>
            </video>
    )
};

export default FireVideo;