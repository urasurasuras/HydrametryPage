import React from 'react';
import {Col, Container, Figure, Row} from "react-bootstrap";
import "./TeamMember.css";

export class TeamMember extends React.Component
{
    render()
    {
        return <div className="d-flex align-items-center mt-5 p-3">
            <div className={`flex-shrink-0 order-1 ${this.props.right ? 'order-lg-1' : 'order-lg-0'}`}>
                <img src={this.props.img} alt="member img"/>
                <h5>{this.props.caption}</h5>
                <h6>{this.props.caption}</h6>
                <h6>{this.props.caption}</h6>
            </div>
            <div className={`flex-grow-1 ms-3 order-2 text-start ${this.props.right ? 'order-lg-0' : 'order-lg-1'}`}>
                <h3 className="fw-light">{this.props.description}</h3>
            </div>
        </div>;
    }
}