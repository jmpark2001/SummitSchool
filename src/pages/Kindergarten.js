import kindergarten from "../images/KindergartenClasses.jpg"

export default function Kindergarten() {
    return (
        <div className="playfair" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="classesBanner">
                <img src={kindergarten} className="classesBanners" alt=""></img>
                <p style={{position:"absolute", margin: "0", top: "40%", color: "black", fontWeight: "900", fontSize: "6vh"}}>PRE-K/KINDERGARTEN CLASSES</p>
            </div>
            <div className="differentClasses">
                <div className="otherInfoDiv">
                    <p className="classesInfoTitle">This program is for children between the ages 3 to 5. They will be nurturing their developmental skills as well as basic reading, writing, math, and arts.</p>
                </div>
            </div>
        </div>
    )
}