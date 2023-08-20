export default function Instrument() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="instrumentBanner">
                <div>
                    <p style={{fontSize: "4vh", fontWeight: "900", margin: 0, color: "white"}}>INSTRUMENT CLASSES</p>
                </div>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="biblicalInfoClassesTitle">Guitar, Piano, Flute, Violin, Drums </p>
                    <p className="instrumentDescription">Anyone interested in learning an instrument is welcome to enroll. Students will be placed into classes according to their skill level.</p>
                    <p style={{fontWeight: "900"}}>*Students must prepare their own instruments before classes begin*</p>
                    <p className="instrumentDescription">**All instrument classes are currently tentative. If you sign up for an instrument class and it becomes unavailable, you will be able to sign up for a different class.</p>
                </div>    
            </div>
            
        </div>
    )
}