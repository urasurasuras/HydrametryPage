import React from "react";
import {Container} from "react-bootstrap";
import {TeamMember} from "../../Components/TeamMember/TeamMember";

export class AboutUs extends React.Component
{
    render()
    {
        return <Container>
            <h1 className="display-1">About Us</h1>
            <TeamMember img="./members/Andrew.jpg" name="Andrew"
                        description="I'm the creative director and founder of Hydrametry Software. I am a jack of all trades, for the most part, and I write shaders here and there. It is and always will be my goal to bring as many smiles to as many people as I can through our games."
                        caption="Founder / Director" links={["https://hydrametry.com/"]}/>
            <TeamMember img="./members/Ariel.jpg" name="Ariel"
                        description="Video games. Cats. Cheese. That's all you need to know."
                        caption="Sound Designer" links={["https://amerrittaudio.wordpress.com/"]} right/>
            <TeamMember img="./members/Brian.jpg" name="Brian"
                        description="I'm Brian, lead composer for Spatoo Jr. I do my best to make you feel pumped while assaulting evil sentient ships in the endless vacuum of space."
                        caption="Composer" links={["https://twitter.com/R3CORDS_Music"]}/>
            <TeamMember img="./members/Damien.png" name="Damien"
                        description="!!!!!!!!!!!!!!!!!"
                        caption="3D Artist" links={["https://twitter.com/combee3d"]} right/>
            <TeamMember img="./members/Emmy.jpg" name="Emmy"
                        description="Hey, I'm Emmy, solo gamedev and multimedia artist. Officially, I'm the concept & texture artist but sometimes I'll step in to help with music and sounds too."
                        caption="2D Artist + Professional Hat-Wearer" links={["https://emmycron.itch.io/"]}/>
            <TeamMember img="./members/Joao.jpg" name="Joao"
                        description="I'm a dedicated game dev with a focus on programming. I like fixing problems and solving puzzles, but I'm also quite partial to design and storytelling."
                        caption="Gameplay Programmer" links={["https://jja42.itch.io/"]} right/>
            <TeamMember img="./members/Uras.jpg" name="Uras"
                        description="Sample text goes here!"
                        caption="Gameplay Programmer" links={["https://urasurasuras.github.io/portfolio/"]}/>
        </Container>
    }
}