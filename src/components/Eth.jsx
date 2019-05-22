import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import qreth from "../assets/img/qreth.png";

class Eth extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <StyleETH>
          <p>
            You are free to use this Ethereum address as many times as you like
            to get double your ETH
          </p>
          <p>*Any deposit under 0.01 ETH will be considered as a donation</p>
          <h2>SEND ETHEREUM TO</h2>
          <h2>0xc5d3062340C4a5f43cCBf1Ff7F4d1883e5035cbb</h2>
          <p>(minimun 0.01 ETH,maximum 5 ETH)</p>
          <p>STATUS: Waiting for deposit...</p>
          <img src={qreth} alt="btc-qr" width="165px" height="165px" />
          <StyleLoader />
          <p>( 0/1 confirmation...)</p>
        </StyleETH>
        <Footer />
      </Wrapper>
    );
  }
}

export default Eth;

const Wrapper = styled.div`
    background-color: #dcdcdc;
`;

const StyleETH = styled.div`
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
