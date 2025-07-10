import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { MyToken } from "../typechain";

describe("MyToken", function () {
  let deployer: SignerWithAddress;
  let addr1: SignerWithAddress;
  let myToken: MyToken;

  const TOTAL_SUPPLY = ethers.parseUnits("1000000", 18);

  beforeEach(async () => {
    [deployer, addr1] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("MyToken");
    myToken = await factory.deploy();
    await myToken.waitForDeployment();
  });

  it("Should have correct name and symbol", async () => {
    expect(await myToken.name()).to.equal("MyToken");
    expect(await myToken.symbol()).to.equal("MTK");
  });

  it("Should mint total supply to deployer", async () => {
    expect(await myToken.totalSupply()).to.equal(TOTAL_SUPPLY);
    expect(await myToken.balanceOf(deployer.address)).to.equal(TOTAL_SUPPLY);
  });

  it("Should transfer tokens", async () => {
    const amount = ethers.parseUnits("100", 18);
    await myToken.transfer(addr1.address, amount);
    expect(await myToken.balanceOf(addr1.address)).to.equal(amount);
  });
});
