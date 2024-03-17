const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const ZombieNFT = await hre.ethers.getContractFactory("ZombieNFT");
  const zombieNFT = ZombieNFT.attach(CONTRACT_ADDRESS);

  console.log(await zombieNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});