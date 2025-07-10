import { ethers } from "hardhat";
import { expect } from "chai";
import { MyNFT } from "../typechain";

describe("MyNFT", function () {
  it("should mint NFT and assign to deployer", async function () {
    const [deployer] = await ethers.getSigners();
    const MyNFTFactory = await ethers.getContractFactory("MyNFT");
    const myNFT = (await MyNFTFactory.deploy(deployer.address)) as MyNFT;
    await myNFT.waitForDeployment();

    const tx = await myNFT.mint(deployer.address);
    await tx.wait();

    const owner = await myNFT.ownerOf(0);
    expect(owner).to.equal(deployer.address);
  });

  it("should not allow non-owner to mint", async function () {
    const [deployer, attacker] = await ethers.getSigners();
    const MyNFTFactory = await ethers.getContractFactory("MyNFT");
    const myNFT = (await MyNFTFactory.deploy(deployer.address)) as MyNFT;
    await myNFT.waitForDeployment();

    await expect(
        myNFT.connect(attacker).mint(attacker.address)
    ).to.be.revertedWithCustomError(myNFT, "OwnableUnauthorizedAccount");

  });
});
