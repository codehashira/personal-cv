# CV Website Deployment Guide

This document provides instructions for deploying your CV website to a hosting service.

## Project Structure

The CV website is built with Vue 3 and includes the following features:
- Multilingual support (English, Russian, German)
- Light/Dark theme toggle
- Responsive design for all screen sizes
- Contact form

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Local Development

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Access the website at http://localhost:5173/

## Building for Production

1. Build the project:
   ```
   npm run build
   ```
2. The built files will be in the `dist` directory

## Deployment Options

### Option 1: Hostinger

1. Log in to your Hostinger account
2. Go to Website > File Manager
3. Navigate to the public_html directory
4. Upload all files from the `dist` directory
5. Your website should now be accessible at your domain

### Option 2: Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your Git repository
4. Set build command to `npm run build`
5. Set publish directory to `dist`
6. Click "Deploy site"

### Option 3: Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm install -g vercel`
3. Run `vercel` in the project directory
4. Follow the prompts to deploy

## Updating Content

To update the content of your CV:

1. Edit the translation files in `src/i18n/locales/` directory
2. Rebuild the project using the steps above

## Customizing Styles

The website uses CSS variables for theming. To customize the appearance:

1. Edit the CSS variables in `src/assets/main.css`
2. Rebuild the project

## Contact Form

The contact form is currently set up to simulate submission. To connect it to a real backend:

1. Edit the `submitForm` function in `src/stores/contact.ts`
2. Implement your preferred email service or API endpoint

## Support

If you need any assistance with deployment or customization, please contact the developer.
