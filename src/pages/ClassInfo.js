import classInfo from "../images/classInfo.jpg"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { EXCEL_FILE_BASE64 } from "../components/Constants";
import FileSaver from "file-saver";

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
    const classList = ["새생명 새생활", "Galatians", "1 Thessalonians", "The Gospels (Matthew, Mark, Luke)", "Contemporary Discussions", "Praise and Worship", "Korean", "Spanish", "Chinese", "Adult Korean", "Adult English", "Drums",
         "Pre-K/Kindergarten", "Reading and Writing", "Math Tutoring", "Basketball", "Badminton", "Wrestling", "Ping Pong", "Chess", "Media Photography"]

    const handleDownload = () => {
        let dataBlob = EXCEL_FILE_BASE64;
        let sliceSize = 1024;
        let byteCharacters = atob(dataBlob);
        let bytesLength = byteCharacters.length;
        let slicesCount = Math.ceil(bytesLength / sliceSize);
        let byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            let begin = sliceIndex * sliceSize;
            let end = Math.min(begin + sliceSize, bytesLength);
            let bytes = new Array(end - begin);
            for (var offset = begin, i=0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        let blob = new Blob(byteArrays, { type: 'application/vnd.ms-excel'});
        FileSaver.saveAs(new Blob([blob], {}), "SpringSemesterFinancialAid.xlsx");
    }

    return (
        <div className="classInfoPage">
            <div className="classInfoBanner">
                <img src={classInfo} className="classInfoBanners" alt=""></img>
                <p className="playfair" style={{position:"absolute", margin: "0", color: "white", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>SPRING 2025 CLASS INFORMATION</p>
            </div>
            <div className="backToHomeDiv" style={{width: "90%", marginLeft: "auto", marginRight: "auto", textAlign: "left"}}>
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "5rem 0 0"}}>&nbsp;/ Class Information</p>
            </div>
            <div className="classInfo">
                <p style={{color: "#B56727", margin: "2rem auto"}}><b>Welcome to One Mind Church Summit School!</b></p>
                <p><b>REGISTRATION</b></p>
                <p>Registration for the fall semester starts on August 10th and will end on August 24th</p>
                <br/><br/>
                <p><b>2025 FALL SEMESTER</b></p>
                <p>The fall semeseter begins on September (smth) and ends on December (smth)</p>
                <br/><br/>
                <p><b>SCHEDULE</b></p>
                <p>Summit School classes will take place every Saturday from 9:30AM - 2:00PM. (No classes the last saturday of the month)</p>
                <br/>
                <p>9:30AM - 10:20AM: Praise and Worship</p>
                <p>10:30AM - 11:20AM: Class A</p>
                <p>11:30AM - 12:20AM: Class B</p>
                <p>12:30PM - 12:50PM: Lunch</p>
                <p>1:00PM - 1:50PM: Class C</p>
                <br/>
                <p>All students are required to take:</p>
                <p>1 Bible class</p> 
                <p>1 Language/Instrument/Academic class</p>
                <p>1 Sports/Extracurricular class</p>
                <p>Pre-K/Kindergarten students will only have their Pre-K/Kindergarten class from 10:30AM - 12:20PM.</p>
                <br/><br/>
                <p><b>FEES</b></p>
                <p>Fees for students</p>
                <div class="feeGrid">
                    <div>1 Student</div>
                    <div>$250</div>
                    <div>2 Students</div>  
                    <div>$200</div>
                    <div>Additional Students</div>
                    <div>$150</div>
                </div>
                <br></br>
                <p>Fees for adults are per class</p>
                <div class="feeGrid">
                    <div>1 Class</div>
                    <div>$100</div>
                    <div>2 Classes</div>  
                    <div>$175</div>
                    <div>3 Classes</div>
                    <div>$250</div>
                </div>
                <br></br>
                <p>The fee for summit school will be $250 per semester for the first student, $200 for the second student, and $150 for any additional students. The fee for adults (college and up) will be $100 for 1 class, $175 for 2 classes, and $250 for 3 classes. Payment information can be found on the registration form.</p>
                {/* <p style={{color: "red", display: "inline"}}>*</p> */}
                <p className="instructions" style={{fontWeight: "bold", display: "inline"}}>If you need financial assistance, download this form and submit it to the admin team.</p>
                <br></br>
                <Button className="financialAid" onClick={handleDownload}>Download Financial Aid</Button>
                <br/>
            </div>
            <div className="classInfoClassesDiv">
                <div className="classInfoClasses glacial">
                    <p style={{margin: "0", marginTop: "clamp(1.5rem, 1.2545rem + 1.0909vw, 3rem)"}}>Click on the class categories to find more information about the classes.</p>
                    <p className="classInfoDivTitle"><b><CustomLink to="/biblical" className="backToHome" style={{color: "#B56727"}}>BIBLE</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(0, 6).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/language" className="backToHome" style={{color: "#B56727"}}>LANGUAGE</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(6, 11).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/instrument" className="backToHome" style={{color: "#B56727"}}>INSTRUMENT</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(11, 12).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>  
                    <p className="classInfoDivTitle"><b><CustomLink to="/academic" className="backToHome" style={{color: "#B56727"}}>ACADEMIC</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(12,15).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>
                    <p className="classInfoDivTitle"><b><CustomLink to="/pe" className="backToHome" style={{color: "#B56727"}}>SPORTS</CustomLink></b></p>
                    <ul className="classInfoClassesUl">
                        {classList.slice(15, 19).map((className, index) =>
                            <li key={index}>
                                <p>{className}</p>
                            </li>
                        )}
                    </ul>
                    <p className="classInfoDivTitle"><b><CustomLink to="/chess" className="backToHome" style={{color: "#B56727"}}>EXTRACURRICULAR</CustomLink></b></p>
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