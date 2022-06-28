// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function deploy_itemtoken() {
  // We get the contract to deploy
  const ITEMToken = await ethers.getContractFactory("ITEMToken");
  const itemerc20 = await ITEMToken.deploy();  
  await itemerc20.deployed();

  console.log("ITEMToken deployed to:", itemerc20.address);
}

async function main() {
  await deploy_itemtoken();
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
