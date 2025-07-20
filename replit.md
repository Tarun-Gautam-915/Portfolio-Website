# Personal Portfolio Website

## Overview
This is a clean, minimalist personal portfolio website built with pure HTML, CSS, and JavaScript. The project features a dark theme design with smooth animations and responsive layout, showcasing a developer's professional profile without using any frameworks.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
This is a client-side static website with no backend components. The architecture follows a simple three-file structure:

- **Frontend**: Pure HTML5 semantic markup
- **Styling**: Vanilla CSS3 with modern features (CSS Grid, Flexbox, custom properties)
- **Interactivity**: Pure JavaScript (ES6+) for DOM manipulation and animations
- **Assets**: External CDN dependencies for fonts and icons

## Key Components

### HTML Structure (index.html)
- Semantic HTML5 elements for accessibility
- Single-page application with anchor-based navigation
- Responsive viewport configuration
- External font loading (Google Fonts - Inter)
- Font Awesome icons integration

### Styling System (style.css)
- **Reset styles**: Universal box-sizing and margin/padding reset
- **Dark theme**: Primary background (#0a0a0b) with light text (#e4e4e7)
- **Typography**: Inter font family with multiple weights
- **Custom scrollbar**: Styled webkit scrollbar for modern appearance
- **Responsive design**: Mobile-first approach with breakpoints

### Interactive Features (script.js)
- **Mobile navigation**: Hamburger menu toggle functionality
- **Scroll effects**: Navbar styling changes on scroll
- **Smooth scrolling**: Animated navigation between sections
- **Animation system**: Intersection Observer for fade-in effects
- **Event handling**: Click and scroll event management

### Section Structure
1. **Navigation**: Fixed header with logo and menu links
2. **Home**: Hero section with personal introduction
3. **About**: Professional background and description
4. **Experience**: Timeline/card format for work history
5. **Projects**: Portfolio showcase (structure prepared)
6. **Skills**: Technical abilities display
7. **Contact**: Communication information

## Data Flow
Since this is a static website, there's no traditional data flow. Instead, the flow consists of:

1. **Page Load**: HTML loads, CSS applies styling, JavaScript initializes
2. **User Interaction**: Click/scroll events trigger JavaScript functions
3. **DOM Manipulation**: JavaScript updates classes and styles for animations
4. **Visual Feedback**: CSS transitions provide smooth visual responses

## External Dependencies
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library (version 6.4.0) via CDN
- **No build tools**: Direct browser interpretation of source files

## Deployment Strategy
This is a static website that can be deployed to any web hosting service:

- **Static hosting**: Compatible with GitHub Pages, Netlify, Vercel
- **CDN deployment**: All external dependencies loaded via CDN
- **No server requirements**: Pure client-side execution
- **Cross-browser compatibility**: Uses modern but well-supported web standards

### Development Notes
- Code follows modular structure for easy maintenance
- Comments included for code readability
- Mobile-first responsive design approach
- Accessibility considerations with semantic HTML
- Performance optimized with efficient selectors and minimal DOM queries

The project prioritizes simplicity, performance, and maintainability while delivering a professional portfolio experience.