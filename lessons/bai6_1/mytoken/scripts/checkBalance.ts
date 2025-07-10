import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const myToken = await ethers.getContractAt("MyToken", "0xAa02b0A1cFFC49b5BD2E2498B089c110a2426230");

  const balance = await myToken.balanceOf(deployer.address);

  console.log(`Deployer address: ${deployer.address}`);
  console.log(`Balance: ${ethers.formatUnits(balance, 18)} MTK`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
