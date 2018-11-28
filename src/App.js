import React, { Component } from 'react';
import QuoteBox from './Components/QuoteBox'
import {Paper, Grid} from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container alignItems='center' justify='center' style={{height:'100vh'}}>
          <Grid item>
            <Paper style={{height: '50vh', width: '50vw'}}>
              <QuoteBox />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
