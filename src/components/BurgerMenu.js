// import { slide as Menu } from 'react-burger-menu'
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { useState } from 'react';

export default function BurgerMenu () {
    const [open, setOpen] = useState(false);
    
    return (
        // <div style={{position: "fixed", width: "5%", backgroundColor: "black", top: "0%", right: "0%", zIndex: "10"}}>
        //     <Menu right>
        //         <CustomLink to="/" className="menu-item">HOME</CustomLink>
        //         <CustomLink to="/about" className="menu-item">ABOUT</CustomLink> 
        //         <CustomLink to="/classInfo" className="menu-item">CLASS INFORMATION</CustomLink>
        //         <CustomLink to="/registration" className="menu-item">REGISTRATION</CustomLink>
        //         <CustomLink to="/staff" className="menu-item">STAFF</CustomLink>
        //     </Menu>
        //     <div style={{position: "relative", width: "4vh", color: "white", top: "1.2%", right: "1%", fontSize: "1.75vh"}}>
        //         MENU
        //     </div>  
        // </div>
        <div className='burgerMenu'>
            <Burger open={open} setOpen={setOpen}/>
            <div style={{color: "white", fontSize: "clamp(1rem, 0.8364rem + 0.7273vw, 2rem)", zIndex: "1000"}}>
                MENU
            </div>
            <Menu open={open} setOpen={setOpen}/>
        </div>
    )
}