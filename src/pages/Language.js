export default function Language() {
    return (
        <div style={{display: "flex", flexDirection: "columN", justifyContent: "center"}}>
            <div className="languageBanner">
                <div>
                    <p style={{fontSize: "4vh", fontWeight: "900", margin: 0, color: "black"}}>LANGUAGE CLASSES</p>
                </div>
            </div>
            <div className="differentClasses" style={{flexDirection: "row", justifyContent: "center", alignItems: "stretch"}}>
                <div className="otherInfoDiv" style={{marginRight: "7%"}}>
                    <p className="biblicalInfoClassesTitle">K-12 (Korean, English, Chinese, Japanese, Spanish)</p>
                    <p className="instrumentDescription">
                        Language classes are provided for students from grades 1 through 12. Students will learn grammar and vocabulary, practice what they learn,
                            and engage in conversations. We will also teach aspects of society and culture of the country to deepen their understanding of the respective languages.
                    </p>
                    <p style={{fontWeight: "900"}}>
                        *All students will be placed into beginner, intermediate, or advanced classes through a placement test.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="biblicalInfoClassesTitle">Adults (Korean, English)</p>
                    <p className="instrumentDescription">Language classes for adults will focus on scenarios that are relevant to their fields. With higher lever grammar and vocabulary, students will be able to engage in conversations accordingly.</p>
                    <p style={{fontWeight: "900"}}>
                        *All students will be placed into beginner, intermediate, or advanced classes through a placement test.
                    </p>
                </div>
            </div>   
        </div>
        
    )
}