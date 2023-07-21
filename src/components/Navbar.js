export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="siteTitle"> Summit School</a>
            <ul>
                <li>
                    <a href="/registration">Registration</a>
                </li>
                <li>
                    <a href="/classInfo">Class Information</a>
                </li>
                <li>
                    <a href="/staff">Staff</a>
                </li>
            </ul>
        </nav>
    )
}