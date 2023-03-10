import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"
import { SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>A.B. SHOP</Navbar.Brand>
        {user.isAuth ? <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant="outline-light">Админ панель</Button>
            <Button variant="outline-light" className="ms-2">Войти</Button>
        </Nav> : <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        </Nav>}
        
      </Container>
    </Navbar>
  );
});

export default NavBar;
