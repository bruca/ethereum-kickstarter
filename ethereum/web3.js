import Web3 from 'web3';


let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'underfined') {
    //using metamask injected web3 instance
    web3 = new Web3(window.web3.currentProvider); 
} else {
    //user not using metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/1wbX264ubEuBOV5pOXlO'
    );
    web3 = new Web3(provider);
}

export default web3;