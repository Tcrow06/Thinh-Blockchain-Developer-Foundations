# Bài Tập 7.1 – Mint Token ERC20

🎯 Mục tiêu:
- Viết, deploy và mint token ERC20 bằng Hardhat.

---

## ✅ Yêu cầu

1. Viết contract `MyMintableToken`:
   - Kế thừa ERC20
   - Hàm `mint(address to, uint amount)` chỉ owner gọi được

2. Viết script deploy:
   - Deploy contract
   - Mint 1000 token cho deployer
   - In balance của deployer

---

## 💡 Gợi ý

- Kế thừa `Ownable` để dùng `onlyOwner`
- Hàm `_mint()` thực hiện mint token
- Hàm `balanceOf()` trả về số dư

---

## 🧪 Chạy lệnh

```bash
npx hardhat deploy --network sepolia --tags deploy
```
