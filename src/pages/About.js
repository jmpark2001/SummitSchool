import { useState } from "react"
import omc from "../images/omcChurch.jpg"
import logo from "../images/OMCLogo.png"

export default function About() {
    const vision = "The vision of Summit School is to be the Platform, Watchtower, Antenna for our future generation the remnants so that every remnant may become the Masterpiece God created them to be in Christ Jesus (Eph 2:10)"
    const mission = "The mission of Summit School is to help every remnant to discover their God-given identity (Missioning Ceremony) through discipleship and spirituality training, develop their God-given talent (Coming of Age Ceremony) through mentorship and classes, and send them out to their God-given field (Commissioning Ceremony) through internship and networking."
    const [text, setText] = useState(vision)
    const onChangeVision = () => {
        if (text === mission){
            setText(vision)
            document.getElementById("visionTitle").style.backgroundColor = "#696969"
            document.getElementById("missionTitle").style.backgroundColor = "#A9A9A9"
        }
    }

    const onChangeMission = () => {
        if (text === vision){
            setText(mission)
            document.getElementById("missionTitle").style.backgroundColor = "#696969"
            document.getElementById("visionTitle").style.backgroundColor = "#A9A9A9"
        }
    }


    return (
        <div className="aboutPage">
            <div className="aboutBanner">
                <img src={omc} className="aboutBanners" alt=""></img>
                <img src={logo} className="aboutLogo" alt=""></img>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", position: "absolute", top: "30%", width: "fit-content", height: "25vh"}}>
                    <p style={{color: "white", width: "70vh", height: "25vh", margin: "0 15vh 0 0", lineHeight: "25vh", fontSize: "7vh"}} className="playfair">About Summit School</p>
                    <div style={{borderLeft: ".5vh solid white", height: "25vh"}}></div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "25vh"}}>
                        <p style={{color: "white", margin: "0 0 0 15vh", fontSize: "5vh", width: "70vh"}}>A school that makes God's dream into a reality. Together, we will build our remnants' future.</p>  
                    </div>
                </div>
            </div>
            <div className="visionMission">
                <div className="visionMissionTitles">
                    <div id="visionTitle" className="visionMissionTitle" style={{backgroundColor: "#696969"}}>
                        <button className="unbuttonize" onClick={onChangeVision}>
                           VISION
                        </button>
                    </div>
                    <div id="missionTitle" className="visionMissionTitle" style={{borderLeft: ".5vh solid black"}}>
                        <button className="unbuttonize" onClick={onChangeMission}>
                            MISSION STATEMENT
                        </button>
                    </div>                
                </div>
                <div className="visionMissionText">
                    <p style={{fontSize: "3vh", textAlign: "center", color: "black", width: "85%", margin: "3vh auto"}}>{text}</p>
                </div>
            </div>
        </div>
    )
}  