/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-solpp");

const url = 'https://bsc-dataseed.binance.org';
const privateKey = '';

module.exports = {
  solidity: "0.8.0",
  networks: {
    mainnet: {
      url: url,
      accounts: [`0x${privateKey}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ""
  }
};
