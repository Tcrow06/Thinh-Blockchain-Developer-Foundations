# 🧠 Blockchain Course Template

Chào mừng bạn đến với khoá học Blockchain dành cho sinh viên năm cuối ngành CNTT.

---

## 📚 Cấu trúc bài học

- `lessons/` – chứa từng bài học riêng biệt
- Mỗi bài gồm:
  - `problem.md` – mô tả đề bài
  - `solution.ts` – nơi bạn viết code
  - `test.ts` – file kiểm thử tự động

---

## ▶️ Cách chạy bài học

### Yêu cầu:
- Đã cài `node.js`
- Đã cài `ts-node` (nếu chưa, chạy lệnh sau):

```bash
npm install -g ts-node typescript
```

---

### Chạy nhanh bài học (khuyên dùng):

```bash
npx ts-node run.ts bai1_1
```

Hoặc:

```bash
ts-node run.ts bai1_1
```

---

### Chạy test thủ công (nếu cần):

```bash
cd lessons/bai1_1
ts-node test.ts
```

---

## ✅ Ghi chú

- Chỉ cần sửa `solution.ts`
- Không cần sửa `test.ts`
- Tất cả bài tập code là **tuỳ chọn**, nhưng khuyến khích làm nếu muốn hiểu sâu

---

Chúc bạn học vui! 🚀