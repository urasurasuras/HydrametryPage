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
                    <CarouselBackdrop img="./Spacapture.png" height="30rem"></CarouselBackdrop>
                    <Carousel.Caption>
                        <h2>First Slide</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselBackdrop img="./unknown1.png" height="30rem"></CarouselBackdrop>
                    <Carousel.Caption>
                        <h2>Second Slide</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselBackdrop img="./unknown2.png" height="30rem"></CarouselBackdrop>
                    <Carousel.Caption>
                        <h2>Third Slide</h2>
                    </Carousel.Caption>
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
                <h2>We are Hydrametry Software</h2>
                <br/>
                <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h4>
                <div className="mt-3 ratio ratio-16x9 w-75 mx-auto">
                    <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/videoseries?list=UU8d2bDfXs9edY-OQxXzZ3nw&origin=https://hydrametry.com"/>
                </div>
            </Container>
        </div>
    }
}