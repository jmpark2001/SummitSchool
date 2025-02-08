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
                            <p className="classesInfoTitle">Christian Reading</p>
                            <p className="classesInfoDescription">In this class, we will be reading on heroes of faith in the 19-20th century who changed the spiritual flow of America. Remnants
                            can learn to model after such individuals.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Acts</p>
                            <p className="classesInfoDescription">DESCRIPTION</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">The Gospel of John</p>
                            <p className="classesInfoDescription">DESCRIPTION</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Praise and Worship</p>
                            <p className="classesInfoDescription">In this course, remnants will learn what the meaning of praise is, how to prepare praise, and our posture regarding praise. We
                                will also look into different kinds of Christian praises.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Hebrews</p>
                            <p className="classesInfoDescription">DESCRIPTION</p>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}