import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import "./CarouselWithStaticCaption.css";

function CarouselWithStaticCaption({ children, href }) {
  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <div className="carousel-container">
      <Carousel showStatus={false} showArrows={true} infiniteLoop={true}>
        {children}
      </Carousel>
      <Carousel.Caption className="text-start text-with-shadow">
        <h3 className="text-with-shadow">Spatoo Jr.</h3>
        <p className="text-with-shadow">
          Take a quick look into our technical demo!
        </p>
        <Button
          className="call-to-action-button text-with-shadow"
          variant="primary"
          onClick={handleClick}
        >
          {" "}
          Play now!
        </Button>
      </Carousel.Caption>
      {/* <div className="call-to-action-button">{callToActionButton}</div>{" "} */}
    </div>
  );
}

export default CarouselWithStaticCaption;
