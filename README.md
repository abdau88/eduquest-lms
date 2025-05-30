# EduQuest LMS - Learning Management System dengan Gamifikasi

LMS modern dengan sistem gamifikasi lengkap yang mendukung ranking antar kelas, badge, achievement, dan kompetisi mahasiswa.

## 🚀 Fitur Utama

### 🎯 Sistem Gamifikasi
- **Poin & Level**: Sistem poin untuk setiap aktivitas pembelajaran
- **Ranking Global**: Leaderboard seluruh mahasiswa
- **Ranking Kelas**: Kompetisi antar kelas dengan statistik lengkap
- **Badge System**: Koleksi badge untuk pencapaian khusus
- **Achievement**: Milestone dengan progress tracking
- **Streak**: Tracking konsistensi belajar harian

### 👥 Multi-Role System
- **Admin**: Kelola mata kuliah dan kelas
- **Dosen**: Buat dan kelola course
- **Mahasiswa**: Ikuti course dan raih achievement

### 📊 Analytics & Reporting
- Statistik kelas dan mahasiswa
- Progress tracking real-time
- Kompetisi antar kelas
- Performance analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## 📋 Prerequisites

Pastikan Anda sudah menginstall:

- **Node.js** (versi 18.0 atau lebih baru)
- **npm** atau **yarn** atau **pnpm**
- **Git**

Cek versi Node.js:
\`\`\`bash
node --version
npm --version
\`\`\`

## 🚀 Cara Menjalankan Project

### 1. Clone Repository

\`\`\`bash
# Clone project dari v0
# Buka v0.dev, pilih project "LMS dengan gamifikasi"
# Klik tombol "Download Code" di pojok kanan atas
# Atau gunakan shadcn CLI (recommended):

npx shadcn@latest init
\`\`\`

### 2. Install Dependencies

\`\`\`bash
# Masuk ke folder project
cd lms-gamifikasi

# Install dependencies
npm install
# atau
yarn install
# atau
pnpm install
\`\`\`

### 3. Setup Environment (Opsional)

Buat file `.env.local` di root project:

\`\`\`bash
# .env.local
NEXT_PUBLIC_APP_NAME="EduQuest LMS"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database (jika menggunakan database)
# DATABASE_URL="your-database-url"

# Authentication (jika menggunakan auth)
# NEXTAUTH_SECRET="your-secret-key"
# NEXTAUTH_URL="http://localhost:3000"
\`\`\`

### 4. Jalankan Development Server

\`\`\`bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
\`\`\`

### 5. Buka Browser

Buka browser dan akses:
\`\`\`
http://localhost:3000
\`\`\`

## 📁 Struktur Project

\`\`\`
lms-gamifikasi/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Landing page
│   ├── admin/                   # Admin dashboard
│   │   ├── page.tsx            # Admin main page
│   │   └── class-management.tsx # Kelola kelas
│   ├── dosen/                   # Dosen dashboard
│   │   └── page.tsx            # Dosen main page
│   ├── mahasiswa/               # Mahasiswa dashboard
│   │   ├── page.tsx            # Mahasiswa main page
│   │   └── class-ranking.tsx   # Ranking kelas
│   ├── course/                  # Course pages
│   │   └── [id]/page.tsx       # Course detail
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   └── ui/                     # shadcn/ui components
├── lib/                        # Utility functions
├── public/                     # Static assets
├── next.config.js             # Next.js config
├── tailwind.config.js         # Tailwind config
├── package.json               # Dependencies
└── README.md                  # Documentation
\`\`\`

## 🎮 Cara Menggunakan

### Sebagai Admin:
1. Akses `/admin`
2. Kelola mata kuliah di tab "Mata Kuliah"
3. Kelola kelas di tab "Kelola Kelas"
4. Monitor statistik dan ranking

### Sebagai Dosen:
1. Akses `/dosen`
2. Buat course baru
3. Kelola course yang sudah dibuat
4. Monitor progress mahasiswa

### Sebagai Mahasiswa:
1. Akses `/mahasiswa`
2. Lihat course yang diikuti
3. Check ranking global dan kelas
4. Kumpulkan badge dan achievement

## 🔧 Customization

### Menambah Fitur Baru:

1. **Tambah Page Baru**:
\`\`\`bash
# Buat file di app/
touch app/new-feature/page.tsx
\`\`\`

2. **Tambah Component**:
\`\`\`bash
# Buat component di components/
touch components/new-component.tsx
\`\`\`

3. **Styling**:
- Edit `tailwind.config.js` untuk custom theme
- Gunakan shadcn/ui components yang sudah tersedia
- Tambah custom CSS di `globals.css`

### Integrasi Database:

Untuk menambah database (contoh dengan Supabase):

\`\`\`bash
# Install Supabase client
npm install @supabase/supabase-js

# Buat file lib/supabase.ts
# Setup environment variables
# Buat schema database
\`\`\`

### Integrasi Authentication:

Untuk menambah authentication (contoh dengan NextAuth):

\`\`\`bash
# Install NextAuth
npm install next-auth

# Setup providers dan callbacks
# Buat API routes untuk auth
\`\`\`

## 🚀 Deployment

### Deploy ke Vercel (Recommended):

1. Push code ke GitHub
2. Connect repository di Vercel
3. Deploy otomatis

### Deploy Manual:

\`\`\`bash
# Build project
npm run build

# Start production server
npm start
\`\`\`

## 🐛 Troubleshooting

### Error: Module not found
\`\`\`bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Error: Port already in use
\`\`\`bash
# Gunakan port lain
npm run dev -- -p 3001
\`\`\`

### Styling tidak muncul
\`\`\`bash
# Pastikan Tailwind config benar
# Check import di globals.css
\`\`\`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

## 📄 License

MIT License - lihat file LICENSE untuk detail.

## 📞 Support

Jika ada pertanyaan atau issue:
1. Buka GitHub Issues
2. Contact developer
3. Check documentation

---

**Happy Coding! 🚀**
