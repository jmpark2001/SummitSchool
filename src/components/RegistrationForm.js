import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { db } from "../utils/firebase"
import { doc, setDoc } from "firebase/firestore"
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {
    const classList2 = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean", "Spanish", "Chinese", "Japanese", "Adult Korean", "Adult English", "Guitar", "Piano", "Flute", "Violin", "Drum",
     "SAT", "General", "PE"]
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Japanese Beginner", "Japanese Intermediate", "Japanese Advanced", "Adult Korean Beginner", "Adult Korean Intermediate", "Adult Korean Advanced", "Adult English Baginner", 
     "Adult English Intermediate", "Adult English Advanced", "Guitar Beginner", "Guitar Some Experience", "Guitar Advanced", "Piano Beginner", "Piano Some Experience", "Piano Advanced", "Flute Beginner", "Flute Some Experience", "Flute Advanced",
     "Violin Beginner", "Violin Some Experience", "Violin Advanced", "Drum Beginner", "Drum Some Experience", "Drum Advanced", "SAT Math", "SAT English", "Kindergarten", "Basketball", "Stretching and Mobility"]
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
        homeAddress: "",
        homeAddress2: "",
        homeCity: "",
        homeState: "DEFAULT",
        homeZip: "",
        classes: []
    })

    const handleOnChange = (position, e) => {
        let checkedBoxes = checkedState.filter((i) => i)
        function hasBiblical() {
            if (checkedState[0] === true || checkedState[1] === true || checkedState[2] === true || checkedState[3] === true || checkedState[4] === true || classList.slice(0, 5).includes(e.target.name)) {
                return true
            }
            else {
                return false
            }
        }
        if (checkedBoxes.length >= 2 && e.target.checked) {
            return
        }
        if (checkedBoxes.length >= 1 && !hasBiblical() && e.target.checked){
            return
        }
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
    
    function atLeastOneCheckboxIsChecked(){
        const checkboxes = Array.from(document.getElementsByClassName("bibleCheck"))
        return checkboxes.reduce((acc, curr) => acc || curr.checked, false)
    }
    
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value}
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        const newForm = {...form}
        if (!atLeastOneCheckboxIsChecked()) {
            alert("One biblical class is required to submit the form")
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
                homeAddress: "",
                homeAddress2: "",
                homeCity: "",
                homeState: "DEFAULT",
                homeZip: "",
                classes: []
            })
            setCheckedState(new Array(classList.length).fill(false))
        }
    }
    

    return (
        <div className="registrationWholePageDiv glacial">
            <hr style={{borderWidth: "0 0 .25vh 0", borderColor: "black", borderStyle: "solid", width: "10%", marginTop:"2vh"}}></hr>
            <h1 className="registrationTitle">REGISTRATION FORM</h1>
            <div className="registrationPage">
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div className="formDiv">
                        <Form onSubmit={onSubmit}>
                            <div className="dates">
                                <p style={{display: "inline", fontWeight: "600", marginLeft: "5vh", width: "100%"}}>REGISTRATION & PAYMENT PERIOD:</p>
                                <p style={{display: "inline"}}> August 14th - September 3rd</p>  
                            </div>
                            <div style={{fontSize: "2vh", textAlign: "left", margin: ".5vh 0 1vh 0"}}>
                                <p style={{display: "inline", fontWeight: "600", marginLeft: "5vh"}}>FALL SEMESTER:</p>
                                <p style={{display: "inline"}}> Every Saturday except Remnant Day (Last Saturday of every month) from </p>
                                <p style={{display: "inline", marginLeft: "5vh"}}>September 16th - January 20th</p>
                            </div>
                            <div className="formScheduleDiv">
                                <div className="formScheduleContent">
                                    <p className="classesInfoTitle" style={{display: "inline"}}>WORSHIP:</p>
                                    <p style={{display: "inline"}}> 9AM - 10AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>FIRST CLASS:</p>
                                    <p style={{display: "inline"}}> 10AM - 11AM</p>
                                    <br></br>
                                    <p className="classesInfoTitle" style={{display: "inline"}}>SECOND CLASS:</p>
                                    <p style={{display: "inline"}}> 11AM - 12PM</p>
                                </div>
                            </div>
                            <div className="formAnswersDiv">
                                <div style={{marginTop: "2vh", textAlign: "left"}}>
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
                                <p className="instructions">Choose at least 1 biblical class and up to 1 additional class of your choice</p>
                                <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center"}}>
                                    <p className="biblicalTitle" style={{width: "min-content"}}>Biblical</p>
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
                                </div>
                                
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div className="classDiv">
                                    <p className="classTitles">Language</p>
                                    <ul className="otherClass">
                                        {classList2.slice(5,11).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index*3 + 5}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 5}
                                                            name={className + " Beginner"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 5]}
                                                            onChange={(e) => handleOnChange(index*3 + 5, e)}
                                                        />
                                                        <label>{"Beginner"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 6}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 6}
                                                            name={className + " Intermediate"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 6]}
                                                            onChange={(e) => handleOnChange(index*3 + 6, e)}
                                                        />
                                                        <label>{"Intermediate"}</label>
                                                    </div>
                                                </li>
                                                <li key={index*3 + 7}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 7}
                                                            name={className + " Advanced"}
                                                            value={form.classes}
                                                            checked={checkedState[index*3 + 7]}
                                                            onChange={(e) => handleOnChange(index*3 + 7, e)}
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
                                        {classList2.slice(11,16).map((className, index) =>
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
                                <div className="classDiv">
                                    <p className="classTitles">Academic</p>
                                    <ul className="otherClass">
                                        {classList2.slice(16, 17).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 38}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+38}
                                                            name={className + " Math"}
                                                            value={form.classes}
                                                            checked={checkedState[index+38]}
                                                            onChange={(e) => handleOnChange(index+38, e)}
                                                        />
                                                        <label>{"Math"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 39}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+39}
                                                            name={className + " English"}
                                                            value={form.classes}
                                                            checked={checkedState[index+39]}
                                                            onChange={(e) => handleOnChange(index+39, e)}
                                                        />
                                                        <label>{"English"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Pre-K/K</p>
                                    <ul className="otherClass">
                                        {classList2.slice(17, 18).map((className, index) => 
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 40}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+40}
                                                            name={className}
                                                            value={form.classes}
                                                            checked={checkedState[index+40]}
                                                            onChange={(e) => handleOnChange(index+40, e)} 
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
                                        {classList2.slice(18).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0", fontWeight: "bold"}}>{className}</p>
                                                <li key={index + 41}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+41}
                                                            name={className + " Math"}
                                                            value={form.classes}
                                                            checked={checkedState[index+41]}
                                                            onChange={(e) => handleOnChange(index+41, e)}
                                                        />
                                                        <label>{"Basketball"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 42}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+42}
                                                            name={className + " English"}
                                                            value={form.classes}
                                                            checked={checkedState[index+42]}
                                                            onChange={(e) => handleOnChange(index+42, e)}
                                                        />
                                                        <label>{"Stretching and Mobility"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <p style={{fontSize: "2vh", fontWeight: "bold"}}>Methods of Payment ($200)</p>
                            <ol className="payment" style={{listStyle: "none"}}>
                                <p style={{fontWeight: "bold", lineHeight: "2vh"}}>Click on the links below to pay with credit or debit. For multiple children the pricing goes as follows: The first child you enroll will cost $200, the second child is $150,
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
                            <Button className="submitButton" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm