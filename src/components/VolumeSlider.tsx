import "./VolumeSlider.css";

type VolumeProps = {
    volume: number,
    setVolume(volume: number): void,
    style: React.CSSProperties,
    visible: boolean,
}

const VolumeSlider = ({volume, setVolume, style, visible}: VolumeProps) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setVolume(Number(event?.currentTarget?.value));

    return (
        <input type="range" min={0} max={100} value={volume} className={`volume-slider ${visible ? "visible" : "hidden"}`} onChange={onChange} style={style} />
    )
}

export default VolumeSlider
