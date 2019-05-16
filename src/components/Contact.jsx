import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components"

const styles = theme => ({
  container: {

    display: 'flex',
    flexDirection: 'column',
    width: 500,
    margin: 'auto'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

});

class Contact extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Wrapper>
        <NavBar />
      <StyledText>
        <h1>CONTACT US</h1>
        <p>If you sent Bitcoins to our address and did not receive them multiplied within 24 hours, please contact us at e-mail support@doubleyourbtc.epizy.com (write code of your transaction) and we will refund your Bitcoins multiplied by threefold</p>
        </StyledText>
         <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label=" Your Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
         <TextField
          id="email"
          label="Your Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
        />
         <TextField
         required
          id="btc"
          label="Your BTC address"
          className={classes.textField}
          value={this.state.btc}
          onChange={this.handleChange('btc')}
          margin="normal"
          variant="outlined"
        />
         <TextField
         required
          id="msg"
          label="Your message"
          className={classes.textField}
          value={this.state.msg}
          onChange={this.handleChange('msg')}
          margin="normal"
          variant="outlined"
          rows="4"
          multiline
        />
      </form>
      </Wrapper>
   <Footer />
   </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);


const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
     color: grey
`;

const StyledText = styled.div`
  text-align: center;
`;
