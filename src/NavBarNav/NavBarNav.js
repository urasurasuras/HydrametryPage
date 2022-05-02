import React from "react";
import {Endpoints} from "../Endpoints";
import "./NavBarNav.css";

export class NavBarNav extends React.Component
{
    render()
    {
        const className = this.props.className;

        return <ul className={`navbar-nav me-auto mb-2 mg-lg-0 ${className}`}>
            {this.props.children}
        </ul>;
    }
}