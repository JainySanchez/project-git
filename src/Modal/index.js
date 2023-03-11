import React from 'react';
//Reactdom para renderizar nuestro modal en el dom
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal ({children}){
    //Reactdom tiene este metoto para crear portales
    return ReactDOM.createPortal(
        <div className = "ModalBackground">
            {children}
        </div>,
        document.getElementById('modal'));
}

export  {Modal };
