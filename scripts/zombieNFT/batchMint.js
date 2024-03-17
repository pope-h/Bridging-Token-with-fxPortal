const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const ZombieNFT = await hre.ethers.getContractFactory("ZombieNFT");
  const zombieNFT = ZombieNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await zombieNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await zombieNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} ZombieNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});