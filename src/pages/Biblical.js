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
                            <p className="classesInfoTitle">Galatians</p>
                            <p className="classesInfoDescription">Galatians was written to explain the gospel as God's gift to mankind. In addition, Galatians was written to clear up false 
                                teachings about what some people were trying to add to Christ as our salvation's sufficiency. Christ alone saves with nothing added.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">1 Thessalonians</p>
                            <p className="classesInfoDescription">Some of the topics taught will be: Living as an example in hope, providing ultimate comfort to believers in suffering, living 
                                Christ-like in secular culture, etc. Some of the key words discussed will be: faith, love, patience, holiness, vigilance, and hope.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">The Gospels (Matthew, Mark, Luke)</p>
                            <p className="classesInfoDescription"> The earliest recording of Jesus' life and ministry is found in the Gospels of Matthew, Mark, and Luke. What do these Gospels 
                                reveal about the person and work of Jesus? What are the similarities and differences in these Gospel accounts? What are their main messages? Who were they written 
                                for and why? These are some of the questions we will answer in this class</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Contemporary Discussions</p>
                            <p className="classesInfoDescription">This class is designed to explore theological, biblical, and everyday questions. Its purpose is to help the remnant develop a 
                                strong biblical worldview and engage with Scripture in a way that challenges and informs practical, real-life application.</p>  
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
                </ul>
            </div>
        </div>
    )
}