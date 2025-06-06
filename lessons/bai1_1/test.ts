import { isValidBlock, Block } from "./solution";
import crypto from "crypto";

function calculateHash(index: number, timestamp: string, transactions: any[], previous_hash: string): string {
  const value = index + timestamp + JSON.stringify(transactions) + previous_hash;
  return crypto.createHash('sha256').update(value).digest('hex');
}

const block1: Block = {
  index: 0,
  timestamp: "2024-01-01T00:00:00Z",
  transactions: [],
  previous_hash: "0",
  current_hash: ""
};
block1.current_hash = calculateHash(block1.index, block1.timestamp, block1.transactions, block1.previous_hash);

console.log("✅ Block 1:", isValidBlock(block1)); // Expected: true

block1.current_hash = "invalid_hash";
console.log("❌ Block 1 (sai):", isValidBlock(block1)); // Expected: false
