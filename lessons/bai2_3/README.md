# Bài 2.2 – Viết hàm Solidity đơn giản

## 🎯 Mục tiêu
- Làm quen với cú pháp Solidity cơ bản.
- Viết một smart contract đơn giản có biến và hàm.
- Deploy và test trên Remix IDE.

## 📄 Đề bài
Viết một smart contract tên là `Welcome`:
- Biến `greeting` dạng `string`, khai báo `public`.
- Constructor truyền vào giá trị khởi tạo cho `greeting`.
- Hàm `getGreeting()` trả về `greeting`.

Sau đó:
1. Deploy contract trên Remix IDE.
2. Gọi hàm `getGreeting()` và chụp màn hình kết quả.
3. (Tuỳ chọn) Sửa hàm để trả thêm địa chỉ người deploy (msg.sender).

## 📚 Gợi ý
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Welcome {
    string public greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
```

## 💡 Gợi ý triển khai
- Dán vào Remix tại: https://remix.ethereum.org
- Chọn compiler 0.8.x
- Deploy contract bằng injected hoặc environment VM
