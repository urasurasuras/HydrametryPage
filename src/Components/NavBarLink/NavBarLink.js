import React from "react";
import "./NavBarLink.css";

export class NavBarLink extends React.Component
{
    render()
    {
        const pathname = this.props.href;
        const currentPath = window.location.pathname;
        const className = this.props.className;

        return <li className="nav-item">
            <a className={`nav-link ${pathname === currentPath && "active"} ${className}`} href={pathname}>
                {this.props.children}
            </a>
        </li>;
    }
}