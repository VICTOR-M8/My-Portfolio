import "../container/Container.css"
import video from "../../assets/img/video1.mp4"
const Container = () => {
    return (
        <div className="video-background">
            <video src={video} autoPlay muted loop />
        </div>
    )

}

export default Container