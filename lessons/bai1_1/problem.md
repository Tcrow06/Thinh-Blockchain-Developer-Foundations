# Bài 1.1 – Kiểm tra tính hợp lệ của Block (Blockchain cơ bản)

## Mô tả
Bạn được cung cấp một object dạng block:

```ts
{
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
}
```

Viết hàm `isValidBlock(block)` để kiểm tra:
- current_hash phải đúng bằng hash SHA256 của index + timestamp + transactions + previous_hash

## Ví dụ chạy
```ts
console.log(isValidBlock(block)); // true hoặc false
```
