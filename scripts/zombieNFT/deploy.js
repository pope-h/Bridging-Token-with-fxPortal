const hre = require("hardhat");

async function main() {
  const zombieNFT = await hre.ethers.deployContract("ZombieNFT");

  console.log("ZombieNFT address:", await zombieNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});