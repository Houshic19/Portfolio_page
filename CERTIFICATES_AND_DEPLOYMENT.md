# Certificate Images & Deployment Guide

## 1. Adding Certificate Images Locally

### Folder Structure
Your certificates folder has been created at: `public/certificates/`

### Step 1: Add Your Certificate Images
Place your certificate badge/images in `public/certificates/` with these names:
- `ceh.png` - Certified Ethical Hacker (CEH v13)
- `azure-ai.png` - Microsoft Azure AI Fundamentals
- `oracle-oci.png` - Oracle Cloud Infrastructure Foundations
- `cisco-ccna.png` - Cisco Junior Cybersecurity Analyst

### Step 2: Image Requirements
- **Format**: PNG, JPG, or WEBP
- **Size**: Recommended 200x200px or 300x300px (will be displayed at 128x128px)
- **Transparency**: PNG with transparent background works best
- **Aspect Ratio**: Square (1:1) looks best for certificate badges

### Step 3: How Images Display
- **Front of card**: Shows the certificate badge image + title
- **Back of card**: Shows issuer name + "View Credential" button
- **Hover**: Flip animation between front and back

---

## 2. Free Deployment on Vercel

### Prerequisites
1. A GitHub account (free)
2. Your code pushed to GitHub

### Deployment Steps

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "SOC Analyst Portfolio with Achievements and Certificates"

# Create new repo on GitHub: https://github.com/new
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to **https://vercel.com**
2. Click **"Sign Up"** → Sign up with GitHub
3. Click **"Import Project"**
4. Select your portfolio repository
5. Click **"Deploy"** (Vercel will auto-detect Next.js)
6. Wait for deployment to complete

#### Step 3: Your Live Site
- Your portfolio will be live at: `https://portfolio-YOUR_USERNAME.vercel.app`
- Changes auto-deploy when you push to main branch
- No credit card required (free tier)

---

## 3. Getting Certificate Badges

If you don't have the certificate badges, you can:

### Option A: Download from Official Sources
- **CEH**: https://www.eccouncil.org/
- **Microsoft Azure**: Your Microsoft Learn profile or certification page
- **Oracle OCI**: Oracle University dashboard
- **Cisco**: Cisco NetAcad profile

### Option B: Create Digital Badges
- Many certification bodies provide digital badges
- Check your email for badge credentials
- Import them to platforms like: Credly, Acclaim, Badgr

---

## 4. Update Certificate Links

If your credential URLs are different, update them in `src/components/Skills.tsx`:

```typescript
const certificationsData: Certification[] = [
  {
    name: 'Your Cert Name',
    issuer: 'Issuer Name',
    credentialUrl: 'https://your-credential-url.com',
    badgeImage: '/certificates/your-badge.png',
  },
]
```

---

## 5. Troubleshooting

### Images Not Showing?
- Check file names match exactly (case-sensitive on Linux/Vercel)
- Ensure images are in `public/certificates/` folder
- Verify image format is PNG, JPG, or WEBP
- Images must be at least 100x100px

### Deployment Issues?
- Make sure all files are committed to Git
- Check Vercel build logs for errors
- Ensure `package.json` exists
- No build errors in local terminal before pushing

---

## 6. Local Testing

Before deploying, test locally:
```bash
npm run dev
# Open http://localhost:3000 in your browser
# Hover over certificate cards to see flip animation
```

---

## 7. File Paths Reference

```
portfolio/
├── public/
│   └── certificates/
│       ├── ceh.png
│       ├── azure-ai.png
│       ├── oracle-oci.png
│       └── cisco-ccna.png
├── src/
│   ├── app/
│   │   ├── page.tsx (includes Achievements section)
│   │   └── layout.tsx
│   └── components/
│       ├── Skills.tsx (updated with certificate images)
│       ├── Achievements.tsx (hackathons, CTF, papers)
│       └── ...
└── package.json
```

---

**Next Steps:**
1. Add certificate images to `public/certificates/`
2. Push to GitHub
3. Deploy on Vercel
4. Share your portfolio link!
