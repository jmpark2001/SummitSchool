import language from "../images/LanguageClasses.jpg"
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

export default function Language() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={language} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "black", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>LANGUAGE CLASSES</p>
            </div>
            <div className="backToHomeDivOther">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/ </p>
                <CustomLink to="/classInfo" className="backToHome" style={{marginLeft: "0"}}>Class Information</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "2rem 0 0"}}>&nbsp;&nbsp;/&nbsp;&nbsp;Language Classes</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">K-12 (Korean, Chinese - Mandarin, Spanish)</p>
                    <p className="glacial">
                        Language classes are provided for students from grades 1 through 12. Students will learn grammar and vocabulary, practice what they learn,
                            and engage in conversations. We will also teach aspects of society and culture of the country to deepen their understanding of the respective languages.
                    </p>
                    <p className="glacial" style={{fontWeight: "900"}}>
                        *All students will be placed into beginner, intermediate, or advanced classes through a placement test.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Adults (Korean, English)</p>
                    <p className="glacial">Language classes for adults will focus on scenarios that are relevant to their fields. With higher lever grammar and vocabulary, students will be able to engage in conversations accordingly.</p>
                    <p className="glacial" style={{fontWeight: "900"}}>
                        *All students will be placed into beginner, intermediate, or advanced classes through a placement test.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Foundation of Interpretation (Eng-Kor)</p>
                    <p className="glacial">This interpretation class will raise up interpreters that God will use for message interpretation. Students will learn the etiquette for message interpretation and what to prepare before interpreting.
                         This class is not intended to be a language class to learn Korean or English.</p>
                    <p className="glacial" style={{fontWeight: "900"}}>
                        *This class is for high school students and above.
                    </p>
                </div>
            </div>   
        </div>
        
    )
}