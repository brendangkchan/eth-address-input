## Ethereum Address Input

This React TypeScript component validates Ethereum address with ENS support.

### Features
* ENS integration (can input ieither ETH addresses or ENS names)
* Real time user feedback and validation
##### In development
* Token balance checking

### Screenshots
![Imgur](https://i.imgur.com/x93jjTR.png)
![Imgur](https://i.imgur.com/aic4CsM.png)
![Imgur](https://i.imgur.com/s50KU0v.png)
![Imgur](https://i.imgur.com/3tYqanX.png)

### Setup
* Start a [local Ethereum node](https://github.com/ethereum/go-ethereum/wiki/geth)
* Have a registered name in the [ENS](https://docs.ens.domains/en/latest/)

### Usage
```
<Input
    takerToken="ETH"
    callback={(value) => { console.log(value); }}
/>
```

### Demo locally
To demo this component in your browser, go to http://localhost:3000/
```
# then run these commands
git clone git@github.com:brendangkchan/eth-address-input.git
cd eth-address-input/
npm i
npm start # be sure to be on Node v6 or above or this will error out on compiling ES6
```

### Dev Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
