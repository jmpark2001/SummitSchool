import { Link } from "react-router-dom"

export default function ClassInfo() {
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean", "Spanish", "Chinese", "Japanese", "Adult Korean", "Adult English", "Guitar", "Piano", "Flute",
     "Violin", "Drum", "SAT Math", "SAT English"]

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="classInfo">
                <div style={{display: "flex", flexDirection: "column", margin: "0", height: "4vh", justifyContent: "center"}}>
                    <p>Welcome to One Mind Church Summit School!</p>
                </div>
                <br/>
                <p>Registration for the fall semester starts on August 13th and will end on September 3rd.</p>
                <p>Summit School classes will take place every Saturday from 9am-12pm. From 9-10 we will have worship and two classes will occur at 10-11 and 11-12. Students are required to take at least 1 biblical class and can take 1 class of their choice.</p>
                <p>The fall semester begins on September 16th and ends on January 20th.</p>
                <p>The fee for summit school will be $200 per semester and the payment information will be on the registration page.</p>
                <p>Click on the links below to see information about each class.</p>
                {/* <div className="classInfoClasses">
                    <div className="classInfoDiv">
                        <Link to={"/biblical"} className="classInfoTitles">Biblical Classes</Link>
                    </div>
                    <div className="classInfoDiv">
                        <Link to={"/language"} className="classInfoTitles">Language Classes</Link>
                    </div>
                    <div className="classInfoDiv">
                        <Link to={"/instrument"} className="classInfoTitles">Instrument Classes</Link>
                    </div>
                    <div className="classInfoDiv">
                        <Link to={"/academic"} className="classInfoTitles">Academic Classes</Link>
                    </div>
                </div> */}
                
                <div className="classInfoClasses">
                    <div className="classInfoDiv">
                        <Link to={"/biblical"} className="classInfoTitles">Biblical Classes</Link>
                        <ul className="classInfoClassesUl">
                            {classList.slice(0, 5).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>  
                    </div>
                    <div className="classInfoDiv">
                        <Link to={"/language"} className="classInfoTitles">Language Classes</Link>
                        <ul className="classInfoClassesUl">
                            {classList.slice(5, 11).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="classInfoDiv">
                        <Link to={"/instrument"} className="classInfoTitles">Instrument Classes</Link>
                        <ul className="classInfoClassesUl">
                            {classList.slice(11, 16).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="classInfoDiv">
                        <Link to={"/academic"} className="classInfoTitles">Academic Classes</Link>
                        <ul className="classInfoClassesUl">
                            {classList.slice(16).map((className, index) =>
                                <li key={index}>
                                    <p>{className}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <p style={{marginTop: "3vh"}}>Contact Encourager Christine Baek if you have any additional questions about the classes.</p>
            </div>
        </div>
    )
}