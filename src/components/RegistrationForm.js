import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Japanese Beginner", "Japanese Intermediate", "Japanese Advanced", "Adult Korean Beginner", "Adult Korean Intermediate", "Adult Korean Advanced", "Adult English Baginner", 
     "Adult English Intermediate", "Adult English Advanced", "Guitar Beginner", "Guitar Some Experience", "Guitar Advanced", "Piano Beginner", "Piano Some Experience", "Piano Advanced", "Flute Beginner", "Flute Some Experience", "Flute Advanced",
     "Violin Beginner", "Violin Some Experience", "Violin Advanced", "SAT Math", "SAT English"]
    const [checkedState, setCheckedState] = useState(new Array(classList.length).fill(false))

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

    const submitForm = (e) => {
        e.preventDefault()
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
                            <Form.Control type="text" name="studentFullName" placeholder="Enter Full Name"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="leftAlign" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Parent Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="parentFullName" placeholder="Enter Full Name"></Form.Control>
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
                            <Form.Control type="number" name="parentPhoneNumber" placeholder="Enter Phone Number"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="leftAlign" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Parent Email Address
                        </Form.Label>
                        <Col>
                            <Form.Control type="email" name="email" placeholder="Enter Email Address"></Form.Control>
                        </Col>
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
                                        {classList.slice(5, 23).map((className, index) =>
                                            <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={index+5}
                                                        name={className}
                                                        value={className}
                                                        checked={checkedState[index+5]}
                                                        onChange={(e) => handleOnChange(index+5, e)}
                                                    />
                                                    <label>{className}</label>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Instrument Classes</p>
                                    <ul className="otherClass">
                                        {classList.slice(23,35).map((className, index) =>
                                            <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={index+23}
                                                        name={className}
                                                        value={className}
                                                        checked={checkedState[index+23]}
                                                        onChange={(e) => handleOnChange(index+23, e)}
                                                    />
                                                    <label>{className}</label>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="classDiv">
                                    <p className="classTitles">Academic Classes</p>
                                        <ul className="otherClass">
                                            {classList.slice(35).map((className, index) =>
                                                <li key={index}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={index+35}
                                                            name={className}
                                                            value={className}
                                                            checked={checkedState[index+35]}
                                                            onChange={(e) => handleOnChange(index+35, e)}
                                                        />
                                                        <label>{className}</label>
                                                    </div>
                                                </li>
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
                                <a href="https://one-mind-church-summit-school.square.site/" target="_blank" rel="noreferrer noopener">Click here to pay online</a>
                            </li>
                        </ol>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegistrationForm