# WELLNESS ACADEMY - _Online Learning Platform_

## 💻 Live Demo

👉 You can try the deployed version here:
[https://irapolchanin.github.io/CapstoneProjectEpamFE/](https://irapolchanin.github.io/CapstoneProjectEpamFE/)

> This version is hosted via GitHub Pages and may have minor limitations compared to local development (e.g., form submissions may not work as expected).

---

## Project Overview

WELLNESS ACADEMY is a **fully responsive** web application for health and wellness online courses, featuring modern UI/UX design and interactive elements. The platform includes:

- **Complete course catalog** with filtering/sorting functionality
- **Featured courses** section with randomized display
- **Detailed course pages** with:
  - Course information
  - Instructor profiles
  - Rating system (1-5 stars)
- **Interactive enrollment system** with popup confirmation
- **Responsive image gallery** with hover effects
- **Contact page** with functional contact form and interactive map
- **Semantic HTML5** structure
- **Sass-powered** styling with:
  - Variables and mixins
  - Responsive design patterns
  - Modern layout techniques
- **Vanilla JavaScript** implementation:
  - Dynamic content loading
  - DOM manipulation
  - Event handling

## Key Features

### Course System

- Course cards with ratings, descriptions, and promotional messages
- Random featured course selection
- Detailed course view with:
  - Duration, difficulty level, and topic information
  - Structured learning content
  - Instructor profiles with bios

### UI/UX

- Fully responsive design (mobile, tablet, desktop)
- Interactive elements with smooth transitions
- Accessible color scheme and typography
- Consistent styling across all components
- Star rating visualization system

### Technical Implementation

- Modular JavaScript architecture
- Sass preprocessing with:
  - Variables for colors, spacing, etc.
  - Mixins for responsive breakpoints
  - Extendable placeholder classes
- ESLint and Stylelint configuration for code quality
- Clean, maintainable code structure

## Prerequisites

- **Node.js** (v14+ recommended)
- **npm** (v6+)
- **Git** (for version control)

## Setup Instructions

1. Clone the repository:

```bash
git clone https://autocode.git.epam.com/ira.polchanin/capstone-project-template.git
cd capstone-project-template
```

2. Install dependencies

```
npm install
```

3. Compile Sass

```
npm run compile-sass
```

4. Start the development server

```
npm start
```

## Project Structure

```
wellness-academy/
│
├── src/
│   ├── assets/
│   ├── data/
│   ├── js/
│   ├── pages/*.html
│   └── styles/
│
├── index.html
├── .stylelintrc.json
├── eslint.config.mjs
├── .prettierrc
├── package.json
├── package-lock.json
└── README.md
```

## Development Tools

- **Sass** - Advanced CSS preprocessing with variables and mixins
- **ESLint** (Airbnb config) - JavaScript code quality
- **Stylelint** - CSS/Sass consistency checker
- **Live Server** - Development server with hot reload
- **Git** - Version control system

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern layouts (Flexbox/Grid), animations
- **Sass** - Variables, mixins, nested rules
- **Vanilla JavaScript** (ES6+) - Modules, DOM manipulation
- **Git** - Source code versioning

## Future Improvements

- User authentication system
- Course progress tracking
- Enhanced filtering options
- Dark mode support
- User reviews system
