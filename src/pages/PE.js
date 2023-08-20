export default function PE() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="peBanner">
                <div>
                    <p style={{fontSize: "4vh", fontWeight: "900", margin: 0, color: "black"}}>PHYSICAL EDUCATION CLASSES</p>
                </div>
            </div>
            <div className="differentClasses" style={{flexDirection: "row", justifyContent: "center", alignItems: "stretch"}}>
                <div className="otherInfoDiv" style={{marginRight: "7%"}}>
                    <p className="biblicalInfoClassesTitle">Basketball</p>
                    <p className="instrumentDescription">
                        Basketball class will allow students to learn the basics of basketball while getting exercise outside.
                    </p>
                    <p style={{fontWeight: "900"}}>
                        *Students are encouraged to bring a basketball if they own one but one will be provided.
                    </p>
                </div>
                <div className="otherInfoDiv">
                    <p className="biblicalInfoClassesTitle">Stretching and Mobility</p>
                    <p className="instrumentDescription">Stretching and Mobility provides students a relaxing environment to stretch their bodies in a healthy way.</p>
                </div>
            </div> 
        </div>
    )
}