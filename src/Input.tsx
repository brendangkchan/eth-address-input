import * as React from 'react';
import TextField from 'material-ui/TextField';
import { get } from 'lodash';
import { resolveNameToAddr, reverseAddrToName } from './helpers/ens';
import getInputText from './helpers/input-text';

var web3 = web3 || window['web3']; // tslint:disable-line no-string-literal

interface InputProps {}
interface InputState {
  value: string | null;
  errorText: string | null;
  labelText: string | null;
}

const style = {
  container: {
    'width': 'auto',
    'margin': '10px',
    'border': '1px solid rgba(0, 0, 0, 0.24)',
    'padding': '10px 20px',
  },
};

export default class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: '',
      errorText: '',
      labelText: '',
    };
  }

  async updateState(value: string): Promise<any> {
    const ensNameMatch = await reverseAddrToName(value);
    const ensAddrMatch = await resolveNameToAddr(value);
    const {
      errorText,
      labelText
    } = getInputText({
      value,
      ensNameMatch,
      ensAddrMatch
    });

    this.setState({ value, errorText, labelText });
  }

  onChange(e: any): void {
    const value = get(e, 'target.value', '');
    this.updateState(value);
  }

  render() {
    return (
      <div style={style.container}>
        <TextField
          hintText="ex. domain.eth or 0xe7410170f87..."
          errorText={this.state.errorText}
          floatingLabelText={this.state.labelText}
          floatingLabelFixed={false}
          fullWidth={true}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
