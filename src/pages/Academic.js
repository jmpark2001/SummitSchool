import academic from "../images/AcademicClasses.jpg"
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

export default function Academic() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={academic} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "white", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>ACADEMIC CLASSES</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Academic Classes</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">SAT Math Prep</p>
                    <p className="glacial">SAT math preparation will be offered to students in grades 9 through 12. Students under 9th grade will be offered SAT preparation classes on a case-by-case basis.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Tutoring (Math & English)</p>
                    <p className="glacial">Tutoring will be offered to students who are seeking additional help in their math or english skills outside of SAT preparation. These classes are catered towards school courses or general help with certain topics.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Coding</p>
                    <p className="glacial">Coding class will be available for students in 7th grade or above who want learn what coding is and how to code. The class will focus on learning the language Java and students will work a project by the end of the semester.</p>
                </div>
            </div>
        </div>
    )
}