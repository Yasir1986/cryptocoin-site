import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Options from "../components/Options";
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
};

const Slideshow = () => {
  return (
    <StyledSlide>
      <Slide {...properties}>
        <img src={slide0} alt="slide0" width="1520" height="656" />
        <img src={slide1} alt="slide1" width="1520" height="656" />
        <img src={slide2} alt="slide2" width="1520" height="656" />
      </Slide>
    </StyledSlide>
  );
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Slideshow />

        <StyledText>
        <h2>Double YOUR Bitcoin in 12 Hours!</h2>

        <h5>
          Welcome to our doubleyourbtc.epizy.com Generator! Here you can double
          your Bitcoin in just 12 hours without any fees thanks to our
          experience and skills in trading cryptocurrencies. All you will have
          to do is click on the “Invest Now” and Just transfer the amount of Bitcoin that you
          want to double and your Bitcoin Wallet Address where you will receive
          your profit in just 12 hours!
        </h5>

        <h2>How does it work?</h2>

        <h5>
          We are a trusted EU based company with a three years experience in
          trading cryptocurrencies especially Bitcoin and now you can also
          multiply your Bitcoin fast, secure and legit using our system! Your
          Investment will be 100% secure with us and you will receive your
          profit in your Bitcoin Wallet in just 12 hours!
        </h5>

        <h5>
          Bellow you will find the simple steps that you will have to follow in
          order to double the amount of Bitcoin that you want to invest :
        </h5>

        <h5>
          1. Click on the “Invest Now” button below and you will be redirected
          automated to our generator page.
        </h5>

        <h5>
          2. Here you will be required to introduce your Bitcoin Address where
          you will receive your investement doubled in 12 hours.
        </h5>

        <h5>
          3. On same page you will find the
          Bitcoin Address where you will have to send your investment.
        </h5>

        <h5>
          4. We have a limit of Bitcoin that you can double in a day. The
          minimum amount is 0.001 BTC and the maximum amount is 5 BTC.
        </h5>

        <h5>
          5. After sending your investement, you will have to wait 12 hours to
          receive your doubled amount of Bitcoin in your Wallet!
        </h5>
        </StyledText>
        <Options />
      </div>
    );
  }
}

export default Home;

const StyledSlide = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

const StyledText = styled.div`
  text-align: center;
  color: grey;
`;