import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import "./RoundedButton.css";

export type RoundedButtonProps = {
    text: string,
    icon: IconDefinition,
    onClick?: any,
}

const RoundedButton = ({text, icon, onClick}: RoundedButtonProps) => {
    return (
        <div className="rounded-button" onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
            {text}
        </div>
    )
}

export default RoundedButton
