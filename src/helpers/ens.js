import ENS from 'ethereum-ens';
import Web3 from 'web3';

var web3 = null;

if (typeof web3 !== 'undefined' && web3 !== null) {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

window.web3 = web3;

var provider = new Web3.providers.HttpProvider();
var ens = new ENS(provider);

export async function resolveNameToAddr (name) {
	try {
		const resolver = await ens.resolver(name);
		const address = await	resolver.addr();
		return Promise.resolve(address);
	} catch (e) {
		console.error('Error resolving ENS name', e);
		return Promise.resolve(null);
	}
}

export async function reverseAddrToName (addr) {
	try {
		const resolver = await ens.resolver(addr);
		const reverseResolver = await resolver.reverseAddr();
		const name = await reverseResolver.name();
		return Promise.resolve(address);
	} catch (e) {
		console.error('Error reverse resolving ENS addr', e);
		return Promise.resolve(null);
	}
}

export default ens;
