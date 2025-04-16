# CV Website Documentation

## Project Overview

This CV website is built with Vue 3 and TypeScript, featuring multilingual support, theme toggling, and responsive design. It's designed to showcase your professional experience, skills, and projects in a modern, interactive format.

## Features

- **Multilingual Support**: Switch between English, Russian, and German
- **Theme Toggle**: Choose between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Contact Form**: Allow potential employers to reach out directly
- **Modern UI**: Clean, professional design with smooth transitions

## Project Structure

```
cv-website-app/
├── public/              # Public assets
├── src/
│   ├── assets/          # CSS and other static assets
│   ├── components/      # Reusable Vue components
│   │   ├── LanguageSwitcher.vue  # Language selection component
│   │   └── ThemeToggle.vue       # Theme toggle component
│   ├── i18n/            # Internationalization
│   │   ├── index.ts     # i18n configuration
│   │   └── locales/     # Translation files
│   │       ├── en.json  # English translations
│   │       ├── ru.json  # Russian translations
│   │       └── de.json  # German translations
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   │   ├── contact.ts   # Contact form state management
│   │   ├── language.ts  # Language state management
│   │   └── theme.ts     # Theme state management
│   ├── views/           # Page components
│   │   └── HomeView.vue # Main CV page
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization Guide

### Updating Personal Information

To update your personal information, edit the translation files in `src/i18n/locales/`:

1. For English content: `en.json`
2. For Russian content: `ru.json`
3. For German content: `de.json`

Each file follows the same structure, so you can update your information in all languages.

### Adding New Sections

To add a new section to your CV:

1. Add the section content to each language file in `src/i18n/locales/`
2. Update the `HomeView.vue` component to include the new section
3. Add the section to the navigation in `App.vue`

### Changing Colors and Styling

The website uses CSS variables for theming. To change colors:

1. Edit the CSS variables in `src/assets/base.css`
2. Variables are defined for both light and dark themes

### Adding Profile Picture

To add your profile picture:

1. Place your image in the `public` directory
2. Update the `HomeView.vue` component to replace the placeholder with your image

## Development Guide

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Local Development

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

## Contact Form Integration

The contact form is currently set up to simulate submission. To connect it to a real backend:

1. Edit the `submitForm` function in `src/stores/contact.ts`
2. Implement your preferred email service or API endpoint

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)
