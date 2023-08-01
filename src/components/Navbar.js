import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">HOME</CustomLink>
                <p className="navBorder">|</p>
                <CustomLink to="/about">ABOUT</CustomLink> 
                <p className="navBorder">|</p>               
                <CustomLink to="/classInfo">CLASS INFORMATION</CustomLink>
                <p className="navBorder">|</p>
                <CustomLink to="/registration">REGISTRATION</CustomLink>
                <p className="navBorder">|</p>
                <CustomLink to="/staff">STAFF</CustomLink>
            </ul>
        </nav>    
        
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