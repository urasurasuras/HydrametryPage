import React from "react";
import {Container} from "react-bootstrap";

export class NotFound extends React.Component
{
    render()
    {
        return <div className="d-flex flex-column mt-5 page-fill">
            <span className="material-symbols-outlined text-danger display-1">question_mark</span>
            Are you lost
        </div>
    }
}