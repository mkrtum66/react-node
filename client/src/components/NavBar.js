import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Shop</NavLink>
                {
                    user.isAuth ?
                        <Nav className='ml-auto' style={{color:'white'}}>
                            <Button
                                variant='outline-light'
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Admin Panel
                            </Button>
                            <Button
                                variant='outline-light'
                                className='mx-2'
                                onClick={() => logOut()}
                            >
                                Logout
                            </Button>
                        </Nav>
                        :
                        <Nav className='ml-auto' style={{color:'white'}}>
                            <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Registration</Button>
                        </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;
