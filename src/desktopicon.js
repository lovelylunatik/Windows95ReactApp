import React from 'react';
import icon from './Icons/computer.png'
import './index.css';


function DesktopIcon() {
    return ( 
    <div className="grid-container"> 
        <div className="icons">
            <img src={icon} alt="computer icon" className="computericon"/>
            <span>My Computer</span>
        </div>    
    </div>  
    )}

export default DesktopIcon;