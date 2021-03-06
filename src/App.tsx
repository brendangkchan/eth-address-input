import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from './Input';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Input takerToken="ETH" callback={(value) => { console.log(value); }}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
