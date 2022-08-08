import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import "./Card.css";

type CardProps = {
    title: string,
    description: string,
    icon: IconDefinition,
    size?: SizeProp,
    descriptionColor?: string,
    color?: string,
}

const Card = ({title, description, icon, size, descriptionColor, color}: CardProps) => {
    return (
        <div className="card">
            <div className="card-header">
                <FontAwesomeIcon icon={icon} size={size} color={color}/>
                <div className="card-title">{title}</div>
            </div>
            <div className="card-description" style={{ color: `${descriptionColor}`}}>{description}</div>
        </div>
    )
}

export default Card
