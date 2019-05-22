import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import qr from "../assets/img/qr.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <StyleBTC>
          <p>
            You are free to use this Bitcoin address as many times as you like
            to get double your BTC
          </p>
          <p>*Any deposit under 0.01 BTC will be considered as a donation</p>
          <h2>SEND BITCOINS TO</h2>
          <h2>1LgvzU8iVizkxVANAZRqP9AHKjEt4kw5r4</h2>
          <p>(minimun 0.01 BTC,maximum 5 BTC)</p>
          <p>STATUS: Waiting for deposit...</p>
          <img src={qr} alt="btc-qr" />
          <StyleLoader />
          <p>( 0/1 confirmation...)</p>
        </StyleBTC>
        <Footer />
      </div>
    );
  }
}

export default About;

const StyleBTC = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyleLoader = styled.div`
  margin: auto;
  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 40px;
  height: 40px;
`;
