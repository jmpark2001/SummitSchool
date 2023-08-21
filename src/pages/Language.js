import language from "../images/LanguageClasses.jpg"

export default function Language() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={language} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", top: "40%", color: "black", fontWeight: "900", fontSize: "6vh"}}>LANGUAGE CLASSES</p>
            </div>
            <div className="differentClasses" style={{flexDirection: "row", justifyContent: "center", alignItems: "stretch"}}>
                <div className="otherInfoDiv" style={{marginRight: "7%"}}>
                    <p className="classesInfoTitle">K-12 (Korean, English, Chinese, Japanese, Spanish)</p>
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
            </div>   
        </div>
        
    )
}