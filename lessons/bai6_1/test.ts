import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");

  const abi = [
    ""
  ];
  const contractAddress = "0x41d0Ad4E6227062B59CA673B418Fc00E3A2d10Cf"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, provider);

  /**
   * Get the current balance of deployer
   */
}

main().catch(console.error);
