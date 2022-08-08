import "./Media.css";
import MediaCard from "./MediaCard";

const Media = () => {
    return (
        <div className="media">
            <div className="section-title">Media</div>
            <hr className="section-divider" />
            <div className="media-cards">
                <MediaCard videoId="yiIt8RK5X3w"/>
                <MediaCard videoId="M3Ne9J0t4oA"/>
                <MediaCard videoId="EwF1SJhedzI"/>
            </div>
        </div>
    )
}

export default Media
