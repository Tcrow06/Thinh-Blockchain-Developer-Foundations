# Bài 3.1 – Kiểu dữ liệu và biến Solidity

## 🎯 Mục tiêu
- Thực hành khai báo biến trong Solidity
- Sử dụng kiểu dữ liệu: string, uint
- Biết cách viết hàm cập nhật state variable

## 📄 Đề bài
Viết một smart contract tên `Profile`:
- Biến `name` (kiểu `string`) khai báo `public`
- Biến `age` (kiểu `uint`) khai báo `public`
- Hàm `setProfile(string _name, uint _age)` cập nhật name và age

Sau đó:
1. Deploy contract trên Remix IDE
2. Gọi `setProfile("Alice", 21)`
3. Gọi hàm `name()` và `age()` để kiểm tra kết quả

## 🛠 Triển khai
- Mở https://remix.ethereum.org
- Tạo file `Profile.sol`, dán code vào
- Compile và Deploy
- Test các hàm trong Remix IDE
