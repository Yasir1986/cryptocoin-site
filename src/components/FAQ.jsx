import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "../components/Footer"
import styled from "styled-components"

class FAQ extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <StyledFaq>
        <h1>FAQ</h1>
        <h3>1. Is your system and website safe?</h3>
        <p>Our system works 100% and website is safe and secure to invest in order to double your btc.</p>
        <h3>2. Can I make more than one investment?</h3>
        <p>Yes. You can make more than one investment. But we will proceed the transactions which came earlier and will double your btc as the transaction done and will sent your double btc on your given BTC address.</p>
        <h3>3. What are the investment limits?</h3>
        <p>There is 0.01 BTC minimium and 5 BTC maximum limit for investments on Double Your BTC Limited</p>
        <h3>4. Which BTC address should I use to make an investment</h3>
        <p>You should ONLY use the BTC address given on the Investment page to make a deposit.</p>
        <h3>5. When can I expect my payout?</h3>
        <p>You will receive your double BTC after 12 hours, starting to count from the moment of your deposit (after 1 confirmation from the network).</p>
        <h3>6. Where will my double BTC arrive?</h3>
        <p>Our system will use your deposit address as the payout address. In case your transaction is consisted of multiple BTC addresses, our system will send your double BTC to the address that is first on the list.</p>
        <h3>7. Why there is 0.01 BTC minimum and 5 BTC maximum?</h3>
        <p>The 0.01 BTC minimum is defined to make sure that our system is able to double your Bitcoins because of the transaction fees, and because of that our system considers any deposit under 0.01 BTC as a donation. The 5 BTC maximum is defined to make sure that our system is able to double your Bitcoins because of the low volume on some exchanges that our system uses to make transactions.</p>
        <h3>8. Can I withdraw BTC from exchanges directly to your platform?</h3>
        <p>Yes, because our system accepts investments from all types of Bitcoin wallets, which means you can even use the exchange wallets.</p>
        </StyledFaq>
        <Footer />
      </div>
    );
  }
}

export default FAQ;

const StyledFaq = styled.div`
    margin-bottom: 5%;
    color: grey;
    text-align: center;
`;