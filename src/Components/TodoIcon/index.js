import React from 'react';
import './TodoIcon.css'
import { ReactComponent as NameIcon } from './loader.png';

function TodoIcon({type,color,onClick}){
    <span
        className={`Icon-container Icon-container--${type}`}
        onClick = {onClick}
    >
    <NameIcon className = "..." fill="color del icono"/>
    </span>
    
}

export {TodoIcon}