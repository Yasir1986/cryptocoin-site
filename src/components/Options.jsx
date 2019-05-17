import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const styles = theme => ({
  textField: {
    width: 300,
  },
button: {
  marginTop: '10%',
  width: 130,
}
});

class Options extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Style1>
          <h1>Plan 1</h1>
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
               <br/>
              <a style={{ textDecoration: 'none' }} href="https://blockstream.info/address/1Hi2nmnk6VuKsM6nenjRnE44rJhYgFZcCK">
               <Button
               variant="contained" 
               color="primary" 
               className={classes.button}
               >INVEST NOW</Button>
               </a>
        </Style1>
        <Style2>
          <h1>Plan 2</h1>
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
               <br/>
             <a style={{ textDecoration: 'none' }} href="https://blockstream.info/address/1LgvzU8iVizkxVANAZRqP9AHKjEt4kw5r4"> 
             <Button
               variant="contained" 
               color="primary" 
               className={classes.button}
               >INVEST NOW</Button>
               </a>
        </Style2>
       
      </Wrapper>
    );
  }
}

Options.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);


const Wrapper = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: colums;
    justify-content: space-evenly;
`;


const Style1 = styled.div`
      text-align: center;
      height: 380px;
      width: 350px;
      background-color: #87CEFA;
`;


const Style2 = styled.div`
      text-align: center;
      height: 380px;
      width: 350px;
      background-color: #87CEFA;
`;