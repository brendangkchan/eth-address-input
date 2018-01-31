import * as React from 'react';
import TextField from 'material-ui/TextField';

interface InputProps {}
interface InputState {}

export default class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: any): void {
    console.log('value', e);
  }

  render() {
    return (
      <TextField
        hintText="ex. 0xe7410170f87..."
        onChange={this.onChange}
      />
    );
  }
}
