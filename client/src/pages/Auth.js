import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
            <Card className='p-5' style={{width: 600}}>
                <h2 className='m-auto'>{isLogin ? "Login" : "Registration"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-3' placeholder="Write Email" />
                    <Form.Control className='mt-3' placeholder="Write Password" />
                    <Row className='d-flex justify-content-between mt-3 px-3'>
                        {
                            isLogin ?
                                <div>
                                    Don't have an account?
                                    <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                                </div>
                                :
                                <div>
                                    Do you have an account?
                                    <NavLink to={REGISTRATION_ROUTE}>Login</NavLink>
                                </div>
                        }
                        <Button variant='outline-success mt-3'>
                            {isLogin ? 'Login' : "Register"}
                        </Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
};

export default Auth;
