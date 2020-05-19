import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="container-login">
            <div className="container-form">
                <Form className="form-login">
                    <h2 className="form-header">Sign in</h2>
                    <h6 className="sub-header"> Use the credentials supplied to you by MPAC. </h6>
                    <Form.Group className="form-field" controlId="formBasicEmail">
                        <div className="form-field-labels">
                            <Form.Label>USER ID</Form.Label>
                            <Form.Label className="form-field-forgot">Forgot User ID?</Form.Label>
                        </div>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="form-field" controlId="formBasicPassword">
                        <div className="form-field-labels">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Label className="form-field-forgot">Forgot Password?</Form.Label>
                        </div>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Link to="/splash">
                        <Button className="button-login" variant="light" type="submit">
                            <span style={{ color: "black" }}> LOGIN</span>{" "}
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;
