import academic from "../images/AcademicClasses.jpg"

export default function Academic() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={academic} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", top: "40%", color: "black", fontWeight: "900", fontSize: "6vh"}}>ACADEMIC CLASSES</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">SAT Prep (Math, Reading)</p>
                    <p className="glacial">SAT preparation classes will be offered to students in grades 9 through 12. Classes will focus on SAT math and SAT reading.</p>
                    <p className="glacial" style={{fontWeight: "900"}}>*SAT Reading is currently tentative. If you sign up for SAT Reading and it becomes unavailable, you will be able to sign up for a different class.</p>
                </div>
            </div>
        </div>
    )
}