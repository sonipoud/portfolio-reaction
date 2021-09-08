import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({ ...formState, [e.target.name]: e.target.value })
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    console.log('errorMessage', errorMessage);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2> Contact Me </h2>
            <Form id="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                </Form>
        </section >     
    )
}

export default Contact;
