import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  textField: {
    width: 300
  },
  button: {
    marginTop: "10%",
    width: 130
  }
});

class Options extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Btcdiv>
          <BTC1>
            <h1>BTC Package 1</h1>
            <h4>min: 0.01 BTC</h4>
            <h4>max: 0.9 BTC</h4>
            <TextField
              required
              id="btc"
              label="Your BTC address"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <br />
            <Link to="/btc" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                INVEST NOW
              </Button>
            </Link>
          </BTC1>
          <BTC2>
            <h1>BTC Package 2</h1>
            <h4>min: 1 BTC</h4>
            <h4>max: 5 BTC</h4>
            <TextField
              required
              id="btc"
              label="Your BTC address"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <br />
            <Link to="/btc" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                INVEST NOW
              </Button>
            </Link>
          </BTC2>
        </Btcdiv>
        <Ethdiv>
          <ETH1>
            <h1>ETH Package 1</h1>
            <h4>min: 0.1 ETH</h4>
            <h4>max: 1 ETH</h4>
            <TextField
              required
              id="btc"
              label="Your ETH address"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <br />
            <Link to="/eth" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                INVEST NOW
              </Button>
            </Link>
          </ETH1>
          <ETH2>
            <h1>ETH Package 2</h1>
            <h4>min: 1 ETH</h4>
            <h4>max: 5 ETH</h4>
            <TextField
              required
              id="btc"
              label="Your ETH address"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <br />
            <Link to="/eth" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                INVEST NOW
              </Button>
            </Link>
          </ETH2>
        </Ethdiv>
      </Wrapper>
    );
  }
}

Options.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Options);

const Wrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  @media (max-width: 400px) {
  }
`;

const BTC1 = styled.div`
  text-align: center;
  height: 380px;
  width: 350px;
  background-color: #87cefa;
  @media (max-width: 400px) {
  }
`;

const BTC2 = styled.div`
  text-align: center;
  height: 380px;
  width: 350px;
  background-color: #87cefa;
  @media (max-width: 400px) {
  }
`;

const ETH1 = styled.div`
  text-align: center;
  height: 380px;
  width: 350px;
  background-color: #87cefa;
  @media (max-width: 400px) {
  }
`;

const ETH2 = styled.div`
  text-align: center;
  height: 380px;
  width: 350px;
  background-color: #87cefa;
  @media (max-width: 400px) {
  }
`;

const Btcdiv = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  @media (max-width: 400px) {
  }
  display: flex;
  justify-content: space-evenly;
`;

const Ethdiv = styled.div`
  @media (max-width: 400px) {
  }
  display: flex;
  justify-content: space-evenly;
`;
