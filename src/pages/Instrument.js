import instrument from "../images/InstrumentsClasses.jpg"
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

export default function Instrument() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={instrument} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "white", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>INSTRUMENT CLASSES</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;/ Instrument Classes</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Guitar, Piano, Flute, Violin, Drums </p>
                    <p className="glacial">Anyone interested in learning an instrument is welcome to enroll. Students will be placed into classes according to their skill level.</p>
                    <p className="glacial" style={{fontWeight: "900"}}>*Students must prepare their own instruments before classes begin*</p>
                    <p className="glacial">**All instrument classes are currently tentative. If you sign up for an instrument class and it becomes unavailable, you will be able to sign up for a different class.</p>
                </div>    
            </div>
            
        </div>
    )
}