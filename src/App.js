import React from 'react';
import './App.css';
import { Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class App extends React.Component {
  // this.previousHash = previousHash;
  //   this.timestamp = timestamp;
  //   this.transactions = transactions;
  //   this.nonce = 0;
  //   this.hash = this.calculateHash();
  RenderTransaction() {
    return (
      <Grid container direction="row" style={{ paddingRight: "1%", paddingLeft: "1%", height: "25%", width: "94%", marginLeft: "3%", marginRight: "3%", border: "1px solid #c4c2c2" }}>
        <Grid item xs={3}>
          <p style={{ fontSize: 14 }}>Sending address</p>
          <p style={{ fontSize: 14 }}>Receiving address</p>
          <MonetizationOnTwoToneIcon></MonetizationOnTwoToneIcon>
        </Grid>
        <Grid item xs={9}>
          <p style={{ fontSize: 13, color: "#52c41a" }}>sssssssssss</p>
          <p style={{ fontSize: 13, color: "#52c41a" }}>ssssssssssss</p>
          <p style={{ fontSize: 13, color: "#52c41a" }}>10</p>
        </Grid>
      </Grid>
    )
  }

  RenderUser() {
    return (
      <Grid container direction="row" alignItems="center" justify="space-between" style={{ border: "1px solid #c4c2c2", borderRadius: 35, padding: "0px 10px 0 15px", margin:"10px 0" }}>
        <Grid item xs={4} >
          <Grid container direction="row" alignItems="center">
            <AccountCircleIcon style={{ fontSize: 30 }} color="primary"></AccountCircleIcon>
            <p style={{ fontSize: 20, fontWeight: "700", textAlign: "center", marginLeft: 10 }}>user1</p>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <ArrowForwardIosIcon style={{ fontSize: 16 }}></ArrowForwardIosIcon>
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <Grid container direction="row" justify="flex-start"
        alignItems="flex-start" style={{ padding: "1.5% 0%" }}>
        <Grid item xs={4}>
          <Grid item container direction="column" style={{ height: "100%", width: "90%", padding: "1.5% 2.5%", margin: "auto" }}>
            <p style={{ fontSize: 30, fontWeight: "700", textAlign: "left", marginLeft: 10 }}>PEERS</p>
            {this.RenderUser()}
            {this.RenderUser()}
            
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid item container direction="column" style={{ height: "100%", width: "90%", padding: "1.5% 2.5%", margin: "auto" }}>
            <p style={{ fontSize: 30, fontWeight: "700", textAlign: "center" }}>BLOCK CHAIN</p>
            <Grid item container direction="column" style={{ height: "25%", width: "100%", padding: "0% 2.5% 2.5% 2.5%", borderWidth: 2, borderRadius: 30, borderStyle: "outset" }}>
              <Grid item xs={12}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <p style={{ fontSize: 20 }}>GENESIS BLOCK</p>
                  <p style={{ fontSize: 13 }}>Create at {new Date().toDateString()}</p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <p style={{ fontSize: 18 }}>Previous Hash</p>
                  <p style={{ fontSize: 18 }}>Hash</p>
                </Grid>
                <Grid item xs={9}>
                  <p style={{ fontSize: 16, color: "#52c41a" }}>dddddddddđ</p>
                  <p style={{ fontSize: 16, color: "#52c41a" }}>ddddddddđ</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-end" justify="left">
                <ExpansionPanel variant="outlined" style={{ height: "25%", width: "100%" }}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>transactions</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography style={{ height: "25%", width: "100%" }}>
                      {this.RenderTransaction()}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
};



export default App;
