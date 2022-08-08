// import IconButton from './IconButton';
import "./Overlay.css";
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Overlay = () => {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <span className="title">Strife Client</span>
                <span className="subtitle">a hacked client</span>
                {/* <IconButton icon={faChevronDown} size={"2x"} /> */}
            </div>
        </div>
    )
}

export default Overlay
