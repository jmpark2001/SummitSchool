export default function Academic() {
    return (
        <div className="differentClasses">
            <h1 className="biblicalInfoTitle">Academic Classes</h1>
            <div className="biblicalInfoDiv">
                <ul className="biblicalInfoClasses">
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>SAT English:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                    <li>
                        <div style={{display: "flex"}}>
                            <p style={{fontWeight: "bold"}}>SAT Math:&nbsp;</p>
                            <p></p>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}