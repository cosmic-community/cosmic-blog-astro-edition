# Cosmic Blog — Astro Edition

![Cosmic Blog — Astro Edition](https://imgix.cosmicjs.com/c6427280-112d-11f1-9d0e-b53b97dc6163-photo-1555066931-4365d14bab8c-1771902371794.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful, blazing-fast blog built with [Astro](https://astro.build/) and powered by [Cosmic](https://www.cosmicjs.com). This static-first website fetches posts, authors, and categories from your Cosmic bucket and renders them as optimized static pages with stunning typography and a modern editorial design.

## Features

- ⚡ **Static Site Generation** — Pre-rendered pages for lightning-fast performance
- 📝 **Markdown Rendering** — Rich blog content rendered beautifully with typography plugin
- 🧭 **Dynamic Routes** — Individual pages for every post, author, and category
- 🏷️ **Category Filtering** — Browse posts organized by category
- ✍️ **Author Profiles** — Dedicated pages with bio, avatar, and post listings
- 🔍 **SEO Optimized** — Meta tags, Open Graph support, and semantic HTML
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- 🎨 **Modern Design** — Clean editorial layout with Inter font and indigo accents

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=699ce84622395ada296b536a&clone_repository=699d3cbf127417e249ef65f2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog with posts, authors, and categories"

### Code Generation Prompt

> "Set up an Astro website powered by my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Astro](https://astro.build/) — Static site framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [marked](https://marked.js.org/) — Markdown parser

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with your blog content

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables — create a `.env` file:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   ```
4. Start the development server:
   ```bash
   bun run dev
   ```
5. Open [http://localhost:4321](http://localhost:4321)

## Cosmic SDK Examples

```typescript
import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
  apiEnvironment: 'staging',
})

// Fetch all posts with author and category
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata', 'created_at'])
  .depth(1)

// Fetch a single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post-slug' })
  .props(['id', 'title', 'slug', 'metadata', 'created_at'])
  .depth(1)
```

## Cosmic CMS Integration

This project uses three content types from your Cosmic bucket:

| Type | Slug | Fields |
|------|------|--------|
| 📝 Posts | `posts` | content (markdown), featured_image, author, category |
| ✍️ Authors | `authors` | name, bio, profile_photo, social_link |
| 🏷️ Categories | `categories` | name, description |

Content is fetched at build time using the Cosmic SDK with `depth(1)` to resolve connected objects (authors and categories) in a single query.

## Deployment Options

### Vercel
```bash
bun run build
# Deploy the dist/ folder
```

### Netlify
```bash
bun run build
# Deploy the dist/ folder
```

Set these environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`

<!-- README_END -->