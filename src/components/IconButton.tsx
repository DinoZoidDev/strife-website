import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import "./IconButton.css";

export type IconButtonProps = {
    icon: IconDefinition;
    size?: SizeProp,
    onClick?: any,
    style?: React.CSSProperties,
}

const IconButton = ({icon, size, onClick, style}: IconButtonProps) => {
    return (
        <div className={`icon-button ${icon.iconName}-icon`}>
            <FontAwesomeIcon icon={icon} size={size} onClick={onClick} style={style} />
        </div>
    )
}

export default IconButton
