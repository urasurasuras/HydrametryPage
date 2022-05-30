import React from "react";
import {Carousel, Container} from "react-bootstrap";
import "./Home.css";
import {CarouselBackdrop} from "../../Components/CarouselBackdrop/CarouselBackdrop";
import bootstrap from 'bootstrap';

export class Home extends React.Component
{
    componentDidMount() {
    }

    render()
    {
        return <div>
            <Carousel className="mx-auto shadow-lg">
                <Carousel.Item>
                    <CarouselBackdrop img="./Spacapture.png" height="30rem" alt='4 Fodder enemies in a patrol group with a Pursuer sideways in the distance'></CarouselBackdrop>
                    {/* <Carousel.Caption>
                        <h2>First Slide</h2>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselBackdrop img="./unknown1.png" height="30rem"></CarouselBackdrop>
                    {/* <Carousel.Caption>
                        <h2>Second Slide</h2>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselBackdrop img="./unknown2.png" height="30rem"></CarouselBackdrop>
                    {/* <Carousel.Caption>
                        <h2>Third Slide</h2>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <Container className="mt-5">
                <div className="position-fixed sticky-top end-0 p-3">
                    <div className="toast align-items-center text-white bg-danger border-0 show" id="alertToast" role="alert">
                        <div className="d-flex">
                            <div className="toast-body">
                                This website is currently under construction.
                            </div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                        </div>
                    </div>
                </div>
                <h2>We are...<br/>Hydrametry Software!</h2>
                
                <img src="./midSizeLogo.png" class="col-md-3 center-block rounded mx-auto d-block img-fluid"></img>                
                
                <br/>
                <h4>Here at Hydrametry Software, we pride ourselves on quality, and the dedication it takes to
                    produce quality. Our vision is to create fun, accessible experiences that anyone can pick up and play.                 
                    <br/><br/>
                    Our team is comprised of seven people, all with unique talent in their respective areas, be they art,
                    programming, or music. We want nothing but to bring joy to the people who play our games. After all, video 
                    games are about having fun - and the more smiles we put on faces, the better.
                    <br/><br/>
                </h4>
                <div className="mt-3 ratio ratio-16x9 w-75 mx-auto">
                    <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/videoseries?list=UU8d2bDfXs9edY-OQxXzZ3nw&origin=https://hydrametry.com"/>
                </div>
            </Container>
        </div>
    }
}