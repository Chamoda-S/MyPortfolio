# How to Add Images to Your Portfolio

This guide explains how to add your own images to replace the placeholders.

## File Structure

Your project folder looks like this:

```
your-portfolio/
├── public/              ← ALL IMAGES GO HERE
│   ├── placeholder-hero.jpg
│   ├── placeholder-project-1.jpg
│   ├── placeholder-project-2.jpg
│   ├── placeholder-project-3.jpg
│   ├── placeholder-project-4.jpg
│   └── (add your images here)
├── app/
├── lib/
└── ...
```

## Step-by-Step: Adding Images

### 1. Prepare Your Images

Before adding images, make sure they are:
- **Format:** JPG, PNG, or WebP (JPG recommended for smaller file sizes)
- **Size:** 1200x1200px or larger for project images (portrait or square)
- **File names:** Use simple names with no spaces (e.g., `my-project.jpg` instead of `My Project.jpg`)

**Pro Tip:** Compress images before uploading to keep your site fast:
- Use online tools like [Tinypng.com](https://tinypng.com) or [Compressor.io](https://compressor.io)
- Or use your computer's built-in image tools to resize

### 2. Add Images to Public Folder

**Option A: If you downloaded the project (recommended)**

1. Find the `/public` folder in your project
2. Drag and drop your images into the `/public` folder
3. You'll see the files appear alongside the placeholder images

**Option B: Using GitHub (if you cloned to GitHub)**

1. Navigate to your repository on GitHub
2. Go to the `public` folder
3. Click "Add file" → "Upload files"
4. Drag your images in
5. Commit the changes

**Option C: Using Command Line**

```bash
# Copy an image to the public folder
cp ~/Downloads/my-image.jpg ./public/my-image.jpg
```

### 3. Update Your Portfolio Config

Go to `/lib/portfolio-config.ts` and update the image paths:

**Before:**
```typescript
{
  id: 1,
  title: 'Project One',
  description: 'A detailed description of your first project...',
  image: '/placeholder-project-1.jpg',  ← This is the placeholder
  skills: ['React', 'TypeScript'],
  githubUrl: '#',
}
```

**After:**
```typescript
{
  id: 1,
  title: 'Project One',
  description: 'A detailed description of your first project...',
  image: '/my-project-1.jpg',  ← Your actual image
  skills: ['React', 'TypeScript'],
  githubUrl: '#',
}
```

### 4. Replace Hero Image

Your main profile photo:

1. Add your photo to `/public` (e.g., `/public/profile-photo.jpg`)
2. Open `/app/page.tsx` and find the hero image (around line 124):

```jsx
<Image
  src="/placeholder-hero.jpg"  ← Change this
  alt="Chamoda Suraweera"
  fill
  className="object-cover"
  priority
/>
```

Change it to:

```jsx
<Image
  src="/profile-photo.jpg"  ← Your photo
  alt="Chamoda Suraweera"
  fill
  className="object-cover"
  priority
/>
```

## Image Naming Convention

Use descriptive names without spaces:

❌ Bad:
- `My Project 1.jpg`
- `photo (1).jpg`
- `Screenshot.jpg`

✅ Good:
- `portfolio-project-1.jpg`
- `profile-photo.jpg`
- `project-ecommerce.jpg`

## Quick Reference: Which Images Go Where

| What | File Location | File Name | Size |
|------|---------------|-----------|------|
| Your profile photo | `/public/` | `profile-photo.jpg` | 1200x1200px |
| Project 1 image | `/public/` | `project-1.jpg` | 1200x800px or square |
| Project 2 image | `/public/` | `project-2.jpg` | 1200x800px or square |
| Logo (if custom) | `/public/` | `logo.jpg` | 400x400px |

## Troubleshooting

**Images not showing up?**
- Make sure the file is in the `/public` folder (not in a subfolder)
- Check that the filename in the config matches exactly (including `.jpg`, `.png`, etc.)
- Make sure there are no spaces in the filename
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

**Images look blurry or stretched?**
- Use images that are at least 1200x1200px
- Make sure your image dimensions match what the component expects

**File too large?**
- Compress using [Tinypng.com](https://tinypng.com)
- Use JPG format instead of PNG for better compression

## Need Help?

- Check your file explorer to confirm images are in `/public/`
- Compare the filename in your config with the actual filename in `/public/`
- Make sure you've saved all changes and refreshed your browser
