<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Development Workflow

### ⚠️ Critical: Do NOT start the dev server in OpenCode

The `npm run dev` command will hang and cause the OpenCode terminal to block. **Never run it.**

Instead:
1. **Commit and push** changes to GitHub
2. Ask the user to restart their local dev server manually
3. Or, provide clear instructions for them to do so

### Adding New Content

1. Create new `.mdx` files in `content/case-studies/` or `content/side-projects/`
2. Follow the frontmatter format:

```markdown
---
title: "Your Title"
summary: "Brief summary of outcomes."
tags: ["Tag1", "Tag2"]
---

## The Problem
...

## The Opportunity
...

## My Process & What I Did
...

## The Solution
...

## Results & Impact
...
```

### Pushing Changes

Always commit and push after making changes:

```bash
git add -A && git commit -m "feat: Your commit message" && git push origin main
```

The user can then pull the changes locally or test them on Vercel.