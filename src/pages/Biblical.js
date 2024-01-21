import biblical from "../images/BiblicalClasses.jpg"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

export default function Biblical() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={biblical} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "black", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>BIBLICAL CLASSES</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Biblical Classes</p>
            </div>
            <div className="differentClasses">
                <ul className="biblicalInfoClasses">
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Christian Biography A & B</p>
                            <p className="classesInfoDescription">Readings in select Christian heroes of faith and their impact on history and the world</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Old Testament</p>
                            <p className="classesInfoDescription">Survey of the books of the Old Testament and their major themes</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">New Testament</p>
                            <p className="classesInfoDescription">Survey of the books of the New Testament and their major themes</p>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}