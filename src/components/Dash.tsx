import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import YouTube from 'react-youtube';
import { Options } from 'react-youtube';
import { YouTubePlayer } from 'youtube-player/dist/types';

import "./Dash.css";
import Overlay from './Overlay';
import Discontinued from './Discontinued';

const Body = () => {

    const [muted, setMuted] = useState(false);
    const [video, setVideo] = useState<YouTubePlayer | null>(null);
    const [volume, setVolume] = useState(50);

    const onReady = (event: { target: YouTubePlayer }) => {
        setVideo(event.target);
        onClick();

    }
    const onEnd = (event: { target: YouTubePlayer }) => event.target.playVideo();

    const onClick = (): void => {
        if(video) {
            setMuted(!muted);
            if(muted) {
                video?.mute();
            } else {
                video?.unMute();
            }
        }
    }

    useEffect(() => video?.setVolume(volume), [video, volume]);
    
    const videoOptions: Options = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
        }
      };

    return (
        <div className="dash">
            <div className="video-container">
                <YouTube
                    videoId="EwF1SJhedzI"
                    opts={videoOptions}
                    containerClassName="video"
                    onEnd={onEnd}
                    onReady={onReady}
                />
            </div>
            <div className="content">
                <Navbar clicked={onClick} muted={!muted} volume={volume} setVolume={setVolume} />
                <Overlay />
            </div>
            <Discontinued />
        </div>
    )
}

export default Body;
