# 🚀 Deployment Guide

## Panduan Deploy ke Vercel

### Persiapan

1. **Pastikan foto sudah ada**: Simpan `photo.png` di folder ini
2. **Repository sudah di push ke GitHub**: https://github.com/sofyanas/sofyanasifudin

### Langkah Deploy ke Vercel

#### Opsi 1: Deploy Otomatis (Recommended)

1. **Klik tombol ini:**

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sofyanas/sofyanasifudin)

2. Login dengan GitHub jika belum
3. Klik "Deploy"
4. Tunggu ~1 menit
5. **Done!** Portfolio Anda live! 🎉

#### Opsi 2: Manual dari Dashboard

1. **Buka**: https://vercel.com
2. **Login** dengan akun GitHub
3. **Klik** "Add New Project" atau "New Project"
4. **Import** repository `sofyanas/sofyanasifudin`
5. **Settings** (biarkan default):
   - Framework Preset: Other
   - Build Command: (kosongkan)
   - Output Directory: ./
6. **Klik** "Deploy"
7. **Tunggu** ~30-60 detik
8. **Done!** Anda akan dapat URL seperti: `https://sofyanasifudin.vercel.app`

### Custom Domain (Opsional)

Setelah deploy, Anda bisa menambahkan custom domain:

1. Di Vercel dashboard, masuk ke project Anda
2. Klik "Settings" > "Domains"
3. Tambahkan domain Anda (misalnya: `sofyanasifudin.com`)
4. Follow instruksi untuk update DNS

### Automatic Deployments

Setelah setup, setiap kali Anda push ke GitHub:
- Vercel akan otomatis deploy ulang
- Perubahan live dalam ~1 menit
- Preview untuk setiap pull request

### Environment Variables (Jika Diperlukan)

Jika nanti Anda menambahkan API atau services:

1. Masuk ke project di Vercel
2. Settings > Environment Variables
3. Tambahkan key-value pairs
4. Redeploy untuk apply

### Troubleshooting

**Problem**: Deploy gagal
- **Solution**: Pastikan semua file tercommit dan terpush

**Problem**: Foto tidak muncul
- **Solution**: Pastikan `photo.png` ada di root folder dan sudah terpush

**Problem**: Link rusak
- **Solution**: Check semua link di `index.html` menggunakan relative paths

### URLs Anda

- **Repository**: https://github.com/sofyanas/sofyanasifudin
- **Vercel**: https://sofyanasifudin.vercel.app (setelah deploy)
- **GitHub Pages** (alternatif): https://sofyanas.github.io/sofyanasifudin

### Analytics (Opsional)

Untuk tracking visitors:

1. Di Vercel dashboard > Analytics
2. Enable analytics
3. Lihat stats pengunjung real-time

### Performance

Portfolio ini dioptimasi untuk:
- ⚡ Fast load time (<2s)
- 📱 Mobile responsive
- 🎨 Smooth animations
- ♿ Accessibility

### Next Steps After Deploy

1. ✅ Test di berbagai devices
2. ✅ Share link di LinkedIn/social media
3. ✅ Update project links dengan actual URLs
4. ✅ Tambahkan Google Analytics (opsional)
5. ✅ Request feedback dari teman/kolega

---

**Need help?** Contact: sofyan.asifudin@example.com

**Last updated**: December 2025
