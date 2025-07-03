# Bài Tập 6.1 – Viết ERC20 Token cơ bản

🎯 Mục tiêu:
- Viết và deploy ERC20 Token đơn giản sử dụng OpenZeppelin.

---

## ✅ Yêu cầu

1. Viết contract tên `MyToken`:
   - Tên token: `MyToken`
   - Symbol: `MTK`
   - Tổng cung: 1,000,000 token
   - Mint toàn bộ cho deployer trong constructor

2. Viết script deploy:
   - Deploy contract
   - In địa chỉ contract

---

## 💡 Gợi ý

- Import OpenZeppelin ERC20:
```solidity
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
```
- Dùng `_mint(msg.sender, amount)` để tạo tổng cung ban đầu

---

## 🧪 Chạy script deploy

```bash
npx hardhat deploy --network sepolia --tags deploy
```

Sau khi deploy, chạy file test.ts để kiểm tra balance của địa chỉ deployer.
