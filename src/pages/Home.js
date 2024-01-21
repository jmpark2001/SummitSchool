import omc from "../images/OMCLogo.png"
import biblical from "../images/Biblical.jpg"
import language from "../images/Language.jpg"
import instrument from "../images/Instruments.jpg"
import academic from "../images/Academic.jpg"
import kindergarten from "../images/Kindergarten.jpg"
import pe from "../images/PE.jpg"
import { Link } from "react-router-dom"
// import Footer from "../components/Footer"


export default function Home() {
    return (
        <div className="homePage">
            <div className="homeDiv">
                <div className="homeTitleDiv">
                    <img src={omc} className="omcLogo" alt=""></img>
                    <div className="homeTitle">
                        <p className="summit">SUMMIT&nbsp;SCHOOL</p>
                        <p className="homeSubtitle glacial">Platform, Watchtower, and Antenna for our future generations.</p>
                    </div>
                </div>
                <p className="warning"></p>
            </div>
            <div className="fallSemester">
                <p style={{margin: "1rem 0"}}>2024 SPRING SEMESTER</p>
                <p className="fallSemesterText glacial">Registration for the spring semester starts on Jan 22 and will end on Feb 11.</p>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "4vh"}}>
                    <Link to={"/registration"} style={{textDecoration: "none", display: "flex"}}>
                        <div className="registerNow playfair">
                            REGISTER NOW
                        </div>
                    </Link>
                </div>
            </div>
            <hr style={{borderWidth: "0 0 clamp(0.2rem, 0.1591rem + 0.1818vw, 0.45rem) 0", borderColor: "black", borderStyle: "solid", width: "20%", margin: "clamp(4rem, 2.3333rem + 7.4074vw, 9rem) 0 0 0"}}></hr>
            <p className="classesForFall">CLASSES FOR SPRING 2024</p>
            <div className="homeLinksGrid">
                <Link to={"/biblical"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={biblical} alt=""></img>
                        <p className="homeLinkTitles">BIBLICAL</p>
                    </div>
                </Link>
                <Link to={"/language"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={language} alt=""></img>
                        <p className="homeLinkTitles">LANGUAGE</p>
                    </div>
                </Link>  
                <Link to={"/instrument"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={instrument} alt=""></img>
                        <p className="homeLinkTitles">INSTRUMENTS</p>
                    </div>
                </Link>  
                <Link to={"/academic"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={academic} alt=""></img>
                        <p className="homeLinkTitles">ACADEMIC</p>
                    </div>
                </Link>  
                <Link to={"/kindergarten"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={kindergarten} alt=""></img>
                        <p style={{top: "45%", lineHeight: "normal"}} className="homeLinkTitles">PRE-K/ KINDERGARTEN</p>
                    </div>
                </Link>  
                <Link to={"/pe"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={pe} alt=""></img>
                        <p style={{top: "45%", lineHeight: "normal"}} className="homeLinkTitles">PHYSICAL EDUCATION</p>
                    </div>
                </Link>  
            </div>
            <div style={{display: "relative", margin: "10vh 0"}}>
                <div className="classScheduleBanner">
                    <p>Classes are held every Saturday except Remnant Day (Last Saturday of every month) from 3/2 to 6/1</p>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}