import pe from "../images/PEClasses.jpg"

export default function PE() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={pe} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", color: "white", fontWeight: "900", fontSize: "clamp(1.8rem, 1.2109rem + 2.6182vw, 5.4rem)"}}>PHYSICAL EDUCATION CLASSES</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Basketball</p>
                    <p className="glacial">
                        Basketball class will allow students to learn the basics of basketball while getting exercise outside.
                    </p>
                    <p className="glacial" style={{fontWeight: "900"}}>
                        *Students are encouraged to bring a basketball if they own one but one will be provided.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">Stretching and Mobility</p>
                    <p className="glacial">Stretching and Mobility provides students a relaxing environment to stretch their bodies in a healthy way.</p>
                </div>
            </div> 
        </div>
    )
}