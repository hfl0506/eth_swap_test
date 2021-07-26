const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  // deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed();

  //deploy EthSwap
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed();
  //transfer
  await token.transfer(ethSwap.address, "1000000000000000000000000");
};
