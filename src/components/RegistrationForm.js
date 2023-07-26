import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import 'bootstrap/dist/css/bootstrap.min.css'

function RegistrationForm() {

    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        console.log({payload})
    }

    return (
        <>
            <h1 className="registrationTitle">Registration Form</h1>
            <div className="formDiv">
                <form onSubmit={submitForm}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="fullName" placeholder="Enter Full Name"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
                        <Form.Label column sm={2}>
                            Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="phoneNumber" placeholder="Enter Phone Number"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email Address
                        </Form.Label>
                        <Col>
                            <Form.Control type="email" name="email" placeholder="Enter Email Address"></Form.Control>
                        </Col>
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Classes
                            </Form.Label>
                            <Col sm={11}>
                                <Form.Check
                                    type="checkbox"
                                    label="test"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="temp"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    
                    <Form.Group as ={Row} className="mb-3">
                        <Col sm={{ span: 10, offset:2 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </form>
            </div>
        </>
    )
}

export default RegistrationForm