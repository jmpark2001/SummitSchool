import pe from "../images/PEClasses.jpg"
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

export default function PE() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={pe} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "white", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>PHYSICAL EDUCATION CLASSES</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Physical Education Classes</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Basketball</p>
                    <p className="glacial">
                        Basketball class will allow students to learn the basics of basketball while getting exercise outside.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Badminton</p>
                    <p className="glacial"> Badminton class is a class where students can participate in learning the rules of badminton and play with one another.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Weight Training</p>
                    <p className="glacial">In this class, students will learn basic form, technique, and breathing for basic compound lifts such as squat, deadlift, and bench. This class is recommended for those who are in high school and above.</p>
                </div>
            </div> 
        </div>
    )
}