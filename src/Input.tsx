import * as React from 'react';
import TextField from 'material-ui/TextField';
import { get } from 'lodash';
import { resolveNameToAddr, reverseAddrToName } from './helpers/ens';
import getInputText from './helpers/input-text';
import getTokenBalance from './helpers/tokens';

var web3 = web3 || window['web3']; // tslint:disable-line no-string-literal

interface InputProps {
  takerToken: string;
}
interface InputState {
  value: string | null;
  errorText: string | null;
  labelText: string | null;
  balance: number | null;
}

const style = {
  container: {
    'width': 'auto',
    'margin': '10px',
    'border': '1px solid rgba(0, 0, 0, 0.24)',
    'padding': '10px 20px',
  },
  balance: {
    'fontFamily': 'Roboto, sans-serif',
    'color': 'rgba(0, 0, 0, 0.5)',
  }
};

export default class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this._updateState = this._updateState.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = {
      value: '',
      errorText: '',
      labelText: '',
      balance: null,
    };
  }

  public render() {
    return (
      <div style={style.container}>
        <TextField
          hintText="ex. domain.eth or 0xe7410170f87..."
          errorText={this.state.errorText}
          floatingLabelText={this.state.labelText}
          floatingLabelFixed={false}
          fullWidth={true}
          onChange={this._onChange}
        />
        {this._renderBalance()}
      </div>
    );
  }

  private async _updateState(value: string): Promise<any> {
    const ensNameMatch = await reverseAddrToName(value);
    const ensAddrMatch = await resolveNameToAddr(value);
    const balance = await getTokenBalance(this.props.takerToken, value);

    const {
      errorText,
      labelText
    } = getInputText({
      value,
      ensNameMatch,
      ensAddrMatch
    });

    this.setState({ value, errorText, labelText, balance });
  }

  private _onChange(e: any): void {
    const value = get(e, 'target.value', '');
    this._updateState(value);
  }

  private _renderBalance(): React.ReactNode {
    if (this.state.balance !== null) {
      return (<p style={style.balance}>Balance: {this.state.balance} {this.props.takerToken}</p>);
    }

    return undefined;
  }
}
