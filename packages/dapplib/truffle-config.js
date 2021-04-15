require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million pull install person flush state'; 
let testAccounts = [
"0x8eab6d6ee5e44c0d53b81437ef090dd7868cb45cbf9cb3e1671d0d3aaf7fed64",
"0x85f4917b66311aa1ee780f08332d1c0b8f43a3d9bf6dafaab7873f566179ce6d",
"0xccba996998d9c10e47843b22b0407cf3c6fb3ba7095ca270d97969348202e5a4",
"0x0bf54193d13381c1c2423bc08ac336a803af3aad223b6b8d8c42d9726ca5a034",
"0x3c00f14c353316fb9087e04d03ab94776c45a37eb7d260c158195163a4bfe46a",
"0xd5a19c0200c925ca9c509b679721ec829727f0652b349da57d326f042b43e46b",
"0x22711d37c9878c29b3f025d615808b35a4f8e63e8bfd0214d823d48b31ed215e",
"0x8392d46b0dfd2dc1cad56b28fc1b93d82356a06684c32a902052c1a41c1be955",
"0x3f07e6bdc48d0cb0992fb30d3728d5d7698280327b549c1d0a73e70d55735c36",
"0x840ca1a6384cb3f64754fa009ac8359414c47d0912064ea6d1330c5b8c5c7b0c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
