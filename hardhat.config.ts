import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
require("dotenv").config();

module.exports = {
    zksolc: {
        version: "1.2.2",
        compilerSource: "binary",
        settings: {},
    },
    defaultNetwork: "zkSyncTestnet",

    networks: {
        zkSyncTestnet: {
            url: "https://zksync2-testnet.zksync.dev",
            ethNetwork: "https://goerli.infura.io/v3/96abbf5eadc94d62b0c25f0207756e3a",
            // ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.16",
    },
};