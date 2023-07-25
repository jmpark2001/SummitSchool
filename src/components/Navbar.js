import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
                <CustomLink to="/registration">REGISTRATION</CustomLink>
                <CustomLink to="/classInfo">CLASS INFORMATION</CustomLink>
                <CustomLink to="/staff">STAFF</CustomLink>
            </ul>
        </nav>    
        
    )
}

function CustomLink({to, children, ...props}) {
    return (
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}