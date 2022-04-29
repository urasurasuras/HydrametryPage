import React from 'react';
import {Container} from "react-bootstrap";
import {DiscordWidget} from "../../Components/DiscordWidget/DiscordWidget";

export class SpatooJr extends React.Component
{
    render()
    {
        return <Container fluid>
            <DiscordWidget height="400" width="50%"/>
        </Container>
    }
}