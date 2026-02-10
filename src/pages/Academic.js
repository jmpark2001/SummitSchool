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
                    <p className="classesInfoTitle">Pre-K/Kindergarten</p>
                    <p className="glacial">This program is for children between the ages 3 to 5. They will be nurturing their developmental skills as well as learning the alphabet, learning how to count, and participating in arts and crafts. This class runs from 10:30AM to 12:20PM (2 class periods).</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Reading and Writing</p>
                    <p className="glacial">Reading and writing are taught using textbooks appropriate for the grade level, and learning is also provided to improve reading comprehension and writing skills.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Math & Math Tutoring</p>
                    <p className="glacial">This class is intended to bolster students' grade level appropriate math skill as well as prepare them for the next grade level.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Science (Chemistry and Physics)</p>
                    <p className="glacial">Personalized tutoring focused on building understanding and confidence in chemistry and physics. Students receive clear explanations, problem-solving support, and help mastering key concepts.</p>
                </div>
            </div>
        </div>
    )
}