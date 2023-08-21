import pe from "../images/PEClasses.jpg"

export default function PE() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={pe} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", top: "40%", color: "white", fontWeight: "900", fontSize: "6vh"}}>PHYSICAL EDUCATION CLASSES</p>
            </div>
            <div className="differentClasses" style={{flexDirection: "row", justifyContent: "center", alignItems: "stretch"}}>
                <div className="otherInfoDiv" style={{marginRight: "7%"}}>
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