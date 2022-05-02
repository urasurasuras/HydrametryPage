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
            <div className="pt-2 flex-column mx-auto">
                <p className="mb-0">{new Date().getFullYear()}&copy; Hydrametry</p>
                <NavBarNav>
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
            </div>
        </Navbar>
    }
}