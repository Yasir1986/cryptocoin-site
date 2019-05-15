import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import slide0 from "../assets/img/slide0.jpg";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
  return (
    <StyledSlide>
    <Slide {...properties}>
      <div className="each-slide">
         <img src={slide0} alt="slide0" width="1280" height="800"/> 
        </div>
      <div className="each-slide">
      <img src={slide1} alt="slide1" width="1280" height="800"/> 
      </div>
      <div className="each-slide">
      <img src={slide2} alt="slide2" width="1280" height="800"/> 
      </div>
    </Slide>
    </StyledSlide>
  )
}

class Home extends React.Component {
  render() {
    return (
        <div>
        <NavBar />
        <Slideshow/>
      </div>
    );
  }
}

export default Home;

const StyledSlide = styled.div`
    margin: auto;
    padding: 10;
`;