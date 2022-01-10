import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password)
            }else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
            <Card className='p-5' style={{width: 600}}>
                <h2 className='m-auto'>{isLogin ? "Login" : "Registration"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-3' placeholder="Write Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className='mt-3' placeholder="Write Password" value={password} onChange={e => setPassword(e.target.value)} type='password'/>
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
                        <Button variant='outline-success mt-3' onClick={signUp}>
                            {isLogin ? 'Login' : "Register"}
                        </Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
});

export default Auth;
