import classInfo from "../images/classInfo.jpg"

export default function ClassInfo() {
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean", "Spanish", "Chinese", "Japanese", "Adult Korean", "Adult English", "Guitar", "Piano", "Flute",
     "Violin", "Drum", "SAT Math", "SAT English","Pre-K/K", "Basketball", "Stretching and Mobility"]

    return (
        <div className="classInfoPage">
            <div className="classInfoBanner">
                <img src={classInfo} className="classInfoBanners" alt=""></img>
                <p className="playfair" style={{position:"absolute", margin: "0", color: "white", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>FALL 2023 CLASS INFORMATION</p>
            </div>
            <div className="classInfo">
                <p style={{color: "#B56727", margin: "2rem auto"}}><b>Welcome to One Mind Church Summit School!</b></p>
                <p><b>REGISTRATION</b></p>
                <p>Registration for the fall semester starts on August 14th and will end on September 3rd.</p>
                <br/><br/>
                <p><b>2023 FALL SEMESTER</b></p>
                <p>The fall semeseter begins on September 16th and ends on January 20th</p>
                <br/><br/>
                <p><b>SCHEDULE</b></p>
                <p>Summit School Classes will take place every Saturday from 9am-12pm</p>
                <br/>
                <p>9AM - 10AM: Worship</p>
                <p>10AM - 11AM: 1st Class</p>
                <p>11AM - 12PM: 2nd Class</p>
                <br/>
                <p>Students are required to take at least 1 biblical class. Students can select 1 other class of their choice.</p>
                <br/><br/>
                <p><b>FEE</b></p>
                <p>The fee for summit school will be $200 per semester. Payment information can be found on the registration form.</p>
                <br/>
            </div>
            <div className="classInfoClassesDiv">
                <div className="classInfoClasses glacial">
                    <p className="classInfoDivTitle"><b>BIBLICAL</b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(0, 5).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b>LANGUAGE</b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(5, 11).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b>INSTRUMENT</b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(11, 16).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b>ACADEMIC</b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(16,18).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b>Pre-K / Kindergarten</b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(18,19).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b>Physical Education</b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(19).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                </div>
                <p style={{marginTop: "clamp(1.2rem, 1.0691rem + 0.5818vw, 2rem)", fontSize: "clamp(1.2rem, 1.0691rem + 0.5818vw, 2rem)"}}>Send an email to Summitschool@237omc.org if you have any additional questions about the classes.</p>
            </div>
        </div>
    )
}