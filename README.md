# 🛂 Google OAuth App with Docker, ReactJS, Node.js and MongoDB

Ứng dụng đăng nhập bằng Google, được đóng gói hoàn toàn bằng Docker.  
Gồm các thành phần:
- ✨ Frontend: ReactJS (Vite, PrimeReact)
- 🔐 Backend: Node.js + Express + Prisma
- ☁️ Database: MongoDB Atlas
- 🐳 Đóng gói: Docker + Docker Compose

---

## 🚀 Cách chạy ứng dụng

### 1️⃣ Yêu cầu hệ thống

- Docker + Docker Compose
- Git

---

### 2️⃣ Clone project từ GitHub

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 3️⃣ Tạo file .env trong thư mục backend/
Trong thư mục backend, tạo file tên là .env và thêm nội dung sau:
```bash
DATABASE_URL=mongodb+srv://<your_username>:<your_password>@google-oauth-db.ckgb30q.mongodb.net/<your_db_name>?retryWrites=true&w=majority&appName=Google-OAuth-DB
SECRET=suongrongdomladomhoanuocdongdaytrencaonguyendalangayhoangdetrovenha
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
PORT=5000
```
### 4️⃣ Chạy bằng Docker Compose
Chạy dự án bằng câu lệnh sau ở thư mục chính:
```bash
docker compose up --build
```
