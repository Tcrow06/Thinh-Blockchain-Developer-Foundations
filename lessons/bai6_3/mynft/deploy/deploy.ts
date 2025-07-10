import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log(">>> Deploying MyNFT...");

  const result = await deploy("MyNFT", {
    from: deployer,
    args: [deployer],
    log: true,
    autoMine: true,
  });

  const myNFT = await ethers.getContractAt("MyNFT", result.address);
  const mintTx = await myNFT.mint(deployer);
  await mintTx.wait();

  const owner = await myNFT.ownerOf(0);
  console.log(`✅ NFT #0 owner: ${owner}`);
};

func.tags = ["deploy"];
export default func;
