# Portfolio Website - James Adams

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. This portfolio showcases a professional dark-themed design inspired by modern web standards.

## 🎨 Design Features

### Color Scheme
- **Primary Background**: `#1a1a2e` - Deep navy blue
- **Secondary Background**: `#16213e` - Lighter navy
- **Card Background**: `#0f1729` - Dark blue
- **Accent Primary**: `#f59e0b` - Amber/Orange
- **Accent Secondary**: `#fbbf24` - Yellow
- **Text Primary**: `#f3f4f6` - Light gray
- **Text Secondary**: `#9ca3af` - Medium gray

### UI Components
- ✅ Fixed navigation header with smooth scroll
- ✅ Responsive hamburger menu for mobile
- ✅ Hero section with profile image placeholder
- ✅ Company logos showcase (Meta, Google, LinkedIn, Slack)
- ✅ Statistics section with impressive numbers
- ✅ Service cards with hover effects
- ✅ Social media icons integration
- ✅ Professional footer
- ✅ Smooth scrolling behavior
- ✅ Custom scrollbar styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository (if applicable)
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation bar with responsive menu
│   │   ├── Hero.tsx            # Hero section with profile
│   │   ├── CompanyLogos.tsx    # Partner companies section
│   │   ├── Stats.tsx           # Statistics display
│   │   ├── Services.tsx        # Services overview
│   │   ├── ServiceCard.tsx     # Individual service card
│   │   └── Footer.tsx          # Footer component
│   ├── globals.css             # Global styles and theme
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🎯 Customization Guide

### 1. Personal Information

Edit `app/components/Hero.tsx`:
```typescript
// Change name and description
<h1>Your Name</h1>
<p>Your professional description...</p>
```

### 2. Profile Photo

Replace the placeholder in `app/components/Hero.tsx`:
- Add your photo to the `public/` folder (e.g., `public/profile.jpg`)
- Update the Hero component to use Next.js Image:

```typescript
<Image
  src="/profile.jpg"
  alt="Your Name"
  width={384}
  height={384}
  className="rounded-2xl object-cover"
/>
```

### 3. Services

Edit `app/components/Services.tsx` to modify:
- Service titles
- Descriptions
- Project counts
- Icons (from lucide-react)

### 4. Statistics

Update `app/components/Stats.tsx`:
```typescript
const stats = [
  { value: "Your Number", label: "Your Label" },
  // ... more stats
];
```

### 5. Social Media Links

Edit `app/components/Header.tsx` and `app/components/Hero.tsx`:
```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "Github" },
  // ... update with your links
];
```

### 6. Company Logos

Edit `app/components/CompanyLogos.tsx`:
- Replace emoji placeholders with actual logos
- Add logos to `public/` folder
- Use Next.js Image component

### 7. Color Scheme

Modify `app/globals.css`:
```css
:root {
  --dark-bg: #your-color;
  --accent-primary: #your-accent;
  /* ... other colors */
}
```

## 🎨 UI/UX Recommendations

### Typography
- **Headings**: Bold, large sizes (text-5xl to text-7xl)
- **Body**: Medium weight, comfortable reading size (text-base to text-lg)
- **Accent Text**: Amber color for CTAs and important elements

### Spacing
- Generous padding: `p-6` to `p-8` for cards
- Consistent gaps: `gap-6` to `gap-8` for grids
- Section spacing: `py-16` for vertical rhythm

### Animations & Interactions
- Hover effects on all interactive elements
- Scale transforms: `hover:scale-105`
- Color transitions: `transition-colors duration-200`
- Smooth scrolling: Enabled globally

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px

### Best Practices
1. **Accessibility**: All interactive elements have proper labels
2. **Performance**: Optimized with Next.js Image component
3. **SEO**: Proper meta tags in layout.tsx
4. **Dark Mode**: Consistent dark theme throughout

## 📦 Dependencies

- **Next.js 15.5.4**: React framework
- **React 19**: UI library
- **Tailwind CSS 4.1.14**: Utility-first CSS
- **TypeScript 5**: Type safety
- **Lucide React**: Icon library

## 🌟 Features to Add (Optional)

1. **Animations**: Add Framer Motion for scroll animations
2. **Contact Form**: Integrate email service (EmailJS, SendGrid)
3. **Blog Section**: Add MDX support for blog posts
4. **Portfolio Gallery**: Showcase your projects with images
5. **Testimonials**: Add client testimonials section
6. **Dark/Light Mode Toggle**: Add theme switcher
7. **Analytics**: Integrate Google Analytics or Vercel Analytics
8. **CMS Integration**: Connect to Sanity or Contentful

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Deploy from Git
- **Railway**: One-click deployment

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out through the social media links in the portfolio.

---

**Built with ❤️ using Next.js & Tailwind CSS**
