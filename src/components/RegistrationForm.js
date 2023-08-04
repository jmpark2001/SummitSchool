import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {
    const classList2 = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean", "Spanish", "Chinese", "Japanese", "Adult Korean", "Adult English", "Guitar", "Piano", "Flute", "Violin", "SAT"]
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Japanese Beginner", "Japanese Intermediate", "Japanese Advanced", "Adult Korean Beginner", "Adult Korean Intermediate", "Adult Korean Advanced", "Adult English Baginner", 
     "Adult English Intermediate", "Adult English Advanced", "Guitar Beginner", "Guitar Some Experience", "Guitar Advanced", "Piano Beginner", "Piano Some Experience", "Piano Advanced", "Flute Beginner", "Flute Some Experience", "Flute Advanced",
     "Violin Beginner", "Violin Some Experience", "Violin Advanced", "SAT Math", "SAT English"]
    const stateList = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Lousiana", "Maine", "Maryland",
     "Massachusettes", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
     "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    const [checkedState, setCheckedState] = useState(new Array(classList.length).fill(false))

    const handleOnChange = (position, e) => {
        console.log(position)
        let checkedBoxes = checkedState.filter((i) => i)
        function hasBiblical() {
            if (checkedState[0] === true || checkedState[1] === true || checkedState[2] === true || checkedState[3] === true || checkedState[4] === true || classList.slice(0, 5).includes(e.target.name)) {
                return true
            }
            else {
                return false
            }
        }
        console.log(checkedBoxes)
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
    }

    function atLeastOneCheckboxIsChecked(){
        const checkboxes = Array.from(document.getElementsByClassName("bibleCheck"))
        return checkboxes.reduce((acc, curr) => acc || curr.checked, false)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(e)
        if (!atLeastOneCheckboxIsChecked()) {
            alert("One biblical class is required to submit the form")
        }
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        console.log({payload})
    }

    return (
        <div className="registrationPage">
            <h1 className="registrationTitle">REGISTRATION FORM</h1>
            <div className="formDiv">
                <Form onSubmit={submitForm}>
                    <p className="dates">Registration and Payment Period: August 13th - September 3rd</p>
                    <p className="dates">Fall Semester: Every Saturday except Remnant Day (Last Saturday of every month) from September 16th - January 20th</p>
                    <p className="dates">Worship: 9am - 10am</p>
                    <p className="dates">First Class: 10am - 11am</p>
                    <p className="dates">Second Class: 11am - 12pm</p>
                    <Form.Group as={Row} className="leftAlign marginTop" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Student Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="studentFullName" placeholder="Enter Full Name" required></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="leftAlign" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Parent Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="parentFullName" placeholder="Enter Full Name" required></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="leftAlign" controlId="formHorizontalNumber">
                        <Form.Label column sm={2}>
                            Student Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="studentPhoneNumber" placeholder="Enter Phone Number"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="leftAlign" controlId="formHorizontalNumber">
                        <Form.Label column sm={2}>
                            Parent Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="parentPhoneNumber" placeholder="Enter Phone Number" required></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="leftAlign" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Parent Email Address
                        </Form.Label>
                        <Col>
                            <Form.Control type="email" name="email" placeholder="Enter Email Address" required></Form.Control>
                        </Col>
                    </Form.Group>
                    <p className="form-label col-form-label col-sm-2 leftAlign" style={{marginTop: "0", fontWeight: "bold", marginBottom: "1.5vh"}}>Home Address</p>
                    <Form.Group controlId="formAddress" className="leftAlign" style={{fontSize: "1vh"}}>
                        <div className="col-sm-11" style={{marginBottom: "1vh"}}>
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                        </div>
                        <div className="col-sm-11" style={{marginBottom: "1vh"}}>
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div>
                            <div className="col-md-6" style={{marginBottom: "1vh"}}>
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" required/>
                            </div>
                            <div className="col-md-4" style={{marginBottom: "1vh"}}>
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" className="form-control" defaultValue={"DEFAULT"} required>
                                    <option value="DEFAULT" disabled>Choose...</option>
                                    {stateList.map((state, index) =>
                                       <option key={index} value={index}>{state}</option> 
                                        )}
                                </select>
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" required/>
                            </div>
                        </div>
                    </Form.Group>
                    <p className="instructions leftAlign">Choose at least 1 biblical class and up to 1 additional class of your choice</p>
                    <p className="biblicalTitle">Biblical Classes</p>
                    {
                        <>
                            <ul className="bibleClass">
                                {classList.slice(0, 5).map((className, index) => 
                                    <li key={index}>
                                        <div>
                                            <input
                                                type="checkbox"
                                                className="bibleCheck"
                                                id={index}
                                                name={className}
                                                value={className}
                                                checked={checkedState[index]}
                                                onChange={(e) => handleOnChange(index, e)}
                                            />
                                            <label>{className}</label>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            <div>
                                <div className="classDiv">
                                    <p className="classTitles">Language Classes</p>
                                    <br></br>
                                    <ul className="otherClass">
                                        {classList2.slice(5,11).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0"}}>{className}</p>
                                                <li key={index*3 + 5}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 5}
                                                            name={className + " Beginner"}
                                                            value={className + " Beginner"}
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
                                                            value={className + " Intermediate"}
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
                                                            value={className + " Advanced"}
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
                                    <p className="classTitles">Instrument Classes</p>
                                    <br></br>
                                    <ul className="otherClass">
                                        {classList2.slice(11,15).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0"}}>{className}</p>
                                                <li key={index*3 + 23}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index*3 + 23}
                                                            name={className + " Beginner"}
                                                            value={className + " Beginner"}
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
                                                            value={className + " Intermediate"}
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
                                                            value={className + " Advanced"}
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
                                    <p className="classTitles">Academic Classes</p>
                                    <ul className="otherClass">
                                        {classList2.slice(15).map((className, index) =>
                                            <>
                                                <p style={{margin: "1vh 0 0 0"}}>{className}</p>
                                                <li key={index + 35}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+35}
                                                            name={className + " Math"}
                                                            value={className + " Math"}
                                                            checked={checkedState[index+35]}
                                                            onChange={(e) => handleOnChange(index+35, e)}
                                                        />
                                                        <label>{"Math"}</label>
                                                    </div>
                                                </li>
                                                <li key={index + 36}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+36}
                                                            name={className + " English"}
                                                            value={className + " English"}
                                                            checked={checkedState[index+36]}
                                                            onChange={(e) => handleOnChange(index+36, e)}
                                                        />
                                                        <label>{"English"}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </>
                    }
                    <Button className="submitButton" type="submit">Submit</Button>
                    <div>
                        <p>Methods of Payment ($200)</p>
                        <ol className="payment">
                            <li>
                                Cash: Give to Encourager Sung-Kyung Yoo
                            </li>
                            <li>
                                Check: Made out to Encourager Sung-kyung Yoo
                            </li>
                            <li>
                                Zelle: (insert zelle information)
                            </li>
                            <li>
                                Click this link to pay with credit or debit
                                <p style={{display: "inline"}}> </p>
                                <a style={{display: "inline"}} href="https:square.link/u/GZLreBYs/" target="_blank" rel="noreferrer noopener">https:square.link/u/GZLreBYs/</a>
                            </li>
                        </ol>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegistrationForm