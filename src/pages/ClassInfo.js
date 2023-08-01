export default function ClassInfo() {
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Japanese Beginner", "Japanese Intermediate", "Japanese Advanced", "Adult Korean Beginner", "Adult Korean Intermediate", "Adult Korean Advanced", "Adult English Baginner", 
     "Adult English Intermediate", "Adult English Advanced", "Guitar Beginner", "Guitar Some Experience", "Guitar Advanced", "Piano Beginner", "Piano Some Experience", "Piano Advanced", "Flute Beginner", "Flute Some Experience", "Flute Advanced",
     "Violin Beginner", "Violin Some Experience", "Violin Advanced", "SAT Math", "SAT English"]

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="classInfo">
                <p>Welcome to One Mind Church Summit School!</p><br/>
                <p>Registration for the fall semester starts on August 13th and will end on September 3rd.</p>
                <p>Summit School classes will take place every Saturday from 9am-12pm. From 9-10 we will have worship and two classes will occur at 10-11 and 11-12. Students are required to take at least 1 biblical class and can take 1 class of their choice.</p>
                <p>The fall semester begins on September 16th and ends on January 20th.</p>
                <p>The fee for summit school will be $200 per semester and the payment information will be on the registration page.</p>
                <p>Contact Encourager Christine Baek for more information about the classes.</p>
                <div className="classInfoClasses">
                    <div className="classInfoDiv">
                        <p className="classInfoTitles">Biblical Classes</p>
                        <ul className="classInfoClassesUl">
                            {classList.slice(0, 5).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>  
                    </div>
                    <div className="classInfoDiv">
                        <p className="classInfoTitles">Language Classes</p>
                        <ul className="classInfoClassesUl">
                            {classList.slice(5, 23).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="classInfoDiv">
                        <p className="classInfoTitles">Instrument Classes</p>
                        <ul className="classInfoClassesUl">
                            {classList.slice(23, 35).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="classInfoDiv">
                        <p className="classInfoTitles">Academic Classes</p>
                        <ul className="classInfoClassesUl">
                            {classList.slice(35).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}