import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

class About extends React.Component {
  render() {
    return (
      <div>
          <NavBar/>
          <StyledWrapper>
            <h1>ABOUT US. DOUBLE YOUR BTC</h1>
            <h3>1. We trade for you</h3>
            <p>You are already tired of permanent loss of money in the Forex market? Maybe it is time to abandon the "attempts to trade" and to entrust this work to professionals, transferring them management of your finances? DOUBLE YOUR BTC Limited services – for people with available cash assets which they want to invest, but do not have skills of individual active asset management and don't want to risk their finances.</p>
            <h3>2. Our guarantees.</h3>
            <p>Any investment in the financial markets is a potential risk. Experience and professionalism which are expressed in high, but what is more important – in stable profitability of investments, shown by DOUBLE YOUR BTC Limited, can minimize the risks.</p>
            <h3>3. Potential earning estimation.</h3>
            <p> Each client of DOUBLE YOUR BTC Limited has an opportunity to estimate their expected future return before trusting us to manage their funds.</p>
            <h3>4. Convenient payment methods</h3>
            <p>Depositing funds and earned profit withdrawal are available by a number of ways, including e-currencies what guarantees the anonymity of payments and provides tax-free of earned income.</p>
            <h3>5. Flexibility of investment plans.</h3>
            <p>Investment products of DOUBLE YOUR BTC Limited – are a kit from which each client can independently form their own investment strategy.</p>
          </StyledWrapper>
          <Footer />
      </div>
    );
  }
}

export default About;

const StyledWrapper = styled.div`
    color: grey;
    text-align: center;
`;