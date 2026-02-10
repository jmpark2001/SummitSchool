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
                <p style={{position:"absolute", margin: "0", color: "white", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>SPORTS CLASSES</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Sports Classes</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Basketball</p>
                    <p className="glacial">
                        Students learn fundamental basketball skills including dribbling, passing, shooting, and teamwork. This class builds coordination, confidence, and sportsmansihp in a fun and active environment.
                    </p>
                </div>
                {/* <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Stretching and Mobility</p>
                    <p className="glacial">
                        Stretching and Mobility provides students a relaxing environment to stretch their bodies in a healthy way.
                    </p>
                </div> */}
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Badminton</p>
                    <p className="glacial">
                        Students learn the basics of badminton, including proper grip, footwork, serving, and gameplay. This class builds coordination, agility, and sportsmanship.
                    </p>
                </div>
                {/* <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Wrestling</p>
                    <p className="glacial">This class will introduce students to the basics of wrestling and teach them level appropriate wrestling moves. (Students grades 6 and up)</p>
                </div> */}
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Ping Pong</p>
                    <p className="glacial">Students learn basic ping pong skills such as grip, serves, and rallies while improving coordination and focus. The class promotes quick reflexes, confidence, and good sportsmanship in a fun environment.</p>
                    <p className="glacial" style={{fontWeight: "900"}}>*You must meet certain height requirements for this class.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Conditioning</p>
                    <p className="glacial">Conditioning is a high-energy class designed to help aspiring athletes and consistently active individuals build the capacity to withstand physical strain.
                         The class focuses on continuous movement, athletic drills, and short bursts of extreme high-intensity interval training to improve endurance, strength, and mental toughness.
                    </p>
                    <p className="glacial" style={{fontWeight: "900"}}>*This class is for 8th grade students and above.</p>
                </div>
            </div> 
        </div>
    )
}