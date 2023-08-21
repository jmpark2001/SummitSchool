import omc from "../images/OMCLogo.png"
import biblical from "../images/Biblical.jpg"
import language from "../images/Language.jpg"
import instrument from "../images/Instruments.jpg"
import academic from "../images/Academic.jpg"
import kindergarten from "../images/Kindergarten.jpg"
import pe from "../images/PE.jpg"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="homePage">
            <div className="homeDiv">
                <div className="homeTitleDiv">
                    <img src={omc} className="omcLogo" alt=""></img>
                    <div className="homeTitle">
                        <p className="summit">SUMMIT&nbsp;SCHOOL</p>
                        <p className="homeSubtitle">Platform, Watchtower, and Antenna for our future generations.</p>
                    </div>
                </div>
                <p className="warning">For an ideal performance, use a desktop or a laptop when viewing the website</p>
            </div>
            <div className="fallSemester">
                <p style={{margin: "2vh 0"}}>FALL SEMESTER</p>
                <p style={{margin: "0 auto 2vh auto", width: "70%", fontWeight: "100", fontFamily: 'GlacialIndifferenceRegular, serif'}}>Registration for the fall semester starts on Aug 14 and will end on Sep 3.</p>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "4vh"}}>
                    <Link to={"/registration"} style={{textDecoration: "none", display: "flex", width: "fit-content"}}>
                        <div className="registerNow">
                            REGISTER NOW
                        </div>
                    </Link>
                </div>
            </div>
            <hr style={{borderWidth: "0 0 .5vh 0", borderColor: "black", borderStyle: "solid", width: "20%", margin: "10vh 0 0 0"}}></hr>
            <p className="classesForFall">CLASSES FOR FALL 2023</p>
            <div className="homeLinks">
                <Link to={"/biblical"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={biblical} alt=""></img>
                        <p style={{position:"absolute", top: "0%", right: "0%"}} className="homeLinkTitles">BIBLICAL</p>
                    </div>
                </Link>
                <Link to={"/language"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={language} alt=""></img>
                        <p style={{position:"absolute", top: "0%", right: "0%"}} className="homeLinkTitles">LANGUAGE</p>
                    </div>
                </Link>  
                <Link to={"/instrument"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={instrument} alt=""></img>
                        <p style={{position:"absolute", top: "0%", right: "0%"}} className="homeLinkTitles">INSTRUMENTS</p>
                    </div>
                </Link>  
                <Link to={"/academic"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={academic} alt=""></img>
                        <p style={{position:"absolute", top: "0%", right: "0%"}} className="homeLinkTitles">ACADEMIC</p>
                    </div>
                </Link>  
                <Link to={"/kindergarten"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={kindergarten} alt=""></img>
                        <p style={{position:"absolute", top: "40%", right: "0%", lineHeight: "normal"}} className="homeLinkTitles">PRE-K/ KINDERGARTEN</p>
                    </div>
                </Link>  
                <Link to={"/pe"} className="homeLink">
                    <div className="biblicalLink">
                        <img src={pe} alt=""></img>
                        <p style={{position:"absolute", top: "40%", right: "0%", lineHeight: "normal"}} className="homeLinkTitles">PHYSICAL EDUCATION</p>
                    </div>
                </Link>  
            </div>
            <div style={{display: "relative", margin: "10vh 0"}}>
                <div className="classScheduleBanner">
                    <p>Classes are held every Saturday except Remnant Day (Last Saturday of every month) from 9/16 to 1/20</p>
                </div>
            </div>
        </div>
    )
}