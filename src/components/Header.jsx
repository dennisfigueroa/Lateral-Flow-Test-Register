import React from 'react';
import Logo from '../assets/cig-header-logo.svg';
import GOVKYLogo from '../assets/govky-logo.svg';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function Footer() {
    return (
        <>
        <div id="message-bar">
        <div id="govky-container">
            <img src={GOVKYLogo} alt="Cayman Islands Government Logo"/>
        </div>
    </div>
    <div className="regular-container header-shadow">

        <nav className="navbar navbar-expand-md " style={{paddingTop:'20px', display:'flex', fontWeight: 'bold'}}>
            <div className="logo-container" style={{flex:'50%', display:'flex', fontSize: '18px',color:'#2c3e50'}}>
                <div style={{margin:'10px'}}><img src= {Logo} width="217px" alt="Header"/></div>
                <div class = "hidenav" style={{marginTop:'35px', paddingLeft:'1px', marginLeft:'10px'}}><span style={{borderLeft: '1px solid'}}>&nbsp;&nbsp;&nbsp;   Lateral Flow Test</span></div>
            </div>
        </nav>


    </div>
    </>
    );
}
