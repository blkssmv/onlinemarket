import React from 'react';
import {Container, Form, Row, Button, Card} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'

const AuthPage = () => {

    const location = useLocation()

    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>
                    {isLogin ? "Авторизация" : "Регистрация"}
                </h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'/>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'/>
                    <Row className='d-flex justify-content-between mt-3 px-3'>
                        <>
                        {
                        isLogin 
                        ? 
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                        </div> 
                        : 
                        <div>
                            Уже зарегистрированы? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                        }
                        </>
                        
                        <Button 
                            variant='outline-success'
                            className='mt-3 align-self-end'
                            >
                                {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default AuthPage;