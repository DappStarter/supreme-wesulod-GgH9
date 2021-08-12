require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note talk purpose install gloom suit genius'; 
let testAccounts = [
"0xf2d0f0b55611c1d711a4cc131b749497d8b00d84e01a83ded0d51da629b9d436",
"0xf86e2634ed4c93aed88a34438b3f7fe44daed1ba704aa0bf9ace76c649b546df",
"0xf609e885dbcbdd25bfb7bda65b2f3f37e7ff7e978b6ffd968d281e4c9a23667b",
"0x4ba45f7113c87f4ec62a30e79c959fa5bd761d8e3ebfb2442af7b5f0a63fbb57",
"0x06ef8ad289585394d7abf6a8a13a17cbd35b19a73113fce48d44d1d7bd0af357",
"0xd201ad793044cf34387f0be48babc29ef7a6ea2642d00b45e1c385b5549d422c",
"0x305eb1be5a4d3a8d86da223c057b25bc78e785a6b4af9a1e11b7e436e8cf1dca",
"0x61a1ecb7b72ed53697dfbd91e37f46338dbc6b87c00efded79740035214e3e63",
"0xed18b9da1f2c789587d2650de668504dbfddeaa0a1b4f8257fe8d5d6d722a82a",
"0x56d4c4e79c9369c1aaa1390016852b611969d4e170f7e2e94d657d3425c1f076"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


