import React, { useEffect, useState }  from "react";
import axios from "axios";
import {Button, Col, Container, Form, Row} from "react-bootstrap";


const baseURL = "http://127.0.0.1:8000/api/leaves/";

const Signin = (props) => {
    const [leaves, setLeaves] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setLeaves(response.data);
        });
    }, []);

    if (!leaves) return null;
    console.log(leaves);

    return (
        <div class={"content-space main-component"}>
            <Container class={"my-auto"}>
                <Row className="justify-content-md-center">
                    <Col xs={3}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signin;