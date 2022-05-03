import React from "react";
import {Container, Navbar} from "react-bootstrap";
import "./Footer.css";
import {NavBarLink} from "../NavBarLink/NavBarLink";
import {NavBarNav} from "../../NavBarNav/NavBarNav";

export class Footer extends React.Component
{
    render()
    {
        return <Navbar bg="dark" sticky="bottom" variant="dark" className="mt-5 border-top border-secondary">
            <div className="vstack gap-1">
                <p className="mb-0">{new Date().getFullYear()}&copy; Hydrametry</p>
                <NavBarNav className="mx-auto">
                    <NavBarLink href="https://discord.gg/RNxs3KvgM9"s>
                        <i className="bi bi-discord"></i>
                    </NavBarLink>
                    <NavBarLink href="https://twitter.com/hydrametry/">
                        <i className="bi bi-twitter"></i>
                    </NavBarLink>
                    <NavBarLink href="https://www.youtube.com/channel/UC8d2bDfXs9edY-OQxXzZ3nw">
                        <i className="bi bi-youtube"></i>
                    </NavBarLink>
                    <NavBarLink href="mailto:andrew@hydrametry.com">
                        <i className="bi bi-envelope"></i>
                    </NavBarLink>
                </NavBarNav>
                <span className="mt-0 d-flex align-items-center fw-lighter mx-auto" style={{fontSize: ".5rem"}}>
                    <span className="material-symbols-outlined" style={{fontSize: ".5rem"}}>code</span> with <span className="material-symbols-outlined" style={{fontSize: ".5rem"}}>favorite</span> by Cenngo
                </span>
                <i className="text-dark" style={{fontSize: ".5rem"}}>atac vurduruyo</i>
            </div>
        </Navbar>
    }
}