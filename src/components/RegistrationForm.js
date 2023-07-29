import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {
    // const [fullName, setFullName] = useState('')
    // const [number, setNumber] = useState(0)
    // const [email, setEmail] = useState('')
    const classList = ["Bibilical Worldview", "Church History", "Old Testament", "New Testament", "Systematic Theology", "Korean Beginner", "Korean Intermediate", "Korean Advanced", "Spanish Beginner", "Spanish Intermediate", "Spanish Advanced",
     "Chinese Beginner", "Chinese Intermediate", "Chinese Advanced", "Japanese Beginner", "Japanese Intermediate", "Japanese Advanced", "Guitar Beginner", "Guitar Some Experience", "Guitar Advanced", "Piano Beginner", "Piano Some Experience",
      "Piano Advanced", "Beginner Drums", "Some Experience Drums", "Advanced Drums", "Beginner Drums", "Some Experience Drums", "Advanced Guitar", "SAT Math", "SAT English", "Beginner Adult Korean", "Intermediate Adult Korean",
       "Advanced Adult Korean", "Beginner Adult English", "Intermediate Adult English", "Advanced Adult English"]
    const [checkedState, setCheckedState] = useState(new Array(classList.length).fill(false))


    const handleOnChange = (position, e) => {
        if (checkedState.filter((i) => i).length >= 2 && e.target.checked) {
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
        // let arr = checkedState.reduce((out, bool, index) => bool ? out.concat(index) : out, [])
        // for (let i=0; i<arr.length; i++){
        //     console.log(classList[arr[i]])
        // }
        console.log({payload})
    }

    /*
    <ul className="blank">
        {classList.map((className, index) => 
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
    */

    return (
        <>
            <h1 className="registrationTitle">Registration Form</h1>
            <div className="formDiv">
                <Form onSubmit={submitForm}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Student Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="studentFullName" placeholder="Enter Full Name"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Parent Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="parentFullName" placeholder="Enter Full Name"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
                        <Form.Label column sm={2}>
                            Student Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="studentPhoneNumber" placeholder="Enter Phone Number"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
                        <Form.Label column sm={2}>
                            Parent Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="parentPhoneNumber" placeholder="Enter Phone Number"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Parent Email Address
                        </Form.Label>
                        <Col>
                            <Form.Control type="email" name="email" placeholder="Enter Email Address"></Form.Control>
                        </Col>
                    </Form.Group>
                    
                    <p>Choose at least 1 biblical class and up to 1 additional class</p>
                    {/* <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Classes
                            </Form.Label>
                            {classList.map((className, index) => {console.log(className);
                                <Col sm={11} >
                                    <Form.Check
                                        key={index}
                                        type="checkbox"
                                        label={className}
                                        checked={checkedState[index]}
                                        onChange={(e) => handleOnChange(index, e)}
                                    />
                                </Col>    
                            })}
                            
                        </Form.Group>
                    </fieldset> */}
                    {
                        <ul className="class">
                            {classList.map((className, index) =>
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
                    }
                    
                    <Form.Group as ={Row} className="mb-3">
                        <Col sm={{ span: 10, offset:2 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default RegistrationForm