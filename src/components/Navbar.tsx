import './Navbar.css';

import logo from '../assets/logo.png';
import RoundedButton from './RoundedButton';
import IconButton from './IconButton';

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import VolumeSlider from './VolumeSlider';

type NavbarProps = {
    clicked: any,
    muted: boolean,
    volume: number,
    setVolume(volume: number): void,
}

const Navbar = ({clicked, muted, volume, setVolume}: NavbarProps) => {
    return (
        <div className="nav-container">
            <div className="nav">
                <RoundedButton text="Discord" icon={faDiscord} onClick={() => window.open("https://discord.gg/UcacAKJQYs", "_blank")}/>
                <img src={logo} alt="logo" className="logo" />
                <RoundedButton text="Purchase" icon={faShoppingCart} onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self")?.focus()}/>
            </div>
            <div className="end">
                <IconButton icon={muted ? faVolumeMute : faVolumeUp} size={"1x"} onClick={clicked}/> 
                <VolumeSlider volume={volume} setVolume={setVolume} style={{right: `${!muted ? "5%" : "-10%"}` }} visible={!muted} />
            </div>
        </div>
    )
}

export default Navbar
