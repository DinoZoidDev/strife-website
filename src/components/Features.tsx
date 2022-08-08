import Card from './Card';
import { faPaintBrush, faBomb, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

import "./Features.css";

const Features = () => {
    return (
        <div id="features">
            <div className="section-title">Features</div>
            <hr className="section-divider" />
            <div className="cards">
                <Card 
                title="Customization" 
                description="Strife brings customization to the next level, with many ways to configure your modules!" 
                icon={faPaintBrush} size={"2x"} color={"crimson"} descriptionColor={"#a1a1a1"} />
                <Card 
                title="Bypasses" 
                description="Strife has various and unique bypasses for many servers!" 
                icon={faBomb} size={"2x"} color={"crimson"} descriptionColor={"#a1a1a1"} />
                <Card 
                title="Support" 
                description="Strife has amazing client support that is always active and ready to help you with any of your needs!" 
                icon={faTicketAlt} size={"2x"} color={"crimson"} descriptionColor={"#a1a1a1"} />
            </div>
        </div>
    )
}

export default Features
