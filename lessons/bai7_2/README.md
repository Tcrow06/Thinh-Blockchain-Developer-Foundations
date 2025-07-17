# Bài Tập 7.2 – Verify MyMintableToken trên Etherscan

🎯 Mục tiêu:
- Deploy contract ERC20 `MyMintableToken` trên Sepolia
- Verify contract trên Etherscan

---

## ✅ Bước 1 – Cài plugin verify

```bash
npm install --save-dev @nomicfoundation/hardhat-verify
```

---

## ✅ Bước 2 – Thêm cấu hình vào `hardhat.config.ts`

```ts
import "@nomicfoundation/hardhat-verify";

module.exports = {
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  }
}
```

⚠️ **Không commit private key**

---

## ✅ Bước 3 – Deploy contract

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

Lưu lại địa chỉ contract.

---

## ✅ Bước 4 – Verify contract

```bash
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

---

## ✅ Bước 5 – Kiểm tra trên Etherscan

- Source code sẽ hiển thị công khai.
- Kiểm tra tab Read/Write Contract.

---

## 🎯 Yêu cầu nộp bài

- Địa chỉ contract
- Link verify trên Etherscan
- Screenshot verify thành công

---

