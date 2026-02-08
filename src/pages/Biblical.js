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
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Bible Classes</p>
            </div>
            <div className="differentClasses">
                <ul className="biblicalInfoClasses">
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">New Life, New Living</p>
                            <p className="classesInfoDescription">Helping saved believers to put down deep roots in the gospel, aiding them in the healing of spiritual issues, emotional struggles,
                                and physical illnesses through spiritual restoration, and further helping them to live the life of an evangelist.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">5 Solas</p>
                            <p className="classesInfoDescription">1. Christ Alone 2. Faith Alone 3. God's Grace Alone 4. God's Gloary Alone 5. God's Word Alone. Teaching
                                the 5 Solas is essential to anchor christians in the core gospel message, distinguishing it from works-based theology. These Solas summarize
                                Reformation truths, emphasizing salvation is completely a divine gift that depends on God's Glory Alone.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Biblical Readership</p>
                            <p className="classesInfoDescription"> In this class, we will look at various figures in the Bible to understand what leadership is according to God's standard (biblical 
                                model). We will then compare this with wordly standards of leadership. Our goal is to understand and know the kind of leaders God is looking for in our day and age.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Contemporary Discussions</p>
                            <p className="classesInfoDescription">This class is designed to explore theological, biblical, and everyday questions. Its purpose is to help the remnant develop a 
                                strong biblical worldview and engage with Scripture in a way that challenges and informs practical, real-life application.
                            </p>
                            <p className="glacial" style={{fontWeight: "900"}}>
                                *This class is for high school students and above.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Praise and Worship</p>
                            <p className="classesInfoDescription">The purpose of the Praise and Worship class is to cultivate a deeper understanding and heart for worship through music and praise.
                                Remnants will explore the spiritual foundations of worship, the role of music in the church, and how to offer worship that is both heartfelt and rooted in the word.
                                This class equips remnants to engage God more fully in personal and corporate worship, and to serve with excellence and humility on the praise team or in their daily
                                lives as worshipers.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Youth Light Counseling with Guitar</p>
                            <p className="classesInfoDescription">
                                This class is designed to help and counsel the youth to be ready to tackle many of life's challenges facing them today. We will use biblical principles and 
                                wisdom, to enable them to stand on a solid foundation when going through trials. This semester, we will be exploring the writings of the apostle Paul, mainly
                                the epistle of Paul to the Phillippians. In addition, the class will incorporate learning techniques to allow students to play guitar quicker than conventional methods.
                                This skill is helpful for those who wish to play an important role, contributing to worship teams, or simply playing guitar for fun.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}