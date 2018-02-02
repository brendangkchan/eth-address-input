import { startsWith } from 'lodash';

const ETH_ADDRESS_PREFIX = '0x';
var web3 = web3 || window['web3']; // tslint:disable-line no-string-literal

interface InputText {
  errorText: string | null;
  labelText: string | null;
}
interface GetInputTextParams {
  value: string;
  ensNameMatch: string | null;
  ensAddrMatch: string | null;
}

export default function getInputText(params: GetInputTextParams): InputText  {
  const {
    value,
    ensNameMatch,
    ensAddrMatch,
  } = params;
  const mayBeEthAddress = startsWith(value, ETH_ADDRESS_PREFIX);
  const isEthAddress = web3.isAddress(value);
  let errorText;
  let labelText;

  if (value === '' ) {
    errorText = null;
    labelText = null;
  } else if (mayBeEthAddress && !isEthAddress) {
    errorText = 'Please enter a valid Ethereum address';
    labelText = null;
  } else if (isEthAddress && ensNameMatch) {
    errorText = null;
    labelText = `Valid Eth address (ENS: ${ensNameMatch})`;
  } else if (isEthAddress && !ensNameMatch) {
    errorText = null;
    labelText = `Valid Eth address`;
  } else if (!ensAddrMatch) {
    errorText = 'Please enter a valid ENS name';
    labelText = null;
  } else if (ensAddrMatch) {
    errorText = null;
    labelText = `ENS addr match: ${ensAddrMatch}`;
  }

  return { errorText, labelText };
}
