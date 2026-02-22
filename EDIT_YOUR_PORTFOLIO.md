# How to Edit Your Portfolio

This guide shows you exactly where to find and edit all your portfolio information.

## Quick Start: Where to Edit Your Details

All your portfolio content is stored in **`lib/portfolio-config.ts`**. This is the **only file you need to edit** to update your portfolio content throughout the site.

### Option 1: Edit via Config File (RECOMMENDED)

Open `/lib/portfolio-config.ts` and update the values:

```typescript
export const portfolioConfig = {
  personal: {
    name: 'Your Name',
    logo: 'CS', // Your initials or logo text
    tagline: 'Your professional tagline',
    // ... more details
  },
  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    medium: 'https://medium.com/@yourprofile',
    wikipedia: '#', // Add your Wikipedia profile URL
  },
  // ... projects, skills, experience
}
```

### Option 2: Hardcode in JSX (Not Recommended)

You can also edit details directly in `/app/page.tsx`, but this creates duplicate data and is harder to maintain. We recommend using the config file approach.

---

## Detailed Editing Guide

### 1. **Personal Information**

**File:** `/lib/portfolio-config.ts` → `personal` section

- **Name:** Update `name` field
- **Logo/Initials:** Update `logo` field (currently "LOGO", change to "CS" or your initials)
- **Tagline:** Hero section subtitle - update `tagline`
- **Description:** About section intro - update `description`
- **Bio:** About section paragraphs - update `bio`

**Also update in JSX:** 
- Logo appears at the top-left of the site (`app/page.tsx`, line 25)
- Name in hero section appears at line 95

### 2. **Contact Information**

**File:** `/lib/portfolio-config.ts` → `contact` section

- **Email:** Update `email` - displays in contact section
- **LinkedIn:** Update `linkedin` URL - social link in contact
- **GitHub:** Update `github` URL - social link in contact
- **Medium:** Update `medium` URL (currently "#", add your Medium profile)
- **Wikipedia:** Update `wikipedia` URL (currently "#", add your Wikipedia profile)

**Location in website:** Contact section at the bottom of the page

### 3. **Projects**

**File:** `/lib/portfolio-config.ts` → `projects` array

Each project has these fields:

```typescript
{
  id: 1,
  title: 'Project Name',
  description: 'What your project does',
  image: '/placeholder-project-1.jpg', // Replace with your image
  skills: ['Skill 1', 'Skill 2'], // 1-2 skills per project
  githubUrl: '#', // Link to GitHub repo
}
```

#### **Adding More Projects:**

1. Go to `/lib/portfolio-config.ts`
2. Add a new object to the `projects` array:

```typescript
{
  id: 5,
  title: 'My New Project',
  description: 'A description of what this project does.',
  image: '/placeholder-project-5.jpg',
  skills: ['React', 'Node.js'],
  githubUrl: 'https://github.com/yourusername/project',
}
```

3. Create a placeholder image for your project in `/public/placeholder-project-5.jpg`
4. If adding **more than 4 projects**, you'll need to update `/app/page.tsx` to add new project cards (currently displays projects 1-4)

**Note:** The current layout shows projects in a 2-column grid. To display more than 4 projects, you can either:
- Keep only your best 4 projects (recommended for a clean portfolio)
- Edit `/app/page.tsx` to create a 3-column grid or pagination

**Images:** Place your project images in `/public/` folder (e.g., `/public/my-project-1.jpg`)

### 4. **Skills**

**File:** `/lib/portfolio-config.ts` → `skills` section

Update the skill arrays. Each category displays in its own column:

```typescript
skills: {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  backend: ['Python', 'JavaScript', 'SQL', 'Node.js'],
  design: ['UI/UX Design', 'Figma', 'Problem Solving', 'Innovation'],
}
```

#### **Adding More Skills:**

Simply add items to any array:

```typescript
skills: {
  frontend: ['React', 'TypeScript', 'Vue', 'Tailwind CSS', 'Next.js', 'Astro'],
  backend: ['Python', 'JavaScript', 'SQL', 'PostgreSQL', 'Node.js', 'Express'],
  design: ['UI/UX Design', 'Figma', 'Problem Solving', 'Wireframing', 'Prototyping'],
}
```

#### **Adding a 4th Skill Category:**

If you want more than 3 skill categories (e.g., adding "Tools & Other"), you'll need to:

1. Add to config:
```typescript
skills: {
  frontend: [...],
  backend: [...],
  design: [...],
  tools: ['Git', 'Docker', 'Webpack', 'Linux'], // New category
}
```

2. Edit `/app/page.tsx` Skills section (around line 316) to add a 4th column:
```jsx
{/* 4th Skill Category */}
<div className="space-y-4">
  <h3 className="text-lg font-bold uppercase tracking-wide">Tools & Other</h3>
  <ul className="space-y-3">
    {['Git', 'Docker', 'Webpack', 'Linux'].map((skill) => (
      {/* Same structure as other categories */}
    ))}
  </ul>
</div>
```

