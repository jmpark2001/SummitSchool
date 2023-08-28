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
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;/ Biblical Classes</p>
            </div>
            <div className="differentClasses">
                <ul className="biblicalInfoClasses">
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Biblical Worldview</p>
                            <p className="classesInfoDescription">This class will help you to have a gospel-centered perspective to interpret and understand what is going on in the world.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Church History</p>
                            <p className="classesInfoDescription">Survey or overview of church history (flow of covenant) from past to present.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Systematic Theology</p>
                            <p className="classesInfoDescription">Go over various doctrines found in the Bible (God, man, sin, Christ, etc.)</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Old Testament</p>
                            <p className="classesInfoDescription">Read through and discuss various books in the Old Testament</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">New Testament</p>
                            <p className="classesInfoDescription">Read through and discuss various books in the New Testament</p>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}