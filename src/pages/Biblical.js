export default function Biblical() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div className="biblicalBanner">
                <div>
                    <p style={{fontSize: "4vh", fontWeight: "900", margin: 0}}>BIBLICAL CLASSES</p>
                </div>
            </div>
            <div className="differentClasses">
                <div className="biblicalInfoDiv">
                    <ul className="biblicalInfoClasses">
                        <li>
                            <div className="biblicalInfoClassesList">
                                <p className="biblicalInfoClassesTitle">Biblical Worldview</p>
                                <p className="biblicalInfoClassesDescription">This class will help you to have a gospel-centered perspective to interpret and understand what is going on in the world.</p>  
                            </div>
                        </li>
                        <li>
                            <div className="biblicalInfoClassesList">
                                <p className="biblicalInfoClassesTitle">Church History</p>
                                <p className="biblicalInfoClassesDescription">Survey or overview of church history (flow of covenant) from past to present.</p>  
                            </div>
                        </li>
                        <li>
                            <div className="biblicalInfoClassesList">
                                <p className="biblicalInfoClassesTitle">Systematic Theology</p>
                                <p className="biblicalInfoClassesDescription">Go over various doctrines found in the Bible (God, man, sin, Christ, etc.)</p>  
                            </div>
                        </li>
                        <li>
                            <div className="biblicalInfoClassesList">
                                <p className="biblicalInfoClassesTitle">Old Testament</p>
                                <p className="biblicalInfoClassesDescription">Read through and discuss various books in the Old Testament</p>  
                            </div>
                        </li>
                        <li>
                            <div className="biblicalInfoClassesList">
                                <p className="biblicalInfoClassesTitle">New Testament</p>
                                <p className="biblicalInfoClassesDescription">Read through and discuss various books in the New Testament</p>  
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}