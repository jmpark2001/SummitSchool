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
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Instrument Classes</p>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <p className="glacial" style={{fontWeight: "900", fontSize: "1.5vh", color: "red", marginBottom: "0vh"}}>*Students must prepare their own drumsticks or flute before classes begin*</p>
                <p className="glacial" style={{fontWeight: "900", fontSize: "1.5vh", color: "red", marginBottom: "clamp(2rem, 1.5091rem + 2.1818vw, 5rem)"}}>*For guitar class, teacher will instruct the students when the class begins regarding instrument purchase.*</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Drums</p>
                    <p className="glacial">Learn rhythm, timing, and basic drumming techniques in a fun and energetic environment. Students will develop coordination, musical listening skills, and a strong sense of beat.</p>
                    <p className="glacial" style={{fontWeight: "900", fontSize: "1.5vh", marginBottom: "1vh"}}>Students will be placed into classes according to their skill level.</p>
                </div>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Flute</p>
                    <p className="glacial">Designed for beginners, this class introduces proper flute handling, breath control, and basic notes. Students will learn simple songs while building a strong musical foundation.</p>
                    <p className="glacial" style={{fontWeight: "900", fontSize: "1.5vh", marginBottom: "1vh"}}>*Only for first time beginners (offered only in class C session).</p>
                </div>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Piano</p>
                    <p className="glacial">Perfect for beginners, this class covers basic piano skills, finger placement, and simple melodies. Students will learn to read music and play confidently at their own pace.</p>
                    <p className="glacial" style={{fontWeight: "900", fontSize: "1.5vh", marginBottom: "1vh"}}>*Only for first time beginners (offered only in class C session).</p>
                </div>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Guitar</p>
                    <p className="glacial">Anyone interested in learning the guitar with little to no experience is welcome to enroll. This class will teach the basics and fundamentals of guitar.</p>
                    <p className="glacial" style={{fontWeight: "900", fontSize: "1.5vh", marginBottom: "1vh"}}>*Only for first time beginners.</p>
                </div>
            </div>
        </div>
    )
}