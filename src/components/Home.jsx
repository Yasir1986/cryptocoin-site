import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Options from "../components/Options";
import Footer from "../components/Footer";
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
      <img src={slide0} alt="slide0"  width="1520" height="656"/> 
      <img src={slide1} alt="slide1" width="1520" height="656"/> 
      <img src={slide2} alt="slide2" width="1520" height="656"/> 
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
        <Options />
        <Footer />
         
        
      
      </div>
    );
  }
}

export default Home;


const StyledSlide = styled.div`
 
  max-width: 100%;
  max-height: 100%;
`;