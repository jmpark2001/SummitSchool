import pastorLee from '../images/pastorLee.jpg'
import pastorBrendyn from '../images/pastorBrendyn.jpg'
import christine from '../images/christine.jpg'
import louann from '../images/louann.jpg'
import alexandra from '../images/alexandra.jpg'
import sungkyung from '../images/sungkyungyoo.jpg'
import justin from '../images/justin.jpg'
import joanne from '../images/joanne.jpg'
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

export default function Staff() {
    return (
        <div className="staffPage">
            <div className="backToHomeDiv">
                <CustomLink to="/" className="backToHome">Home</CustomLink>
                <p style={{fontSize: "clamp(1.5rem, 0.9280rem + 0.6700vw, 2rem)", margin: "5rem 0 0"}}>&nbsp;/ Staff</p>
            </div>
            <h1 className="staffPageTitle playfair">Staff Directory</h1>
            <div className='staffContactUs'>
                <h3><b>Contact Summit School</b></h3>
                <p>Phone Number: 1-866-237-2377</p>
                <p>Email Address: summitschool@237omc.org</p>
            </div>
            
            <div className="staffList">
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={pastorLee} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Dong Cheol Lee, Rev., Dr.</p>
                            <p className="staffTitle">PRINCIPAL</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={pastorBrendyn} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Brendyn Huh, Rev.</p>
                            <p className="staffTitle">ACTING DIRECTOR</p>
                        </div>
                    </div>
                </div>
                {/* <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={hyunchul} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Hyun Chul Kim</p>
                            <p className="staffTitle">DIRECTOR</p>
                        </div>
                    </div>
                </div> */}
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={christine} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Christine Baek-Lee</p>
                            <p className="staffTitle">ADMINISTRATIVE DIRECTOR</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={louann} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Lou Ann Yang</p>
                            <p className="staffTitle">ADMINISTRATIVE ASSISTANT</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={alexandra} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Alexandra Kim</p>
                            <p className="staffTitle">ADMINISTRATIVE ASSISTANT</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        {/* <img className="staffImage" src={yeobeen} alt=""></img> */}
                        <div className="staffText">
                            <p className="staffName">Charles Lim</p>
                            <p className="staffTitle">ADMINISTRATIVE ASSISTANT</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={sungkyung} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Sung Kyung Yoo</p>
                            <p className="staffTitle">FINANCIAL DIRECTOR</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={justin} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Justin Park</p>
                            <p className="staffTitle">WEBSITE DEVELOPER</p>
                        </div>
                    </div>
                </div>
                <div className="staffBox">
                    <div className="staffMember">
                        <img className="staffImage" src={joanne} alt=""></img>
                        <div className="staffText">
                            <p className="staffName">Joanne Lee</p>
                            <p className="staffTitle">WEBSITE DESIGNER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}