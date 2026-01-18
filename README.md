# Mechanical Engineering Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase mechanical engineering projects, skills, and achievements.

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Project Showcase** - Highlight your engineering projects with detailed descriptions
- **Skills Section** - Display technical competencies and tools
- **Contact Form** - Easy way for recruiters and collaborators to reach you
- **Resume Download** - Direct download link for your resume
- **Fast Performance** - Built with Vite for lightning-fast load times
- **SEO Optimized** - Proper meta tags and structure for search engines

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Routing:** React Router v6
- **State Management:** TanStack Query
- **Build Tool:** Vite
- **Icons:** Lucide React

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mechanical-engineering-portfolio.git
cd mechanical-engineering-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/pages/Index.tsx** - Main portfolio content
2. **public/resume.pdf** - Replace with your actual resume
3. **index.html** - Update meta tags and title
4. **package.json** - Update author and repository fields

### Styling

- **Colors & Theme:** Modify `src/index.css` and `tailwind.config.ts`
- **Components:** Customize components in `src/components/`

### Adding Projects

Add your projects in the projects section of your main page component. Include:

- Project title and description
- Technologies used
- Images/screenshots
- Links to live demos or repositories

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:

```json
"deploy": "vite build && gh-pages -d dist"
```

3. Deploy:

```bash
npm run deploy
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/mechanical-engineering-portfolio](https://github.com/yourusername/mechanical-engineering-portfolio)

---

**Built with ❤️ for showcasing engineering excellence**
