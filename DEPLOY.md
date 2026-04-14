# 🚀 部署指南：GitHub Pages + Docusaurus

## 前置準備

確認你的 Mac 已安裝：
- **Node.js 18+**（下載：https://nodejs.org）
- **Git**（下載：https://git-scm.com）
- **GitHub 帳號**（註冊：https://github.com）

檢查方式（打開 Terminal）：
```bash
node --version   # 應顯示 v18 以上
git --version
```

---

## 第一步：更新設定檔

打開 `docusaurus.config.js`，把第 12–16 行換成你的 GitHub 資料：

```js
url: 'https://你的GitHub帳號.github.io',
baseUrl: '/claude-for-excel/',
organizationName: '你的GitHub帳號',
projectName: 'claude-for-excel',
```

同時把 GitHub 連結也更新（第 72–73 行）：
```js
href: 'https://github.com/你的GitHub帳號/claude-for-excel',
```

---

## 第二步：本機安裝與測試

打開 Terminal，進入專案資料夾：

```bash
cd ~/Documents/Jubo\ EDU\ Claude\ for\ Excel\ /JuboEDU\ Claude\ for\ Excel/jubo-excel-course

# 安裝相依套件（第一次需要幾分鐘）
npm install

# 本機預覽（會自動開啟瀏覽器）
npm run start
```

預覽沒問題後，測試正式編譯：

```bash
npm run build
```

看到 `[SUCCESS] Generated static files in "build"` 就代表成功！

---

## 第三步：建立 GitHub Repository

1. 到 [github.com/new](https://github.com/new)
2. Repository name 填：`claude-for-excel`
3. 設定為 **Public**（GitHub Pages 免費版需要公開）
4. **不要**勾選 Initialize README
5. 點 **Create repository**

---

## 第四步：推送程式碼到 GitHub

```bash
cd ~/Documents/Jubo\ EDU\ Claude\ for\ Excel\ /JuboEDU\ Claude\ for\ Excel/jubo-excel-course

# 初始化 Git
git init
git add .
git commit -m "🎉 初始化 Claude for Excel 課程網站"

# 連接到 GitHub（換成你的帳號）
git remote add origin https://github.com/你的GitHub帳號/claude-for-excel.git
git branch -M main
git push -u origin main
```

---

## 第五步：啟用 GitHub Pages

1. 到你的 GitHub repo 頁面
2. 點上方 **Settings** → 左側 **Pages**
3. Source 選 **GitHub Actions**
4. 儲存

---

## 第六步：等待自動部署

推送 code 之後，GitHub Actions 會自動觸發部署（約 3-5 分鐘）。

查看進度：
- GitHub repo → **Actions** 分頁
- 看到 ✅ 綠勾 = 部署成功

---

## 你的網站網址

部署成功後，網站網址是：

```
https://你的GitHub帳號.github.io/claude-for-excel/
```

---

## 之後更新內容

每次修改課程內容後，只要：

```bash
git add .
git commit -m "更新課程內容"
git push
```

GitHub Actions 會自動重新部署，3-5 分鐘後上線。

---

## 常見問題

**Q：npm install 很慢？**  
A：第一次安裝 Docusaurus 需要下載約 200MB 套件，請耐心等待。

**Q：build 時出現警告但沒有 error？**  
A：警告可以忽略，只要最後顯示 `[SUCCESS]` 就沒問題。

**Q：網站顯示 404？**  
A：確認 `docusaurus.config.js` 的 `baseUrl` 和 `projectName` 和你的 repo 名稱一致。

**Q：想用自己的網域（如 course.jubo.health）？**  
A：在 `static/CNAME` 檔案中填入你的網域，並在 DNS 設定 CNAME 指向 `你的帳號.github.io`。

---

## 未來升級路線

| 階段 | 功能 | 技術 |
|------|------|------|
| 現在 | 靜態課程網站 | Docusaurus + GitHub Pages |
| 下一步 | 更快的部署、自定義網域 | 遷移到 Vercel |
| 進階 | 學員登入、學習記錄 | Vercel + Supabase + Clerk |
| 商業化 | 付費課程 | + Stripe |

---

*智齡科技 Claude for Excel · 部署指南 · 2024*
