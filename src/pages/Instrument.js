export default function Instrument() {
    return (
        <>
            <h1 className="biblicalInfoTitle">Instrument Classes</h1>
            <div className="biblicalInfoDiv">
                <ul className="biblicalInfoClasses">
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>Guitar:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>Piano:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>Flute:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>Violin:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>Drum:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                    <p>All instrument classes will be offered in 3 levels based off of experience: Beginner, Some Experience, and Advanced.</p>
                </ul>
            </div>
        </>
    )
}