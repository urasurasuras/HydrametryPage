import React from 'react';

export class CarouselBackdrop extends React.Component
{
    render() {
        return <div className="backdrop" style={{ height: this.props.height, background: `url("${this.props.img}")`, backgroundSize: "cover",
        backgroundPosition: "center", backgroundAttachment: "", backgroundRepeat: "no-repeat"}}></div>;
    }

}