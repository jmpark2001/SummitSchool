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
                        Basketball class will allow students to learn the basics of basketball as well as giving opportunities to play basketball.
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
                        Students can participate in learning the rules of badminton and play with one another.
                    </p>
                </div>
                {/* <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Wrestling</p>
                    <p className="glacial">This class will introduce students to the basics of wrestling and teach them level appropriate wrestling moves. (Students grades 6 and up)</p>
                </div> */}
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Ping Pong</p>
                    <p className="glacial">This class is for students wanting to learn how to play ping pong. Students will learn how to hold the paddle as well as forms and techniques.</p>
                </div>
            </div> 
        </div>
    )
}