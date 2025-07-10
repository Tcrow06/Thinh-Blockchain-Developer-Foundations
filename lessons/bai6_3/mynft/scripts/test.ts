import { ethers } from "hardhat";
import { MyNFT } from "../typechain";

async function main() {
  const [deployer] = await ethers.getSigners();

  const myNFT = (await ethers.getContract("MyNFT")) as MyNFT;

  const tx = await myNFT.mint(deployer.address);
  await tx.wait();

  const tokenId = 1;
  const owner = await myNFT.ownerOf(tokenId);
  console.log(`✅ Owner of NFT #${tokenId}: ${owner}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
