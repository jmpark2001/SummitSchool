import chess from "../images/ChessClass.jpg"
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

export default function Chess() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={chess} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "white", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>EXTRACURRICULAR</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Extracurricular Class</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Chess</p>
                    <p className="glacial">
                        This class is for students wanting to learn chess. This includes how each piece moves, beginner openings and fundamental chess strategies. There is an advanced class option for students who
                        are familiar with the basics of chess.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Counseling</p>
                    <p className="glacial">
                        This class is designed to help and counsel the youth to be ready to tackle many of life's challenges facing them today. We will use biblical principles and 
                        wisdom, to enable them to stand on a solid foundation when going through trials. This semester, we will be exploring the writings of the apostle Paul, mainly
                        the epistle of Paul to the Phillippians. In addition, the class will incorporate learning techniques to allow students to play guitar quicker than conventional methods.
                        This skill is helpful for those who wish to play an important role, contributing to worship teams, or simply playing guitar for fun.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Art</p>
                    <p className="glacial">
                        This course introduces students to the fundamentals of visual art through a structured, yet creative approach. Students will explore color perception,
                        basic drawing and form, and guided creative projects. The class encourages careful observation, artistic confidence, and personal expression in a supportive
                        learning environment.
                    </p>
                </div>
            </div>
        </div>
    )
}