import classInfo from "../images/classInfo.jpg"
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

export default function ClassInfo() {
    const classList = ["Christ in the Old Testament", "Major Prophets", "Worship and Praise", "Christian Reading", "Korean", "Spanish", "Chinese", "Adult Korean", "Adult English", "Flute", "Piano", "Reading",
         "Writing", "Tutoring Math", "Tutoring English", "Pre-K/K", "Basketball", "Badminton", "Weight Training", "Introduction to Chess"]

    return (
        <div className="classInfoPage">
            <div className="classInfoBanner">
                <img src={classInfo} className="classInfoBanners" alt=""></img>
                <p className="playfair" style={{position:"absolute", margin: "0", color: "white", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>FALL 2023 CLASS INFORMATION</p>
            </div>
            <div className="backToHomeDiv" style={{width: "90%", marginLeft: "auto", marginRight: "auto", textAlign: "left"}}>
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "5rem 0 0"}}>&nbsp;/ Class Information</p>
            </div>
            <div className="classInfo">
                <p style={{color: "#B56727", margin: "2rem auto"}}><b>Welcome to One Mind Church Summit School!</b></p>
                <p><b>REGISTRATION</b></p>
                <p>Registration for the fall semester starts on August 4th and will end on August 18th (Orientation for parents will be on September 7th)</p>
                <br/><br/>
                <p><b>2024 FALL SEMESTER</b></p>
                <p>The fall semeseter begins on September 14th and ends on January 18th</p>
                <br/><br/>
                <p><b>SCHEDULE</b></p>
                <p>Summit School classes will take place every Saturday from 9AM - 1:30PM</p>
                <br/>
                <p>9AM - 9:15AM: Praise</p>
                <p>9:15AM - 9:40AM: Message</p>
                <p>9:40AM - 9:55AM: Forum</p>
                <p>10AM - 10:50AM: 1st Class</p>
                <p>11AM - 11:50AM: 2nd Class</p>
                <p>12PM - 12:30PM: Lunch</p>
                <p>12:40PM - 1:30PM: 3rd Class</p>
                <br/>
                <p>Students can select up to three classes of their choice. Pre-K/Kindergarten students will only have their Pre-K/Kindergarten class  from 10AM - 12PM</p>
                <br/><br/>
                <p><b>FEE</b></p>
                <p>The fee for summit school will be $250 per semester for the first child, $200 for the second child, and $150 for any additional children. Payment information can be found on the registration form.</p>
                <br/>
            </div>
            <div className="classInfoClassesDiv">
                <div className="classInfoClasses glacial">
                    <p style={{margin: "0", marginTop: "clamp(1.5rem, 1.2545rem + 1.0909vw, 3rem)"}}>Click on the class categories to find more information about the classes.</p>
                    <p className="classInfoDivTitle"><b><CustomLink to="/biblical" className="backToHome" style={{color: "#B56727"}}>BIBLICAL</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(0, 4).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/language" className="backToHome" style={{color: "#B56727"}}>LANGUAGE</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(4, 9).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/instrument" className="backToHome" style={{color: "#B56727"}}>INSTRUMENT</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(9, 11).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/academic" className="backToHome" style={{color: "#B56727"}}>ACADEMIC</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(11,15).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/kindergarten" className="backToHome" style={{color: "#B56727"}}>PRE-K / Kindergarten</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(15,16).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/pe" className="backToHome" style={{color: "#B56727"}}>PHYSICAL EDUCATION</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(16, 19).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>
                    <p className="classInfoDivTitle"><b><CustomLink to="/chess" className="backToHome" style={{color: "#B56727"}}>CHESS</CustomLink></b></p>
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