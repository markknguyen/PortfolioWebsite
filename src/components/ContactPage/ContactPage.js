import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./ContactPage.css"

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [state, handleSubmit] = useForm("mwkdbdnj");

    if (state.succeeded) {
        return <p style={{textAlign: "center"}}>Message sent!</p>;
    }
    return (
        <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label >Name</Form.Label>
                        <Form.Control 
                            placeholder="Enter name" 
                            value={name}
                            onChange={({target:{value}}) => setName(value)}
                            required
                            name="name" // for formspree
                            aria-label="name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email}
                            onChange={({target:{value}}) => setEmail(value)}
                            required
                            name="email" // for formspree
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                            placeholder="Enter subject" 
                            value={subject}
                            onChange={({target:{value}}) => setSubject(value)}
                            required
                            name="subject" // for formspree
                            aria-label="subject"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={4}
                            placeholder="Enter message" 
                            value={message}
                            onChange={({target:{value}}) => setMessage(value)}
                            required
                            name="message" // for formspree
                            aria-label="message"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    )
}

export default function ContactPage() {
    return (
        <>
            <div id="contact" className="contact">
                <h1>Contact</h1>
                <div className="contact-container">
                    <div className="form-container">
                        <ContactForm />
                    </div>
                    <div className="button-container">
                    <Button 
    variant="dark" 
    href="https://www.linkedin.com/in/mark-nguyen-7998a9255/" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
    <FontAwesomeIcon icon={faLinkedin} style={{ width: '100%', height: '100%' }} />
</Button>
<Button 
    variant="dark" 
    href="https://github.com/markknguyen" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
    <FontAwesomeIcon icon={faGithub} style={{ width: '100%', height: '100%' }} />
</Button>

                    </div>
                    <footer style={{textAlign: "center"}}>
                        <small>&copy; 2023 Mark Nguyen. All rights reserved.</small>
                    </footer>
                </div>
            </div>
        </>
    );
}