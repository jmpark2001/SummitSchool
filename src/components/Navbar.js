import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="title">
            <Link to="/" className="siteTitle">
                    Summit School
            </Link>
            <nav className="nav">
                <ul>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/registration">Registration</CustomLink>
                    <CustomLink to="/classInfo">Class Information</CustomLink>
                    <CustomLink to="/staff">Staff</CustomLink>
                </ul>
            </nav>    
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