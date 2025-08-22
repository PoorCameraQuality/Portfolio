# Braxcraft Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring a custom color palette and inspired by the Whitespace template design.

## 🎨 Design Features

- **Custom Color Palette**: Unique vintage winter theme with colors:
  - `#37353E` (blackgrey) - Primary background
  - `#44444E` (brown) - Secondary surfaces
  - `#715A5A` (night) - Brand accents
  - `#D3DAD9` (dark) - Text and highlights

- **Modern UI Components**: Built with shadcn/ui patterns and custom styling
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Typography**: Inter for body text, Poppins for headings

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router, RSC, Route Handlers)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── Footer.tsx        # Footer component
│   └── ...               # Other components
├── lib/                   # Utility functions
│   └── utils.ts          # Class merging utilities
└── content/               # MDX content (future)
    ├── work/              # Project case studies
    └── blog/              # Blog posts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd braxcraft-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_TO=hello@braxcraft.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap (after build)

## 🎯 Features

### ✅ Implemented
- **Homepage**: Hero section, features, work showcase, testimonials, CTA
- **About Page**: Bio, skills visualization, career timeline
- **Contact Page**: Form with validation, contact information
- **Navigation**: Sticky navbar with mobile menu
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth scroll animations and interactions
- **Contact Form**: Working form with API endpoint

### 🚧 Planned Features
- **Work Portfolio**: MDX-driven case studies
- **Blog**: MDX blog system
- **Services Page**: Service offerings and pricing
- **SEO Optimization**: Meta tags, sitemap, Open Graph
- **Email Integration**: Resend API for contact form

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.ts` and can be easily modified:

```typescript
colors: {
  'blackgrey': '#37353E',
  'brown': '#44444E', 
  'night': '#715A5A',
  'dark': '#D3DAD9',
  // ... semantic mappings
}
```

### Typography
Font families and sizes are configured in the Tailwind config:

```typescript
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
}
```

### Components
All components are built with reusability in mind and can be easily customized by modifying the component files in `src/components/`.

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Set environment variables**
4. **Deploy automatically**

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Tailwind CSS
Custom design tokens and utilities are defined in `tailwind.config.ts` and `src/app/globals.css`.

### Fonts
Google Fonts (Inter + Poppins) are loaded in `src/app/layout.tsx`.

### Analytics
Vercel Analytics is integrated and can be configured in the layout component.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have any questions or need help:

- **Email**: hello@braxcraft.com
- **Issues**: Create an issue in the repository

## 🙏 Acknowledgments

- **Design Inspiration**: Colorlib's Whitespace template
- **UI Components**: shadcn/ui and Radix UI
- **Icons**: Lucide React
- **Framework**: Next.js team

---

Built with ❤️ by Braxcraft
