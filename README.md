# SOC Analyst Portfolio

A modern, professional portfolio website for cybersecurity professionals applying to SOC (Security Operations Center) analyst roles. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## 🎯 Features

- **Modern Design**: Dark theme with cybersecurity aesthetic using cyan/blue color scheme
- **Responsive**: Fully mobile-friendly with adaptive layouts
- **Fast Performance**: Built with Next.js for optimal speed and SEO
- **Professional Sections**:
  - About/Hero section with call-to-action
  - Featured Projects showcase
  - Technical Skills & Expertise breakdown
  - Professional Experience timeline
  - Contact form
  - Footer

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── Hero.tsx            # Hero section
│       ├── Projects.tsx        # Projects showcase
│       ├── Skills.tsx          # Skills & certifications
│       ├── Experience.tsx      # Work experience
│       ├── Contact.tsx         # Contact form
│       └── Footer.tsx          # Footer
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** (or yarn/pnpm)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Add Your Information

#### 1. **Update Hero Section** ([src/components/Hero.tsx](src/components/Hero.tsx))
- Modify the tagline and description
- Update call-to-action buttons

#### 2. **Add Your Projects** ([src/components/Projects.tsx](src/components/Projects.tsx))
Replace the `projects` array with your own projects:
```typescript
const projects: Project[] = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    link: 'https://...',
  },
  // ... more projects
]
```

#### 3. **Update Skills** ([src/components/Skills.tsx](src/components/Skills.tsx))
Modify the `skillsData` array to match your expertise areas

#### 4. **Update Experience** ([src/components/Experience.tsx](src/components/Experience.tsx))
Replace the `experiences` array with your work history

#### 5. **Update Contact Info** ([src/components/Contact.tsx](src/components/Contact.tsx))
- Update email address
- Add LinkedIn profile URL
- Add GitHub profile URL
- Connect form submission (currently logs to console)

#### 6. **Update Metadata** ([src/app/layout.tsx](src/app/layout.tsx))
- Update title
- Update description
- Add your name

### Styling

The portfolio uses **Tailwind CSS** with custom cybersecurity-themed colors:
- Primary color: Cyan (`cyan-400`, `cyan-500`)
- Background: Dark slate (`slate-950`, `slate-900`)
- Accent: Blue tones

Edit [tailwind.config.ts](tailwind.config.ts) to customize the color scheme.

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📦 Built With

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [ESLint](https://eslint.org/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

```bash
npm run build
npm start
```

## 📞 Contact Section Setup

The contact form displays submitted data in the console. For production, integrate with:
- **Formspree**: Free form backend
- **Netlify Forms**: For Netlify deployments
- **AWS SES**: For email services
- **Custom API**: Your own backend service

## 🎨 Customization Tips

1. **Update Navigation**: Edit links in [Navbar.tsx](src/components/Navbar.tsx)
2. **Change Colors**: Modify color values in [tailwind.config.ts](tailwind.config.ts)
3. **Add More Sections**: Create new components in `src/components/`
4. **Update Fonts**: Modify font settings in [globals.css](src/app/globals.css)

## 📄 License

This portfolio is open source and available for personal use.

## 🤝 Support

For issues or questions, please create an issue or contact via the portfolio contact form.

---

**Ready to showcase your SOC analyst expertise!** 🔐
