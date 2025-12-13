# 🔐 GitHub Authentication Fix

## Masalah

Error: `Permission denied to sofyanas/sofyanasifudin.git`

Anda login sebagai user GitHub yang berbeda (`smansaban`), tapi mencoba push ke repository `sofyanas`.

## Solusi

### Opsi 1: Login Ulang dengan Akun yang Benar (Termudah)

1. **Clear Git credentials:**
   ```powershell
   git credential-manager delete https://github.com
   ```

2. **Push lagi** (akan minta login):
   ```powershell
   git push -u origin main
   ```
   
3. **Login dengan username: `sofyanas`** saat diminta

### Opsi 2: Gunakan GitHub CLI

1. **Install GitHub CLI** dari: https://cli.github.com

2. **Login:**
   ```powershell
   gh auth login
   ```

3. **Pilih:**
   - GitHub.com
   - HTTPS
   - Login via browser
   
4. **Push:**
   ```powershell
   git push -u origin main
   ```

### Opsi 3: Gunakan Personal Access Token

1. **Generate token di GitHub:**
   - Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Generate new token
   - Pilih scope: `repo` (full control)
   - Copy token

2. **Push dengan token:**
   ```powershell
   git remote set-url origin https://YOUR_TOKEN@github.com/sofyanas/sofyanasifudin.git
   git push -u origin main
   ```

### Opsi 4: Setup SSH Key (Advanced)

1. **Generate SSH key:**
   ```powershell
   ssh-keygen -t ed25519 -C "sofyan.asifudin@example.com"
   ```

2. **Add to SSH agent:**
   ```powershell
   ssh-add ~/.ssh/id_ed25519
   ```

3. **Copy public key:**
   ```powershell
   cat ~/.ssh/id_ed25519.pub
   ```

4. **Add to GitHub:**
   - GitHub > Settings > SSH and GPG keys
   - New SSH key
   - Paste key

5. **Change remote to SSH:**
   ```powershell
   git remote set-url origin git@github.com:sofyanas/sofyanasifudin.git
   git push -u origin main
   ```

## Quick Fix Script

Jalankan ini untuk login ulang:

```powershell
# Clear old credentials
git credential-manager delete https://github.com

# Try push again (akan minta login)
git push -u origin main
```

Saat muncul login window, **gunakan akun GitHub yang benar** (`sofyanas`).

## Verifikasi

Setelah berhasil push, check di:
https://github.com/sofyanas/sofyanasifudin

## Next: Deploy ke Vercel

Setelah berhasil push:

1. Visit: https://vercel.com
2. Login dengan GitHub
3. Import repository: `sofyanasifudin`
4. Click "Deploy"
5. Tunggu ~1 menit
6. Portfolio live! 🎉

---

Need help? Check: https://docs.github.com/en/authentication
