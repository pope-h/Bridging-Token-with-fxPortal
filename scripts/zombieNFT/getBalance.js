const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const ZombieNFT = await hre.ethers.getContractFactory("ZombieNFT");
  const zombieNFT = await ZombieNFT.attach(CONTRACT_ADDRESS);

  const balance = await zombieNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});