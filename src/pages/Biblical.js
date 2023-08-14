export default function Biblical() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="differentClasses">
                <h1 className="biblicalInfoTitle">Biblical Classes</h1>
                <div className="biblicalInfoDiv">
                    <ul className="biblicalInfoClasses">
                        <li>
                            <div style={{display: "flex"}}>
                                <p style={{fontWeight: "bold"}}>Biblical Worldview:&nbsp;</p>
                                <p>This class will help you to have a gospel-centered perspective to interpret and understand what is going on in the world.</p>  
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex"}}>
                                <p style={{fontWeight: "bold"}}>Church History:&nbsp;</p>
                                <p>Survey or overview of church history (flow of covenant) from past to present.</p>  
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex"}}>
                                <p style={{fontWeight: "bold"}}>Systematic Theology:&nbsp;</p>
                                <p>Go over various doctrines found in the Bible (God, man, sin, Christ, etc.)</p>  
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex"}}>
                                <p style={{fontWeight: "bold"}}>Old Testament:&nbsp;</p>
                                <p>Read through and discuss various books in the Old Testament</p>  
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex"}}>
                                <p style={{fontWeight: "bold"}}>New Testament:&nbsp;</p>
                                <p>Read through and discuss various books in the New Testament</p>  
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}