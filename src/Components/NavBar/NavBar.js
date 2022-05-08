import React from "react";
import {Navbar, NavbarBrand, Nav, Container, NavLink} from "react-bootstrap";
import {Endpoints} from "../../Endpoints";
import {useLocation} from "react-router-dom";
import {NavBarNav} from "../../NavBarNav/NavBarNav";
import {NavBarLink} from "../NavBarLink/NavBarLink";
import "./NavBar.css";

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
        const pathname = window.location.pathname;

        return <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-lg">
            <div className="container-fluid mt-1">
                <a href="/">
                    <img src="./logo.png" height="50rem" alt="logo" className="d-inline-block"/>
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-3 mt-2" id="navbarSupportedContent">
                    <NavBarNav className="flex-shrink-0">
                        <NavBarLink href="/">Home</NavBarLink>
                        <NavBarLink href={Endpoints.Spatoo}>Spatoo Jr.</NavBarLink>
                        <NavBarLink href={Endpoints.AboutUs}>About Us</NavBarLink>
                    </NavBarNav>
                    <NavBarNav className=" d-flex flex-grow-1 justify-content-lg-end flex-row justify-content-center">
                        <NavBarLink href="https://discord.gg/RNxs3KvgM9" className=" mx-2 mx-lg-0">
                            <i className="bi bi-discord"></i>
                        </NavBarLink>
                        <NavBarLink href="https://twitter.com/hydrametry/" className=" mx-2 mx-lg-0">
                            <i className="bi bi-twitter"></i>
                        </NavBarLink>
                        <NavBarLink href="https://www.youtube.com/channel/UC8d2bDfXs9edY-OQxXzZ3nw" className=" mx-2 mx-lg-0">
                            <i className="bi bi-youtube"></i>
                        </NavBarLink>
                        <NavBarLink href="mailto:andrew@hydrametry.com" className=" mx-2 mx-lg-0">
                            <i className="bi bi-envelope"></i>
                        </NavBarLink>
                    </NavBarNav>
                </div>
            </div>
        </nav>;
    }
}