import React from 'react';
import "./CarouselBackdrop.css";

export class CarouselBackdrop extends React.Component
{
    render() {
        return <div className="backdrop" style={{ height: this.props.height, background: `url("${this.props.img}")`}}></div>;
    }

}