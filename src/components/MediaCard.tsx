import YouTube, { Options } from 'react-youtube';
import "./MediaCard.css";

const options: Options = {
    width: "inherit",
    height: "inherit",
    playerVars: {
        
    },
  };

type MediaCardProps = {
    videoId: string
}

const MediaCard = ({videoId}: MediaCardProps) => {
    return (
        <div className="media-card">
            <YouTube 
            videoId={videoId} 
            opts={options} 
            className="card-video"
            />
        </div>
    )
}

export default MediaCard
