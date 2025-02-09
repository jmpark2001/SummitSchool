import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { db } from "../utils/firebase"
import { doc, setDoc } from "firebase/firestore"
import { EXCEL_FILE_BASE64 } from "./Constants";
import FileSaver from "file-saver";
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {
    const classList2 = ["Acts", "Hebrews", "The Gospel of John", "Christian Reading", "Praise and Worship", "Korean", "Spanish", "Chinese", "Adult Korean", "Adult English", "Drums", "Academic", "Sports", "Extracurricular"]
    const classList = ["Acts", "Hebrews", "The Gospel of John", "Christian Reading", "Praise and Worship", "Acts (Reverend Dexter Smith)", "Hebrews (Reverend Ben Fu)", "The Gospel of John (Reverend Brendyn Huh)", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Adult Korean Beginner", "Adult Korean Intermediate", "Adult Korean Advanced", "Adult English Beginner", "Adult English Intermediate", "Adult English Advanced", "Drums Beginner",
     "Drums Some Experience", "Drums Advanced", "Pre-K/Kindergarten", "Reading and Writing", "Math", "Basketball", "Badminton", "Wrestling", "Ping Pong", "Introduction to Chess"]
    const stateList = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Lousiana", "Maine", "Maryland",
     "Massachusettes", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
     "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    const [checkedState, setCheckedState] = useState(new Array(classList.length + 1).fill(false))
    const [form, setForm] = useState ({
        studentFullName:  "",
        parentFullName: "",
        studentPhoneNumber: 0,
        parentPhoneNumber: 0,
        parentEmail: "",
        studentGrade: 0,
        homeAddress: "",
        homeAddress2: "",
        homeCity: "",
        homeState: "DEFAULT",
        homeZip: "",
        classes: [],
        waiver: false
    })

    const handleOnChange = (position, e) => {
        let checkedBoxes = checkedState.filter((i) => i)
        if (checkedBoxes.length >= 3 && e.target.checked && e.target.name !== "waiver") {
            return
        }
        const updateCheckedState = checkedState.map((item, index) => 
            index === position ? !item : item
        )
        setCheckedState(updateCheckedState)
        if (e.target.name === "waiver"){
            updateForm({waiver: true})
        }
        else {
            let checkedIndices = [...updateCheckedState.keys()].filter(i => updateCheckedState[i])
            let updatedClasses = []
            for (let i=0; i<checkedIndices.length; i++) {
                updatedClasses.push(classList[checkedIndices[i]])
            }
            updateForm({classes: updatedClasses})
        }
    }

    const handleDownload = () => {
        let dataBlob = EXCEL_FILE_BASE64;
        let sliceSize = 1024;
        let byteCharacters = atob(dataBlob);
        let bytesLength = byteCharacters.length;
        let slicesCount = Math.ceil(bytesLength / sliceSize);
        let byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            let begin = sliceIndex * sliceSize;
            let end = Math.min(begin + sliceSize, bytesLength);
            let bytes = new Array(end - begin);
            for (var offset = begin, i=0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        let blob = new Blob(byteArrays, { type: 'application/vnd.ms-excel'});
        FileSaver.saveAs(new Blob([blob], {}), "SpringSemesterFinancialAid.xlsx");
    }

    function waiverChecked() {
        return checkedState[34]
    }
    
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value}
        })
    }

    function hasPhysical() {
        if (checkedState[29] === true || checkedState[30] === true || checkedState[31] === true || checkedState[32] === true) {
            return true
        }
        else {
            return false
        }
    }
    
    async function onSubmit(e) {
        e.preventDefault();
        const newForm = {...form}
        if (hasPhysical() && !waiverChecked()) {
            alert("Please sign the waiver checkbox")
        }
        else {
            try {        
                await setDoc(doc(db, "registrations", newForm.studentFullName), {
                    ...newForm
                })
                console.log("Document written with ID: ", newForm.studentFullName)
            } catch (e) {
                console.error("Error addding document: ", e)
            }  
            window.alert("You submitted the form")
            setForm({ 
                studentFullName: "",
                parentFullName: "",
                studentPhoneNumber: 0,
                parentPhoneNumber: 0,
                parentEmail: "",
                studentGrade: 0,
                homeAddress: "",
                homeAddress2: "",
                homeCity: "",
                homeState: "DEFAULT",
                homeZip: "",
                classes: [],
                waiver: false
            })
            setCheckedState(new Array(classList.length + 1).fill(false))
        }
        
    }
    //Lower Level class (grade 3-8 any class) Upper level class (grade 9-adults acts (Reverand dexter smith) hebrew (reverand ben fu) john (reverand brendyn huh))
    

    return (
        <div className="registrationWholePageDiv glacial">
            <hr style={{borderWidth: "0 0 .225rem 0", borderColor: "black", borderStyle: "solid", width: "clamp(10rem, 9.1818rem + 3.6364vw, 15rem)", marginTop:"1.8rem"}}></hr>
            <h1 className="registrationTitle">REGISTRATION FORM</h1>
            <div className="registrationPage">
                <div style={{display: "flex"}}>
                    <div className="formDiv">
                        <Form onSubmit={onSubmit}>
                            {window.screen.width > 769 ? (
                                    <>
                                        <div className="dates">
                                            <p style={{margin: "0 0 0 5%", width: "100%"}}><b>REGISTRATION & PAYMENT PERIOD:</b> February 9th - February 16th</p>
                                        </div> 
                                        <div style={{marginTop: "0"}} className="dates">
                                            <p style={{margin: "0 0 0 5%", width: "80%"}}><b>SPRING SEMESTER:</b> Every Saturday except Remnant Day (Last Saturday of every month)
                                            from March 1st - June 21st</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <p style={{fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0"}}>REGISTRATION & PAYMENT PERIOD</p>
                                            <p style={{fontSize: "1.3rem", marginTop: "0", margin: "0"}}>February 9th - February 16th</p>
                                        </div> 
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <p style={{fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0"}}>SPRING SEMESTER</p>
                                            <p style={{fontSize: "1.3rem", margin: "0 auto", width: "90%"}}>Every Saturday except Remnant Day (Last Saturday of every month)
                                            from March 1st - June 21st</p>
                                        </div> 
                                    </>
                                )
                            }
                            <div className="formScheduleDiv">
                                <div className="formScheduleContent">
                                    {/* <p className="classesInfoTitle" style={{display: "inline"}}>PRAISE:</p>
                                    <p style={{display: "inline"}}> 9AM - 9:15AM</p>
                                    <br></br> */}
                                    <p className="classesInfoTitle" style={{display: "inline"}}>PRAISE AND WORSHIP:</p>
                                    <p style={{display: "inline"}}> 9:30AM - 10:20AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>FIRST CLASS:</p>
                                    <p style={{display: "inline"}}> 10:30AM - 11:20AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>SECOND CLASS:</p>
                                    <p style={{display: "inline"}}> 11:30AM - 12:20AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>LUNCH:</p>
                                    <p style={{display: "inline"}}> 12:30PM - 12:50PM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>THIRD CLASS:</p>
                                    <p style={{display: "inline"}}> 1:00PM - 1:50PM</p>
                                </div>
                            </div>
                            <div className="formAnswersDiv">
                                <div style={{marginTop: "1.8rem", textAlign: "left", fontSize: "clamp(1rem, 0.8691rem + 0.5818vw, 1.8rem)"}}>
                                    <p style={{color: "red", display: "inline"}}>*</p>
                                    <p style={{display: "inline"}}>You must complete a separate form for each student!</p>
                                </div>
                                
                                <Form.Group as={Col} className="leftAlign marginTop" controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        STUDENT FULL NAME
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control type="text" name="studentFullName" placeholder="Enter Full Name" value={form.studentFullName} onChange={(e) => updateForm({ studentFullName: e.target.value})} required></Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="leftAlign marginTop" controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        PARENT FULL NAME
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control type="text" name="parentFullName" placeholder="Enter Full Name" value={form.parentFullName} onChange={(e) => updateForm({ parentFullName: e.target.value})}required></Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="leftAlign marginTop" controlId="formHorizontalNumber">
                                    <Form.Label column sm={2}>
                                        STUDENT PHONE NUMBER
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control type="number" name="studentPhoneNumber" placeholder="Enter Phone Number" value={form.studentPhoneNumber} onChange={(e) => updateForm({ studentPhoneNumber: e.target.value})}></Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="leftAlign marginTop" controlId="formHorizontalNumber">
                                    <Form.Label column sm={2}>
                                        PARENT PHONE NUMBER
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control type="number" name="parentPhoneNumber" placeholder="Enter Phone Number" value={form.parentPhoneNumber} onChange={(e) => updateForm({ parentPhoneNumber: e.target.value})} required></Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="leftAlign marginTop" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        PARENT EMAIL ADDRESS
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control type="email" name="email" placeholder="Enter Email Address" value={form.parentEmail} onChange={(e) => updateForm({ parentEmail: e.target.value})} required></Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Col} className="leftAlign marginTop" controlId="formHorizontalNumber">
                                    <Form.Label column sm={2}>
                                        STUDENT GRADE
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control type="number" name="studentGrade" placeholder="Enter Student Grade" value={form.studentGrade} onChange={(e) => updateForm({ studentGrade: e.target.value})} required></Form.Control>
                                    </Col>
                                </Form.Group>
                                <p className="form-label col-form-label col-sm-2 leftAlign marginTop" style={{margin: "0 0 0.5vh 0", fontWeight: "bold"}}>HOME ADDRESS</p>
                                <Form.Group controlId="formAddress" className="leftAlign" style={{fontSize: "1.3vh"}}>
                                    <div className="col-sm-2" style={{marginBottom: "1vh"}}>
                                        <label htmlFor="inputAddress">ADDRESS</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={form.homeAddress} onChange={(e) => updateForm({ homeAddress: e.target.value})} required/>
                                    </div>
                                    <div className="col-sm-2" style={{marginBottom: "1vh"}}>
                                        <label htmlFor="inputAddress2">ADDRESS 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={form.homeAddress2} onChange={(e) => updateForm({ homeAddress2: e.target.value})}/>
                                    </div>
                                    <div>
                                        <div className="col-sm-2" style={{marginBottom: "1vh"}}>
                                            <label htmlFor="inputCity">CITY</label>
                                            <input type="text" className="form-control" id="inputCity" placeholder="Woodbridge" value={form.homeCity} onChange={(e) => updateForm({ homeCity: e.target.value})} required/>
                                        </div>
                                        <div className="col-sm-2" style={{marginBottom: "1vh"}}>
                                            <label htmlFor="inputState">STATE</label>
                                            <select id="inputState" className="form-control" value={form.homeState} onChange={(e) => updateForm({ homeState: e.target.value})} required>
                                                <option value="DEFAULT" disabled>Choose...</option>
                                                {stateList.map((state, index) =>
                                                <option key={index} value={stateList[index]}>{state}</option> 
                                                    )}
                                            </select>
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="inputZip">ZIP</label>
                                            <input type="text" className="form-control" id="inputZip" placeholder="12345" value={form.homeZip} onChange={(e) => updateForm({ homeZip: e.target.value})} required/>
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                            <div style={{marginTop: "1.8rem", width: "100%", padding: "0 0 0 2.5%", textAlign: "left", fontSize: "clamp(1rem, 0.8691rem + 0.5818vw, 1.8rem)"}}>
                                <p style={{color: "red", display: "inline"}}>*</p>
                                <p className="instructions" style={{display: "inline"}}>Students (Grades 1-12) must choose 3 classes.</p>
                                <br></br>
                                <p style={{color: "red", display: "inline"}}>**</p>
                                <p className="instructions" style={{display: "inline"}}>Adults (College and up) can take up to 3 classes.</p>
                            </div>
                            <div style={{display: "flex", padding: "0 0 0 2.5%", flexDirection: "column", width: "100%"}}>
                                <p className="biblicalTitle">Biblical</p>
                                <ul className="otherClass">
                                    <p className="classTitles">Lower Level class (Grades 3-8)</p>
                                    <ul className="bibleClass">
                                        {classList.slice(0, 5).map((className, index) => 
                                            <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        className="bibleCheck"
                                                        id={index}
                                                        name={className}
                                                        value={form.classes}
                                                        checked={checkedState[index]}
                                                        onChange={(e) => handleOnChange(index, e)}
                                                    />
                                                    <label>{className}</label>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                    <p className="classTitles">Upper Level class (Grades 9 and above)</p>
                                    <ul className="bibleClass">
                                        {classList.slice(5, 8).map((className, index) => 
                                            <li key={index+5}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        className="bibleCheck"
                                                        id={index+5}
                                                        name={className}
                                                        value={form.classes}
                                                        checked={checkedState[index+5]}
                                                        onChange={(e) => handleOnChange(index+5, e)}
                                                    />
                                                    <label>{className}</label>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </ul>
                                
                            </div>
                            <div className="classesChecklist">
                                <div className="classDiv">
                                    <p className="classTitles">Language</p>
                                    <ul className="otherClass">
                                        {classList2.slice(5,10).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index*3 + 8}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 8}
                                                            name={className + " Beginner"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 8]}
                                                            onChange={(e) => handleOnChange(index*3 + 8, e)}
                                                        />
                                                        <label>{"Beginner"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 9}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 96}
                                                            name={className + " Intermediate"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 9]}
                                                            onChange={(e) => handleOnChange(index*3 + 9, e)}
                                                        />
                                                        <label>{"Intermediate"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 10}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 10}
                                                            name={className + " Advanced"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 10]}
                                                            onChange={(e) => handleOnChange(index*3 + 10, e)}
                                                        />
                                                        <label>{"Advanced"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Instrument</p>
                                    <ul className="otherClass">
                                        {classList2.slice(10,11).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index*3 + 23}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 23}
                                                            name={className + " Beginner"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 23]}
                                                            onChange={(e) => handleOnChange(index*3 + 23, e)}
                                                        />
                                                        <label>{"Beginner"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 24}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 24}
                                                            name={className + " Intermediate"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 24]}
                                                            onChange={(e) => handleOnChange(index*3 + 24, e)}
                                                        />
                                                        <label>{"Intermediate"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 25}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 25}
                                                            name={className + " Advanced"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 25]}
                                                            onChange={(e) => handleOnChange(index*3 + 25, e)}
                                                        />
                                                        <label>{"Advanced"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="academicClassDiv">
                                    <p className="classTitles">Academic</p>
                                    <ul className="otherClass">
                                        {classList2.slice(11, 12).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 26}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+26}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+26]}
                                                            onChange={(e) => handleOnChange(index+26, e)}
                                                        />
                                                        <label>{"Pre-K/Kindergarten"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 27}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+27}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+27]}
                                                            onChange={(e) => handleOnChange(index+27, e)}
                                                        />
                                                        <label>{"Reading and Writing"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 28}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+28}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+28]}
                                                            onChange={(e) => handleOnChange(index+28, e)}
                                                        />
                                                        <label>{"Math"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Physical Education</p>
                                    <ul className="otherClass">
                                        {classList2.slice(12, 13).map((className, index) => 
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 29}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+29}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+29]}
                                                            onChange={(e) => handleOnChange(index+29, e)} 
                                                        />
                                                        <label>{"Basketball"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 30}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+30}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+30]}
                                                            onChange={(e) => handleOnChange(index+30, e)} 
                                                        />
                                                        <label>{"Badminton"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 31}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+31}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+31]}
                                                            onChange={(e) => handleOnChange(index+31, e)} 
                                                        />
                                                        <label>{"Wrestling"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 32}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+32}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+32]}
                                                            onChange={(e) => handleOnChange(index+32, e)}
                                                        />
                                                        <label>{"Ping Pong"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Extracurricular</p>
                                    <ul className="otherClass">
                                        {classList2.slice(13).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 33}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+33}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+33]}
                                                            onChange={(e) => handleOnChange(index+33, e)}
                                                        />
                                                        <label>{"Chess"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="waiverDiv">
                                <h2>Waiver for Physical Education Students</h2>
                                <h3>If your child is signed up for a physical education class, please read and check the box to sign the waiver.</h3>
                                <p>
                                By giving consent, I authorize my child to leave the church building and attend sports practices associated with the Summit School program at Riverbend Park, 13529 Fitzhugh Ln, Woodbridge, VA 22191. I agree that One Mind Church and Summit School will not be held responsible if my child sustains injury during the Sports class and if anything happens on the way to and from the said location or on church premises.  I authorize my child to receive emergency medical treatment if he or she sustains an injury. I agree that I am responsible for paying all costs incurred. I agree to take full responsibility for any damage my child may cause to Summit School property, property visited on field trips, or other personal property.
                                </p>
                                <input
                                    type="checkbox"
                                    id="waiver"
                                    name="waiver"
                                    checked={checkedState[34]}
                                    onChange={(e) => handleOnChange(34, e)}
                                />
                                <label>{"I consent to the waiver above"}</label>
                            </div>
                            <br/>
                            <p style={{fontSize: "clamp(1.4rem, 1.2691rem + 0.5818vw, 2.2rem)", fontWeight: "bold"}}>Methods of Payment</p>
                            <ol className="payment" style={{listStyle: "none"}}>
                                <p style={{fontWeight: "bold"}}>Click on the links below to pay with credit or debit. For multiple students the pricing goes as follows: The first student you enroll will cost $250, the second student is $200,
                                and any additional students will be $150. For adults registering, the fee will be $100 for 1 class, $175 for 2 classes, and $250 for 3 classes.</p>
                                <p style={{color: "red", display: "inline"}}>*</p>
                                <p className="instructions" style={{fontWeight: "bold", display: "inline"}}>If you need financial assistance, download this form and submit it to the admin team.</p>
                                <br></br>
                                <Button className="financialAid" onClick={handleDownload}>Download Financial Aid</Button>
                                <li>
                                    1 student:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/GZLreBYs/" target="_blank" rel="noreferrer noopener">https://square.link/u/GZLreBYs/</a>
                                </li>
                                <li>
                                    2 students:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/aqelsAIN/" target="_blank" rel="noreferrer noopener">https://square.link/u/aqelsAIN/</a>
                                </li>
                                <li>
                                    3 students:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/SmF6VjzQ/" target="_blank" rel="noreferrer noopener">https://square.link/u/SmF6VjzQ/</a>
                                </li>
                                <li>
                                    4 students:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/7v8wxCQA/" target="_blank" rel="noreferrer noopener">https://square.link/u/7v8wxCQA/</a>
                                </li>
                                <li>
                                    5 students:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/6oFNFhiq/" target="_blank" rel="noreferrer noopener">https://square.link/u/6oFNFhiq/</a>
                                </li>
                            </ol>
                            <Button className="submitButton playfair" type="submit"><b>Submit</b></Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm