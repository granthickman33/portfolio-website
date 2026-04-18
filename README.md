# Grant Hickman - Product Manager Portfolio

A personal portfolio website built with Next.js, Markdown/MDX, and Tailwind CSS.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (highlights reel)
│   ├── about/             # About page
│   ├── case-studies/       # Case studies list + dynamic [slug] route
│   ├── side-projects/     # Side projects page
│   └── resume/            # Resume page
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── content/               # MDX content files
│   ├── case-studies/       # Case study .mdx files
│   └── side-projects/     # Side project .mdx files
├── tailwind.config.ts     # Tailwind CSS configuration
└── public/              # Static assets (images, resume PDF)
```

---

## ✏️ Adding Content

### Adding a New Case Study

1. Create a new `.mdx` file in `content/case-studies/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Case Study Title"
summary: "A brief 1-sentence summary of the project outcome."
tags: ["Strategy", "Vision"]  # Tags shown on the card
---

## The Problem
Your problem description here.

## The Opportunity
Why this was worth solving...

## My Process & What I Did
Step-by-step breakdown...

## The Solution
What you built...

## Results & Impact
Metrics and outcomes...
```

3. Save the file - it will automatically appear on the site.

### Adding a New Side Project

1. Create a new `.mdx` file in `content/side-projects/`
2. Use the same frontmatter format
3. Save - it will appear on the Side Projects page

---

## 🛠️ Deployment

This project is set up for easy deployment to Vercel.

1. Push your changes to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

Every `git push` to `main` will trigger a new deployment.

---

## 🔧 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX (Markdown + JSX)
- **Deployment:** Vercel