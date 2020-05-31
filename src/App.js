import React from 'react';
import './App.css';
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Button,
  AppBar,
  Toolbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputBase
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import Data from './js/data.json';

const { Blockchain, Transaction } = require('../src/js/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const privateKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');
const fs = require('browserify-fs');
const publicKey = privateKey.getPublic('hex');
const MyCoin = new Blockchain(Data);
// const MyCoin = Data;
class App extends React.Component {
  state = {
    setOpen: false
  }
  // this.previousHash = previousHash;
  //   this.timestamp = timestamp;
  //   this.transactions = transactions;
  //   this.nonce = 0;
  //   this.hash = this.calculateHash();
  handleClickOpen = () => {
    this.setState({
      setOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false
    });
  };

  mine = () => {
    this.setState({
      setOpen: false
    });
    // MyCoin.minePendingTransactions(publicKey);
    var json = JSON.stringify(MyCoin);
    console.log(json);

    fs.writeFile("./js/data.json", json, 'utf8', function (err) {
      console.log(err);
    });
  }

  RenderBlock(block, index) {
    return (
      <Grid item container direction="column" style={{ height: "25%", width: "100%", padding: "0% 2.5% 2.5% 2.5%", borderWidth: 2, borderRadius: 30, borderStyle: "outset", marginBottom: "5%", marginTop: "1%" }}>
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <p style={{ fontSize: 20 }}>{index === 0 ? "GENESIS BLOCK" : "BLOCK #" + index}</p>
            <p style={{ fontSize: 13 }}>Create at {new Date(block.timestamp).toDateString()}</p>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <p style={{ fontSize: 18 }}>Previous Hash</p>
            <p style={{ fontSize: 18 }}>Hash</p>
          </Grid>
          <Grid item xs={9}>
            <p style={{ fontSize: 16, color: "#43a047" }}>{block.previousHash}</p>
            <p style={{ fontSize: 16, color: "#43a047" }}>{block.hash}</p>
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
                {this.RenderTransaction(block.transactions[0])}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    );
  };

  RenderTransaction(transaction) {
    return (
      <Grid container direction="column" style={{ paddingRight: "1%", paddingLeft: "1%", height: "25%", width: "94%", marginLeft: "3%", marginRight: "3%", marginBottom: 10, border: "1px solid #c4c2c2" }}>
        <Grid item container direction="row" >
          <Grid item xs={3} >
            <p style={{ fontSize: 14 }}>Sending address</p>
          </Grid>
          <Grid item xs={9} >
            <InputBase eld id="input" defaultValue={transaction.fromAddress}
              disabled={true}
              InputProps={{
                'aria-label': 'naked',
              }}
              style={{ fontSize: 13, color: "#43a047", width: "100%", marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={3}>
            <p style={{ fontSize: 14 }}>Receiving address</p>
          </Grid>
          <Grid item xs={9} >
            <InputBase id="input" defaultValue={transaction.toAddress}
              disabled={true}
              InputProps={{
                'aria-label': 'naked',
              }}
              style={{ fontSize: 13, color: "#43a047", width: "100%", marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={3} style={{ marginTop: 9 }}>
            <MonetizationOnTwoToneIcon ></MonetizationOnTwoToneIcon>
          </Grid>
          <Grid item xs={9}  >
            <p style={{ fontSize: 13, color: "#43a047" }}>{transaction.amount}</p>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={3}>
            <p style={{ fontSize: 14 }}>Time</p>
          </Grid>
          <Grid item xs={9} >
            <p style={{ fontSize: 13, color: "#43a047" }}>{new Date(transaction.timestamp).toDateString()}</p>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  RenderPendingTransaction() {
    return (
      <Grid container direction="row" style={{ paddingRight: "1%", paddingLeft: "1%", height: "25%", width: "50%", marginLeft: "3%", marginRight: "3%", border: "1px solid #c4c2c2" }}>
        <Grid item xs={3}>
          <p style={{ fontSize: 14 }}>Sending address</p>
          <p style={{ fontSize: 14 }}>Receiving address</p>
          <MonetizationOnTwoToneIcon></MonetizationOnTwoToneIcon>
        </Grid>
        <Grid item xs={9}>
          <p style={{ fontSize: 13, color: "#43a047" }}>sssssssssss</p>
          <p style={{ fontSize: 13, color: "#43a047" }}>ssssssssssss</p>
          <p style={{ fontSize: 13, color: "#43a047" }}>10</p>
        </Grid>
      </Grid>
    )
  }

  RenderUser() {
    return (
      <Grid container direction="row" alignItems="center" justify="space-between" style={{ borderRadius: 35, padding: "0px 10px 0 15px", margin: "10px 0" }}>
        <ExpansionPanel style={{ width: "100%", border: "1px solid #c4c2c2" }} alignItems="center" justify="center">
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <Grid container direction="row" alignItems="center" style={{ height: "100%" }}>
                <AccountCircleIcon style={{ fontSize: 30, color: "#43a047" }} ></AccountCircleIcon>
                <p style={{ fontSize: 18, marginLeft: 10 }}>user</p>
              </Grid>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{ height: "25%", width: "100%" }}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <p style={{ fontSize: 14 }}>Public key</p>
                  <p style={{ fontSize: 14 }}>Private key</p>
                </Grid>
                <Grid item xs={9}>
                  <p style={{ fontSize: 13, color: "#43a047" }}>dddddddddđ</p>
                  <p style={{ fontSize: 13, color: "#43a047" }}>ddddddddđ</p>
                </Grid>
              </Grid>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    )
  }

  render() {
    return (
      <>
        <AppBar position="static" style={{ flexGrow: 1, backgroundColor: "#43a047" }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              BLOCK CHAIN
            </Typography>
            <Button variant="contained"
              style={{ width: "5%", height: '12%', borderRadius: 20, marginRight: 10, background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "white" }}
              onClick={this.handleClickOpen}>
              Mine
               <ArrowForwardIosIcon style={{ fontSize: 15 }}></ArrowForwardIosIcon>
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container direction="row" justify="center"
          alignItems="flex-start" style={{ padding: "1% 2%" }}>
          <Grid item xs={4}>
            <Grid item container direction="column" alignItems="center" style={{ height: "100%", width: "90%", padding: "1.5% 2.5%", margin: "auto" }}>
              <p style={{ fontSize: 30, fontWeight: "700", textAlign: "left", marginLeft: 10 }}>PEERS</p>
              {this.RenderUser()}
              {this.RenderUser()}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                style={{ width: "40%", height: 60, borderRadius: 10, marginTop: 10, background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "white" }}
              >
                Add user
      </Button>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid item container direction="column" style={{ height: "100%", width: "90%", padding: "1.5% 2.5%", margin: "auto" }}>
              <p style={{ fontSize: 30, fontWeight: "700", textAlign: "center" }}>BLOCK CHAIN</p>
              {this.RenderBlock(MyCoin.chain[0], 0)}
              {this.RenderBlock(MyCoin.chain[1], 1)}
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={this.state.setOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"

        >
          <DialogTitle id="alert-dialog-title">Pending Transaction</DialogTitle>
          <DialogContent style={{}}>
            <DialogContentText id="alert-dialog-description">
              {this.RenderTransaction(MyCoin.pendingTransactions[0])}
              {this.RenderTransaction(MyCoin.pendingTransactions[1])}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.mine}
              color="primary">
              Mine
          </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Cancel
          </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
};



export default App;
