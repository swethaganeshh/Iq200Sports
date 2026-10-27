# IQ200 Sports Academy Website

A premium, responsive multi-sport academy website built with React and Vite.

## Features

- Sticky header with responsive mobile menu
- Full-screen hero section with athletic imagery
- About section with skill, fitness, and teamwork highlights
- Sports & Coaching grid with all 12 sports and detail modals
- Benefits section ("More Than a Game. A Foundation for Life.")
- Training journey walkthrough
- Responsive photo gallery with lightbox
- Testimonials section (with clearly marked placeholders)
- FAQ accordion
- Contact section with form validation, location cards, and WhatsApp
- Floating WhatsApp button (appears on scroll)
- Footer with navigation, sports links, and social links
- SEO-friendly meta tags and image alt text
- Smooth scroll-reveal animations with reduced-motion support

## Getting Started

```bash
npm install
npm run dev
```

The site runs locally and is ready for static deployment.

## Build for Production

```bash
npm run build
npm run preview
```

The build output is in the `dist/` folder.

## Deployment

This is a static frontend — no backend or database required.

### Vercel
1. Push the project to a Git repository.
2. Import the repo at [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite. Build command: `npm run build`. Output directory: `dist`.

### Netlify
1. Push the project to a Git repository.
2. Connect the repo at [netlify.com](https://netlify.com).
3. Build command: `npm run build`. Publish directory: `dist`.

### Cloudflare Pages
1. Push the project to a Git repository.
2. Create a new project at [pages.cloudflare.com](https://pages.cloudflare.com).
3. Build command: `npm run build`. Output directory: `dist`.

## Customization

All editable content lives in centralized configuration files:

| File | Contents |
|---|---|
| `src/config/site.js` | Headlines, section text, brand label |
| `src/config/sports.js` | 12 sports: names, descriptions, images |
| `src/config/content.js` | About highlights, benefits, journey steps |
| `src/config/data.js` | Gallery images, testimonials, FAQs |
| `src/config/contact.js` | Phone, email, WhatsApp, locations, social links, nav |

### Replacing Placeholder Images

**Gallery:** Edit the `galleryImages` array in `src/config/data.js`. Replace the `src` URLs with paths to your local images (e.g. `/assets/gallery/football-training.jpg`). Place image files in the `public/assets/` folder.

**Sports cards:** Edit the `image` field for each sport in `src/config/sports.js`.

**About highlights:** Edit the `image` field for each highlight in `src/config/content.js`.

### Replacing Placeholder Testimonials

Edit the `testimonials` array in `src/config/data.js`. Replace placeholder names, roles, text, and ratings with verified reviews. Remove the `placeholder: true` flag to hide the "Sample" badge.

### Adding Contact Details

Edit `src/config/contact.js`:
- Set `phone` and `email` to verified values.
- Set `whatsapp` to the full number with country code (e.g. `919876543210`) to enable the WhatsApp button.
- Update `locations` with confirmed addresses and hours.

### Adding Social Media Links

Edit the `socialLinks` object in `src/config/contact.js`. Set each platform to its full URL, or leave as `null` to hide it.

### Connecting the Contact Form

The contact form currently validates on the frontend and shows a setup message. To make it functional, connect it to a form-handling service such as Formspree, Web3Forms, or Netlify Forms. Update the form submission handler in `src/components/ContactForm.jsx`.

## Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Navy Blue | `#1C345F` | Primary backgrounds, navigation, footer |
| Golden Yellow | `#F9B52E` | Buttons, highlights, accents |
| Orange | `#F18700` | Sports accents |
| Athletic Red | `#BF171E` | Small accents, badges |
| White | `#FFFFFF` | Text on dark backgrounds |
| Light Background | `#F5F7FB` | Section backgrounds |

## Technology Stack

- React 18 with Vite
- JavaScript (JSX)
- CSS modules with custom properties
- Lucide React for icons