### 5. **Experience**

**File:** `/lib/portfolio-config.ts` → `experience` array

Each experience item has:
```typescript
{
  title: 'Job Title',
  company: 'Company Name',
  location: 'City/Location',
  period: 'Present' or 'Year - Year',
  description: 'What you did in this role',
}
```

---

## Changing Images

All images are stored in the `/public` folder:

- **Hero image:** `/public/placeholder-hero.jpg` - Replace with your photo
- **Project images:** 
  - `/public/placeholder-project-1.jpg`
  - `/public/placeholder-project-2.jpg`
  - `/public/placeholder-project-3.jpg`
  - `/public/placeholder-project-4.jpg`

To use your own images:
1. Place your image in `/public/` (e.g., `/public/my-hero-photo.jpg`)
2. Update the path in `portfolio-config.ts`

**Recommended image sizes:**
- Hero: 600x600px (square)
- Projects: 1200x675px (16:9 aspect ratio)

---

## Responsive Design

Your portfolio is **fully responsive** and automatically adapts to:

### 🖥️ **Desktop (1024px+)**
- Full grid layouts
- Side-by-side sections
- Large typography

### 📱 **Tablet (768px - 1023px)**
- Adjusted grid layouts
- Optimized spacing
- Touch-friendly buttons

### 📱 **Mobile (< 768px)**
- Single column layouts
- Stacked components
- Full-width buttons
- Readable text sizes
- Optimized images

**No additional changes needed** - the site automatically scales for all devices!

---

## Color Customization

**File:** `/app/globals.css`

Your current color palette uses:
- **Primary:** Dark neutrals (black/charcoal)
- **Background:** Off-white/light gray
- **Accent:** Burgundy (statement color)

To change colors, update the CSS variables in `/app/globals.css`:

```css
:root {
  --background: oklch(0.98 0 0); /* Background color */
  --foreground: oklch(0.15 0 0); /* Text color */
  --accent-burgundy: oklch(0.35 0.16 25); /* Accent color */
  /* ... more variables */
}
```

---

## Typography

**File:** `/app/layout.tsx`

Your portfolio uses:
- **Headings:** Playfair Display (elegant serif)
- **Body text:** Lora (readable serif)

These are already configured. To change fonts:
1. Open `/app/layout.tsx`
2. Import different fonts from `next/font/google`
3. Update the font variables in `/app/globals.css`

---

## What is the Footer?

**Location:** Bottom of your portfolio page

The footer displays a copyright notice and appears on every page. It's a standard part of professional websites.

**Current footer shows:**
```
© 2024 Chamoda Suraweera. All rights reserved.
```

**To update the footer:**
1. Open `/app/page.tsx`
2. Find the footer section (search for "Footer" - around line 488)
3. Update the year and name:

```jsx
<footer className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border text-center text-muted-foreground text-sm">
  <p>© 2024 Your Name. All rights reserved.</p>
</footer>
```

The footer is part of professional web design - it provides copyright protection and shows you've thought about all aspects of your site. You can also add additional footer content like "Privacy Policy" or social links if needed.

---

## FAQ

**Q: Should I hardcode my details in the JSX or use the config file?**
A: Use the config file (`portfolio-config.ts`). It's cleaner, more maintainable, and avoids duplicating data.

**Q: How do I add more projects?**
A: Add a new object to the `projects` array in `portfolio-config.ts`. The site will automatically display it.

**Q: Can I change the layout?**
A: Yes! Edit `/app/page.tsx` for structural changes. The site uses Tailwind CSS classes for styling.

**Q: How do I deploy this?**
A: Click "Publish" in the top right of v0. It will deploy to Vercel automatically.

**Q: Can I add dark mode?**
A: The site already has dark mode support in `globals.css` (`.dark` class). It automatically detects system preferences.

---

## File Structure

```
project/
├── app/
│   ├── page.tsx          # Main portfolio page (edit for layout changes)
│   ├── layout.tsx        # Fonts and metadata (edit for SEO/fonts)
│   └── globals.css       # Colors and typography
├── lib/
│   └── portfolio-config.ts # ⭐ EDIT THIS FOR CONTENT
├── public/
│   ├── placeholder-hero.jpg
│   ├── placeholder-project-1.jpg
│   ├── placeholder-project-2.jpg
│   ├── placeholder-project-3.jpg
│   └── placeholder-project-4.jpg
└── package.json
```

---

## Next Steps

1. **Update your details** in `/lib/portfolio-config.ts`
2. **Replace placeholder images** with your own photos
3. **Update social links** (Medium, Wikipedia, LinkedIn, GitHub)
4. **Deploy** by clicking "Publish"

Your portfolio is ready to impress! 🎉
