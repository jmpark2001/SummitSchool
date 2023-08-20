export default function Academic() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="academicBanner">
                <div>
                    <p style={{fontSize: "4vh", fontWeight: "900", margin: 0, color: "black"}}>ACADEMIC CLASSES</p>
                </div>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="biblicalInfoClassesTitle">SAT Prep (Math, Reading)</p>
                    <p className="instrumentDescription">SAT preparation classes will be offered to students in grades 9 through 12. Classes will focus on SAT math and SAT reading.</p>
                    <p style={{fontWeight: "900"}}>*SAT Reading is currently tentative. If you sign up for SAT Reading and it becomes unavailable, you will be able to sign up for a different class.</p>
                </div>
            </div>
        </div>
    )
}