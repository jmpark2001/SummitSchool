import pastorLee from '../images/pastorLee.jpg'
import pastorBrendyn from '../images/pastorBrendyn.jpg'
import hyuncheol from '../images/HyunCheolKim.jpg'
import christine from '../images/christine.jpg'
import louann from '../images/louann.jpg'
import alexandra from '../images/alexandra.jpg'
// import yeobeen from '../images/y'
import sungkyung from '../images/sungkyungyoo.jpg'
import justin from '../images/justin.jpg'
import joanne from '../images/joanne.jpg'

export default function Staff() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="staffPage">
                <h1 className="aboutTitle">Staff</h1>
                <div className="staffRow">
                    <div className="staffColumn">
                        <p>Rev. Dong C. Lee</p>
                        <p>Principal</p>
                        <img className="headshots" src={pastorLee} alt=""></img>
                    </div>
                    <div className="staffColumn">
                        <p>Rev. Brendyn Huh</p>
                        <p>Spiritual Advisor</p>
                        <img className="headshots" src={pastorBrendyn} alt=""></img>
                    </div>
                </div>
                <div className="staffRow">
                    <div className="staffColumn">
                        <p>Hyun-chul Kim</p>
                        <p>Director</p>
                        <img className="headshots" src={hyuncheol} alt=""></img>
                    </div>
                    <div className="staffColumn">
                        <p>Christine Baek</p>
                        <p>Administrative Director</p>
                        <img className="headshots" src={christine} alt=""></img>
                    </div>
                </div>
                <div className="staffRow">
                    <div className="staffColumn">
                        <p>Lou Ann Yang</p>
                        <p>Administrative Assistant</p>
                        <img className="headshots" src={louann} alt=""></img>
                    </div>
                    <div className="staffColumn">
                        <p>Alexandra Garcia</p>
                        <p>Administrative Assistant</p>
                        <img className="headshots" src={alexandra} alt=""></img>
                    </div>
                    <div className="staffColumn">
                        <p>Yeobeen Yun</p>
                        <p>Administrative Assistant</p>
                    </div>
                </div>
                <div className="staffRow">
                    <div className="staffColumn">
                        <p>Sung-kyung Yoo</p>
                        <p>Financial Director</p>
                        <img className="headshots" src={sungkyung} alt=""></img>
                    </div>
                    <div className="staffColumn">
                        <p>Justin Park</p>
                        <p>Website Developer</p>
                        <img className="headshots" src={justin} alt=""></img>
                    </div>
                    <div className="staffColumn">
                        <p>Joanne Lee</p>
                        <p>Website Developer</p>
                        <img className="headshots" src={joanne} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}