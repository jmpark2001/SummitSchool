import omc from "../images/OMCLogo.png"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="homePage">
            <div className="homeDiv">
                <div className="homeTitleDiv">
                    <img src={omc} className="omcLogo"></img>
                    <div className="homeTitle">
                        <p className="summit">SUMMIT&nbsp;SCHOOL</p>
                        <p className="homeSubtitle">Platform, Watchtower, and Antenna for our future generations.</p>
                    </div>
                </div>
                <p className="warning">For an ideal performance, use a desktop or a laptop when viewing the website</p>
            </div>
            <div className="fallSemester">
                <p style={{margin: "2vh 0"}}>FALL SEMESTER</p>
                <p style={{margin: "0 auto 2vh auto", width: "70%", fontWeight: "100"}}>Registration for the fall semester starts on August 14th and will end on September 3rd.</p>
                <Link to={"/registration"} style={{textDecoration: "none"}}>
                    <div className="registerNow">
                        REGISTER NOW
                    </div>
                </Link>
            </div>
            <hr style={{borderWidth: "0 0 .5vh 0", borderColor: "black", borderStyle: "solid", width: "20%", margin: "10vh 0 0 0"}}></hr>
            <p className="classesForFall">CLASSES FOR FALL 2023</p>
            <div className="homeLinks">
                <Link to={"/biblical"} className="homeLink">
                    <div className="biblicalLink">
                        <p className="homeLinkTitles">BIBLICAL</p>
                    </div>
                </Link>
                <Link to={"/language"} className="homeLink">
                    <div className="languageLink">
                        <p className="homeLinkTitles">LANGUAGE</p>
                    </div>
                </Link>  
                <Link to={"/instrument"} className="homeLink">
                    <div className="instrumentLink">
                        <p className="homeLinkTitles">INSTRUMENTS</p>
                    </div>
                </Link>  
                <Link to={"/academic"} className="homeLink">
                    <div className="academicLink">
                        <p className="homeLinkTitles">ACADEMIC</p>
                    </div>
                </Link>  
                <Link to={"/kindergarten"} className="homeLink">
                    <div className="kindergartenLink">
                        <p className="homeLinkTitles" style={{lineHeight: "normal", position: "relative", top: "40%"}}>PRE-K/ KINDERGARTEN</p>
                    </div>
                </Link>  

                
            </div>
        </div>
    )
}