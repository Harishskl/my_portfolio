# GitHub Pages Deployment Guide

## 🚀 Quick Start

Your portfolio is configured to deploy to: **https://harishskl.github.io**

### Prerequisites

- GitHub account
- Git installed on your computer
- Repository: `Harishskl/Harishskl.github.io`

---

## 📋 Step-by-Step Deployment

### Step 1: Initialize Git Repository (if not already done)

```bash
cd d:\harish_web\my-mech-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Connect to GitHub Repository

```bash
git remote add origin https://github.com/Harishskl/Harishskl.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository: https://github.com/Harishskl/Harishskl.github.io
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Click **Save**

### Step 4: Trigger Deployment

The deployment will automatically start when you push to the `main` branch. You can also:

1. Go to the **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Step 5: Verify Deployment

1. Wait for the workflow to complete (usually 2-3 minutes)
2. Visit: **https://harishskl.github.io**
3. Your portfolio should be live! 🎉

---

## 🔄 Updating Your Portfolio

Every time you make changes and push to GitHub, your site will automatically redeploy:

```bash
# Make your changes to the code
git add .
git commit -m "Updated portfolio content"
git push
```

The GitHub Actions workflow will automatically:

1. Build your project
2. Deploy to GitHub Pages
3. Make it live at https://harishskl.github.io

---

## 🌐 Adding a Custom Domain (Optional)

If you have a custom domain (e.g., `harish.dev`):

### 1. Create CNAME file

Create a file `public/CNAME` with your domain:

```
yourdomain.com
```

### 2. Configure DNS

Add these DNS records at your domain provider:

**For apex domain (yourdomain.com):**

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For subdomain (www.yourdomain.com or portfolio.yourdomain.com):**

```
Type: CNAME
Name: www (or portfolio)
Value: harishskl.github.io
```

### 3. Configure in GitHub

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS**
4. Click **Save**

Wait 24-48 hours for DNS propagation.

---

## 🛠️ Troubleshooting

### Build Fails

- Check the **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### 404 Error on Deployed Site

- Verify GitHub Pages source is set to **GitHub Actions**
- Check that the workflow completed successfully
- Clear browser cache and try again

### Custom Domain Not Working

- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check CNAME file is in `public/` folder
- Ensure "Enforce HTTPS" is enabled in GitHub Pages settings

### Changes Not Showing

- Check that the workflow ran successfully in Actions tab
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for CDN to update

---

## 📁 Project Structure

```
my-mech-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment workflow
├── public/
│   ├── images/                 # Static images
│   ├── resume.pdf             # Your resume (add this!)
│   └── favicon.ico            # Site icon
├── src/
│   ├── components/            # React components
│   └── ...
├── vite.config.ts             # Vite configuration (base: "/")
└── package.json               # Project dependencies
```

---

## ✅ Checklist Before First Deployment

- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update personal information in components
- [ ] Test build locally: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Initialize git repository
- [ ] Push to GitHub
- [ ] Configure GitHub Pages settings
- [ ] Verify deployment in Actions tab
- [ ] Visit https://harishskl.github.io

---

## 🎯 Your Deployment URLs

- **Live Site**: https://harishskl.github.io
- **Repository**: https://github.com/Harishskl/Harishskl.github.io
- **Actions**: https://github.com/Harishskl/Harishskl.github.io/actions

---

## 💡 Tips

1. **Always test locally** before pushing:

   ```bash
   npm run build
   npm run preview
   ```

2. **Check build status** in the Actions tab after pushing

3. **Use meaningful commit messages** for easier tracking

4. **Keep dependencies updated** for security and performance

5. **Monitor deployment** - first deployment may take 5-10 minutes

---

Need help? Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or the workflow logs in the Actions tab.
