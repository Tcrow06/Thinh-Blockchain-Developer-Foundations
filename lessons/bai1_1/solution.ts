import crypto from "crypto";

function calculateHash(index: number,timestamp: string, transactions: any[], previous_hash: string ): string{
  const data = index + timestamp + JSON.stringify(transactions) + previous_hash;
  return crypto.createHash('sha256').update(data).digest('hex')
}

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

const block: Block = {
  index: 1,
  timestamp: '2025-06-04T12:00:00:00Z',
  transactions: [{from: 'Alice', to:'Bob', amount: 10}],
  previous_hash: 'abc',
  current_hash: ''
};


export function isValidBlock(block: Block): boolean {
  return block.current_hash == calculateHash(block.index, block.timestamp, block.transactions, block.previous_hash);
}

block.current_hash = calculateHash(block.index, block.timestamp, block.transactions, block.previous_hash);

console.log('Block true: ' + isValidBlock(block));

block.current_hash = '0';
console.log('Block false: ' + isValidBlock(block));

