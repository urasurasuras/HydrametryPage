import React from 'react';

export class GalleryRow extends React.Component
{
    render()
    {
        return <div className="d-flex justify-content-evenly mt-5">
            {this.props.children}
        </div>;
    }
}