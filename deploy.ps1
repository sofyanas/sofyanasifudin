Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "   GIT SETUP & PUSH TO GITHUB" -ForegroundColor Cyan
Write-Host "================================================`n" -ForegroundColor Cyan

Write-Host "[1/6] Initializing Git..." -ForegroundColor Yellow
git init
Write-Host "Done`n" -ForegroundColor Green

Write-Host "[2/6] Configuring Git..." -ForegroundColor Yellow
git config user.name "Sofyan Asifudin"
git config user.email "sofyan.asifudin@example.com"
Write-Host "Done`n" -ForegroundColor Green

Write-Host "[3/6] Adding files..." -ForegroundColor Yellow
git add .
Write-Host "Done`n" -ForegroundColor Green

Write-Host "[4/6] Creating commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Professional Next.js Portfolio"
Write-Host "Done`n" -ForegroundColor Green

Write-Host "[5/6] Adding remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/sofyanas/sofyanasifudin.git
Write-Host "Done`n" -ForegroundColor Green

Write-Host "[6/6] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Note: Login GitHub jika diminta" -ForegroundColor Cyan
git branch -M main
git push -u origin main

Write-Host "`n================================================" -ForegroundColor Green
Write-Host "   DEPLOYMENT READY!" -ForegroundColor Green
Write-Host "================================================`n" -ForegroundColor Green

Write-Host "Next: Deploy to Vercel" -ForegroundColor Yellow
Write-Host "1. Visit https://vercel.com" -ForegroundColor White
Write-Host "2. Login with GitHub" -ForegroundColor White
Write-Host "3. Import 'sofyanasifudin' repo" -ForegroundColor White
Write-Host "4. Click Deploy`n" -ForegroundColor White

Read-Host "Press Enter to exit"
