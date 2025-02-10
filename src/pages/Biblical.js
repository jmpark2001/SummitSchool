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
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Biblical Classes</p>
            </div>
            <div className="differentClasses">
                <ul className="biblicalInfoClasses">
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Acts</p>
                            <p className="classesInfoDescription">In this class we will identify the purpose of the book of Acts based on its introduction, the continuing work of Christ, the continuing work of the Holy Spirit, the continuing work of the believer/church, and proclaim the gospel clearly as we examine the 10 sermons of Peter, Stephen, and Paul.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Philippians</p>
                            <p className="classesInfoDescription">In the four short chapters of his epistle to the Philippians, the word 'joy' or 'rejoicing' appears 19 times —from a Roman prison with Paul. I believe if you take the time to study this epistle and pray through it, you will be one who rejoices in any circumstance.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">The Gospel of John</p>
                            <p className="classesInfoDescription">There are two objectives of this course – first, to provide an overview of the entire book of John with all of its themes and motifs, and second, to do some detailed exegetical analysis of some of the key themes that stand out in John (eg, Jesus as the light, shepherd, living water, etc.).  Based upon the age group of the class, we will have presentations by students, watching informative videos on the subject at hand, and other media applications.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">The Gospel Letters</p>
                            <p className="classesInfoDescription">In this class we will go over the 10 gospel letters starting with why are people unhappy all the way to the 10th letter which is why does sickness depart when you pray. This class will only be taught in korean.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Christian Reading</p>
                            <p className="classesInfoDescription">In this class, we will be reading on heroes of faith in the 19-20th century who changed the spiritual flow of America. Remnants
                            can learn to model after such individuals.</p>  
                        </div>
                    </li>
                    <li>
                        <div className="biblicalInfoClassesList">
                            <p className="classesInfoTitle">Praise and Worship</p>
                            <p className="classesInfoDescription">In this course, remnants will learn what the meaning of praise is, how to prepare praise, and our posture regarding praise. We
                                will also look into different kinds of Christian praises.</p>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}