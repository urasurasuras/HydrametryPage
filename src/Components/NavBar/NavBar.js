import React from "react";
import {Navbar, NavbarBrand, Nav, Container, NavLink} from "react-bootstrap";
import {Endpoints} from "../../Endpoints";

export class NavBar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          activeLink : "/"
        };
    }

    render()
    {
        return <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="./logo512.png" height="50rem" alt="logo" className="d-inline-block"/>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="d-flex me-auto">
                    <Nav className="me-auto mb-lg-0 mb-2">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href={Endpoints.Spatoo}>Spatoo Jr.</NavLink>
                        <NavLink href={Endpoints.AboutUs}>About Us</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink href="#">
                            <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink href="#">
                            <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink href="#">
                            <i className="bi bi-discord"></i>
                        </NavLink>
                        <NavLink href="#">
                            <i className="bi bi-envelope-fill"></i>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>;
    }
}