import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    console.log(">>> Đã chạy vào hàm deploy");
    console.log("====================");
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("MyToken", {
    from: deployer,
    contract: "MyToken",
    args: [],
    log: true,
  });
};

func.tags = ["deploy", "MyToken"];
export default func;
