import React from "react";
import {Container} from "react-bootstrap";
import {TeamMember} from "../../Components/TeamMember/TeamMember";

export class AboutUs extends React.Component
{
    render()
    {
        return <Container>
            <h1 className="display-1">About Us</h1>
            <TeamMember img="https://galeri8.uludagsozluk.com/414/vasili-vasilyevic-radlof_633153.jpg" name="User One"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        caption="Lorem ipsum"/>
            <TeamMember img="https://galeri8.uludagsozluk.com/414/vasili-vasilyevic-radlof_633153.jpg" name="User Two"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        caption="Lorem ipsum" right/>
            <TeamMember img="https://galeri8.uludagsozluk.com/414/vasili-vasilyevic-radlof_633153.jpg" name="User Three"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        caption="Lorem ipsum"/>
            <TeamMember img="https://galeri8.uludagsozluk.com/414/vasili-vasilyevic-radlof_633153.jpg" name="User Four"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        caption="Lorem ipsum" right/>
            <TeamMember img="https://galeri8.uludagsozluk.com/414/vasili-vasilyevic-radlof_633153.jpg" name="User Five"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        caption="Lorem ipsum"/>
            <TeamMember img="https://galeri8.uludagsozluk.com/414/vasili-vasilyevic-radlof_633153.jpg" name="User Six"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        caption="Lorem ipsum" right/>
        </Container>
    }
}