import { slide as Menu } from 'react-burger-menu'
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function BurgerMenu () {
    return (
        <div style={{position: "fixed", width: "11.3vh", height: "5vh", backgroundColor: "black", top: "0%", right: "0%", zIndex: "10"}}>
            <Menu right>
                <CustomLink to="/" className="menu-item">HOME</CustomLink>
                <CustomLink to="/about" className="menu-item">ABOUT</CustomLink> 
                <CustomLink to="/classInfo" className="menu-item">CLASS INFORMATION</CustomLink>
                <CustomLink to="/registration" className="menu-item">REGISTRATION</CustomLink>
                <CustomLink to="/staff" className="menu-item">STAFF</CustomLink>
            </Menu>
            <div style={{position: 'fixed', width: "4vh", color: "white", top: "1.2%", right: "1%", fontSize: "1.75vh"}}>
                MENU
            </div>  
        </div>
        
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}