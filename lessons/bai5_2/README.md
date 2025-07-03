# Bài Tập 5.2 – Gửi Transaction dùng Ethers.js  và Hardhat

🎯 Mục tiêu:
- Deploy một smart contract đơn giản bằng Hardhat.
- Gọi hàm `increment()` từ contract bằng Ethers.js.
- In kết quả của `getCount()` ra console.

---

## ✅ Yêu cầu

1. Sử dụng ac-hardhat-template: https://github.com/appscyclone/ac-hardhat-template

2. Đọc hiểu
   - Script deploy contract deploy/1-deploy.ts
   - Script tương tác Counter contract scripts/test.ts
   - Unit test script test/Counter.test.ts

---

## 🧪 Kiểm tra

Chạy:
```bash
npx hardhat run test # chạy unit test trước khi deploy 
npx hardhat deploy --network sepolia --tags deploy # deploy lên sepolia network
npx hardhat run scripts/test.ts
```

Kết quả:
- Hiện ra số `1` nếu gọi thành công `increment()` một lần.
