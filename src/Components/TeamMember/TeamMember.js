import React from 'react';
import {Col, Container, Figure, Row} from "react-bootstrap";
import "./TeamMember.css";

export class TeamMember extends React.Component
{
    render()
    {
        return <div className="d-flex align-items-center mt-4 p-3 row">
            <div className={`flex-shrink-0 order-1 col-lg-3 ${this.props.right ? 'order-lg-1' : 'order-lg-0'}`}>
                <img src={this.props.img} alt="member img" height="200rem" width="auto"/>
                <h5>{this.props.name}</h5>
                <h6>{this.props.caption}</h6>
                {this.props.links?.map((x, index) => <a className="link-secondary" href={x} key={index}>{x}</a>)}
            </div>
            <div className={`flex-grow-1 mx-3 order-2 text-start col-lg ${this.props.right ? 'order-lg-0' : 'order-lg-1'}`}>
                <h3 className="fw-light">{this.props.description}</h3>
            </div>
        </div>;
    }
}