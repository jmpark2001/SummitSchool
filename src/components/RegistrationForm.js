import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { db } from "../utils/firebase"
import { doc, setDoc } from "firebase/firestore"
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {
    const classList2 = ["Christian Biography A", "Christian Biography B", "Introduction to Old Testament", "Introduction to New Testament", "Korean", "Spanish", "Chinese", "Adult Korean", "Adult English", "Flute", "Drum", "Guitar", "Piano", "SAT", "Tutoring", "Coding", "General", "Sports"]
    const classList = ["Christian Biography A", "Christian Biography B", "Introduction to Old Testament", "Introduction to New Testament", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Adult Korean Beginner", "Adult Korean Intermediate", "Adult Korean Advanced", "Adult English Beginner", "Adult English Intermediate", "Adult English Advanced", "Flute Beginner",
     "Flute Some Experience", "Flute Advanced", "Drum Beginner", "Drum Some Experience", "Drum Advanced", "Guitar Beginner", "Guitar Some Experience", "Guitar Advanced", "Piano Beginner", "Piano Some Experience", "Piano Advanced", "SAT Math", "Tutoring Math",
      "Tutoring English", "Coding", "Kindergarten", "Basketball", "Stretching and Mobility", "Badminton"]
    const stateList = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Lousiana", "Maine", "Maryland",
     "Massachusettes", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
     "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    const [checkedState, setCheckedState] = useState(new Array(classList.length).fill(false))
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
        classes: []
    })

    const handleOnChange = (position, e) => {
        let checkedBoxes = checkedState.filter((i) => i)
        // function hasBiblical() {
        //     if (checkedState[0] === true || checkedState[1] === true || checkedState[2] === true || checkedState[3] === true || checkedState[4] === true || classList.slice(0, 5).includes(e.target.name)) {
        //         return true
        //     }
        //     else {
        //         return false
        //     }
        // }
        if (checkedBoxes.length >= 3 && e.target.checked) {
            return
        }
        // if (checkedBoxes.length >= 1 && !hasBiblical() && e.target.checked){
        //     return
        // }
        const updateCheckedState = checkedState.map((item, index) => 
            index === position ? !item : item
        )
        setCheckedState(updateCheckedState)
        let checkedIndices = [...updateCheckedState.keys()].filter(i => updateCheckedState[i])
        let updatedClasses = []
        for (let i=0; i<checkedIndices.length; i++) {
            updatedClasses.push(classList[checkedIndices[i]])
        }
        updateForm({classes: updatedClasses})
    }
    
    // function atLeastOneCheckboxIsChecked(){
    //     const checkboxes = Array.from(document.getElementsByClassName("bibleCheck"))
    //     return checkboxes.reduce((acc, curr) => acc || curr.checked, false)
    // }
    
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value}
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        const newForm = {...form}
        // if (!atLeastOneCheckboxIsChecked()) {
        //     alert("One biblical class is required to submit the form")
        // }
        // else {
        //     try {
        //         await setDoc(doc(db, "registrations", newForm.studentFullName), {
        //             ...newForm
        //         })
        //         console.log("Document written with ID: ", newForm.studentFullName)
        //     } catch (e) {
        //         console.error("Error addding document: ", e)
        //     }  
        //     window.alert("You submitted the form")
        //     setForm({ 
        //         studentFullName: "",
        //         parentFullName: "",
        //         studentPhoneNumber: 0,
        //         parentPhoneNumber: 0,
        //         parentEmail: "",
        //         homeAddress: "",
        //         homeAddress2: "",
        //         homeCity: "",
        //         homeState: "DEFAULT",
        //         homeZip: "",
        //         classes: []
        //     })
        //     setCheckedState(new Array(classList.length).fill(false))
        // }
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
            classes: []
        })
        setCheckedState(new Array(classList.length).fill(false))
    }
    

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
                                            <p style={{margin: "0 0 0 5%", width: "100%"}}><b>REGISTRATION & PAYMENT PERIOD:</b> January 22nd - February 11th</p>
                                        </div> 
                                        <div style={{marginTop: "0"}} className="dates">
                                            <p style={{margin: "0 0 0 5%", width: "80%"}}><b>SPRING SEMESTER:</b> Every Saturday except Remnant Day (Last Saturday of every month)
                                            from March 2nd - June 1st</p>
                                        </div>
                                </>
                                ) : (
                                    <>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <p style={{fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0"}}>REGISTRATION & PAYMENT PERIOD</p>
                                            <p style={{fontSize: "1.3rem", marginTop: "0", margin: "0"}}>January 22nd - February 11th</p>
                                        </div> 
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <p style={{fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0"}}>SPRING SEMESTER</p>
                                            <p style={{fontSize: "1.3rem", margin: "0 auto", width: "90%"}}>Every Saturday except Remnant Day (Last Saturday of every month)
                                            from March 2nd - June 1st</p>
                                        </div> 
                                    </>
                                )
                            }
                            <div className="formScheduleDiv">
                                <div className="formScheduleContent">
                                    <p className="classesInfoTitle" style={{display: "inline"}}>PRAISE:</p>
                                    <p style={{display: "inline"}}> 9AM - 9:15AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>WORSHIP:</p>
                                    <p style={{display: "inline"}}> 9:15AM - 9:40AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>FORUM:</p>
                                    <p style={{display: "inline"}}> 9:40AM - 9:55AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>FIRST CLASS:</p>
                                    <p style={{display: "inline"}}> 10AM - 10:50AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>SECOND CLASS:</p>
                                    <p style={{display: "inline"}}> 11AM - 11:50AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>LUNCH:</p>
                                    <p style={{display: "inline"}}> 12PM - 12:30PM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>THIRD CLASS:</p>
                                    <p style={{display: "inline"}}> 12:40PM - 1:30PM</p>
                                </div>
                            </div>
                            <div className="formAnswersDiv">
                                <div style={{marginTop: "1.8rem", textAlign: "left", fontSize: "clamp(1rem, 0.8691rem + 0.5818vw, 1.8rem)"}}>
                                    <p style={{color: "red", display: "inline"}}>*</p>
                                    <p style={{display: "inline"}}>You must complete a separate form for each child!</p>
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
                                {/* <p className="instructions" style={{display: "inline"}}>Choose at least 1 biblical class and up to 1 additional class of your choice</p> */}
                                <p className="instructions" style={{display: "inline"}}>Choose up to three classes of your choice. Christian Biography A is for students 6th grade and under. Christian Biography B is for students 7th grade and older.</p>
                            </div>
                            <div style={{display: "flex", padding: "0 0 0 2.5%", flexDirection: "column", width: "100%"}}>
                                <p className="biblicalTitle">Biblical</p>
                                <ul className="bibleClass">
                                    {classList.slice(0, 4).map((className, index) => 
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
                            </div>
                            <div className="classesChecklist">
                                <div className="classDiv">
                                    <p className="classTitles">Language</p>
                                    <ul className="otherClass">
                                        {classList2.slice(4,9).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index*3 + 4}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 4}
                                                            name={className + " Beginner"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 4]}
                                                            onChange={(e) => handleOnChange(index*3 + 4, e)}
                                                        />
                                                        <label>{"Beginner"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 5}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 5}
                                                            name={className + " Intermediate"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 5]}
                                                            onChange={(e) => handleOnChange(index*3 + 5, e)}
                                                        />
                                                        <label>{"Intermediate"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 6}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 6}
                                                            name={className + " Advanced"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 6]}
                                                            onChange={(e) => handleOnChange(index*3 + 6, e)}
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
                                        {classList2.slice(9,13).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index*3 + 19}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 19}
                                                            name={className + " Beginner"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 19]}
                                                            onChange={(e) => handleOnChange(index*3 + 19, e)}
                                                        />
                                                        <label>{"Beginner"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 20}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 20}
                                                            name={className + " Intermediate"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 20]}
                                                            onChange={(e) => handleOnChange(index*3 + 20, e)}
                                                        />
                                                        <label>{"Intermediate"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 21}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 21}
                                                            name={className + " Advanced"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 21]}
                                                            onChange={(e) => handleOnChange(index*3 + 21, e)}
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
                                        {classList2.slice(13, 14).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 31}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+31}
                                                            name={className + " Math"}
                                                            value={form.classes}
                                                            checked={checkedState[index+31]}
                                                            onChange={(e) => handleOnChange(index+31, e)}
                                                        />
                                                        <label>{"Math"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul className="otherClass">
                                        {classList2.slice(14, 15).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 32}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+32}
                                                            name={className + " Math"}
                                                            value={form.classes}
                                                            checked={checkedState[index+32]}
                                                            onChange={(e) => handleOnChange(index+32, e)}
                                                        />
                                                        <label>{"Math"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 33}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+33}
                                                            name={className + " English"}
                                                            value={form.classes}
                                                            checked={checkedState[index+33]}
                                                            onChange={(e) => handleOnChange(index+33, e)}
                                                        />
                                                        <label>{"English"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                    <ul className="otherClass">
                                        {classList2.slice(15, 16).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 34}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+34}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+34]}
                                                            onChange={(e) => handleOnChange(index+34, e)}
                                                        />
                                                        <label>{"Coding"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Pre-K/K</p>
                                    <ul className="otherClass">
                                        {classList2.slice(16, 17).map((className, index) => 
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 35}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+35}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+35]}
                                                            onChange={(e) => handleOnChange(index+35, e)} 
                                                        />
                                                        <label>{"Developmental Basics"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Physical Education</p>
                                    <ul className="otherClass">
                                        {classList2.slice(17).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 36}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+36}
                                                            name={className + " Math"}
                                                            value={form.classes}
                                                            checked={checkedState[index+36]}
                                                            onChange={(e) => handleOnChange(index+36, e)}
                                                        />
                                                        <label>{"Basketball"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 37}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+37}
                                                            name={className + " English"}
                                                            value={form.classes}
                                                            checked={checkedState[index+37]}
                                                            onChange={(e) => handleOnChange(index+37, e)}
                                                        />
                                                        <label>{"Stretching and Mobility"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 38}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+38}
                                                            name={className + " English"}
                                                            value={form.classes}
                                                            checked={checkedState[index+38]}
                                                            onChange={(e) => handleOnChange(index+38, e)}
                                                        />
                                                        <label>{"Badminton"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <p style={{fontSize: "clamp(1.4rem, 1.2691rem + 0.5818vw, 2.2rem)", fontWeight: "bold"}}>Methods of Payment ($200)</p>
                            <ol className="payment" style={{listStyle: "none"}}>
                                <p style={{fontWeight: "bold"}}>Click on the links below to pay with credit or debit. For multiple children the pricing goes as follows: The first child you enroll will cost $200, the second child is $150,
                                and any additional children will be $100.</p>
                                <li>
                                    1 child:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/GZLreBYs/" target="_blank" rel="noreferrer noopener">https://square.link/u/GZLreBYs/</a>
                                </li>
                                <li>
                                    2 children:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/aqelsAIN/" target="_blank" rel="noreferrer noopener">https://square.link/u/aqelsAIN/</a>
                                </li>
                                <li>
                                    3 children:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/SmF6VjzQ/" target="_blank" rel="noreferrer noopener">https://square.link/u/SmF6VjzQ/</a>
                                </li>
                                <li>
                                    4 children:
                                    <p style={{display: "inline"}}> </p>
                                    <a style={{display: "inline"}} href="https://square.link/u/7v8wxCQA/" target="_blank" rel="noreferrer noopener">https://square.link/u/7v8wxCQA/</a>
                                </li>
                                <li>
                                    5 children:
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