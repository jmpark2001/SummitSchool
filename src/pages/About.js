import logo from "../images/OMCLogo.png"
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

export default function About() {
    const vision = "The vision of Summit School is to be the Platform, Watchtower, Antenna for our future generation the remnants so that every remnant may become the Masterpiece God created them to be in Christ Jesus (Eph 2:10)"
    const mission = "The mission of Summit School is to help every remnant to discover their God-given identity (Missioning Ceremony) through discipleship and spirituality training, develop their God-given talent (Coming of Age Ceremony) through mentorship and classes, and send them out to their God-given field (Commissioning Ceremony) through internship and networking."


    return (
        <div className="aboutPage">
            <div className="aboutBanner">
                <img src={logo} className="aboutLogo" alt=""></img>
                <p className="playfair item-a">About</p>
                <div className="item-b"></div>
                <p className="item-c">The seed of our church's big dream. Pioneered in prayer, hope and courage for the remnants' God-given future.</p>  
            </div>
            <div className="backToHomeDiv" style={{width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "left"}}>
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "5rem 0 0"}}>&nbsp;/ About</p>
            </div>
            <div className="visionMission">
                <div className="visionMissionTitles">
                    <p>VISION</p>        
                </div>
                <div className="visionMissionText">
                    <p>{vision}</p>
                </div>
                <div className="visionMissionTitles">
                    <p>MISSION</p>        
                </div>
                <div className="visionMissionText">
                    <p>{mission}</p>
                </div>
            </div>
        </div>
    )
}  