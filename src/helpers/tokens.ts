// TODO: pseudocode
// import { find } from 'lodash';
// import TOKEN_CONTRACTS from '../data/token-contracts';

export default async function fetchTokenBalance (takerToken: string, addr: string) {
  // Verify user's address
  // if (!web3.isAddress(value)) {
  // 	return Promise.resolve(null);
  // }

  // Convert ENS name to eth address if needed

  // Get contract address from hardcoded list or an API like: https://etherscan.io/token-search
  // const takerContractAddr = find(TOKEN_CONTRACTS, { symbol: takerToken.toUpperCase() });
  // if (!takerContractAddr) {
  // 	return Promise.resolve(null);
  // }

  // Use Token Balance API to get balance
  // https://github.com/hunterlong/tokenbalance
  // const balance = await fetch(`https://api.tokenbalance.com/token/${takerContractAddr}/${addr}`);
  // return Promise.resolve(balance);

  return 0;
}
