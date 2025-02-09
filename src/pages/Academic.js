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
                    <p className="glacial">This program is for children between the ages 3 to 5. They will be nurturing their developmental skills as well as basic reading, writing, math, and arts. Pre-K/Kindergarten students will only have one class from TIME to TIME.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Reading and Writing</p>
                    <p className="glacial">Reading and writing are taught using textbooks appropriate for the grade level, and learning is also provided to improve vocabulary and expressive skills.</p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Math</p>
                    <p className="glacial">Students can either bring their homework or get help on a specific subject like Algebra 1 or 2.</p>
                </div>
            </div>
        </div>
    )
}