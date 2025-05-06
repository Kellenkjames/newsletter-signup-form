## Newsletter Sign-Up Form — Frontend Mentor Challenge

A responsive, form-driven component built with semantic HTML, modular SCSS architecture, and vanilla JavaScript. This project features manual email validation and state transitions between a form view and a success message — practicing clean separation of concerns and progressive enhancement.

[🔗 Live Demo](https://kellenkjames.github.io/newsletter-signup-form/)

---

## Features

- Responsive layout with mobile and desktop assets
- Semantic, accessible HTML5 form markup
- Manual email validation using vanilla JavaScript
- Success message UI rendered conditionally on valid input
- Error messaging and input validation feedback
- Modular SCSS with design tokens and utility mixins
- Component-based JavaScript using MVC-lite architecture
- BEM naming convention for scalable styling

---

## Tech Stack

- HTML5
- SCSS (BEM, Tokens, Mixins)
- JavaScript (ES6+, MVC-lite architecture, DOM encapsulation)
- Git / GitHub
- GitHub Pages (Deployment)
- Figma (Design Reference)

---

## Screenshots

| Desktop                                                 | Mobile                                                |
| ------------------------------------------------------- | ----------------------------------------------------- |
| ![Desktop Screenshot](./assets/screenshots/desktop.png) | ![Mobile Screenshot](./assets/screenshots/mobile.png) |

---

## Project Structure

<pre> ``` newsletter-signup-form/ ├── index.html ├── assets/ │ ├── images/ │ │ ├── illustration-sign-up-desktop.svg │ │ └── illustration-sign-up-mobile.svg │ └── screenshots/ ├── scripts/ │ ├── model.js        # Email validation logic │ ├── view.js         # DOM selectors + UI methods │ ├── controller.js   # Form submission flow │ └── main.js         # App init │ └── styles/ │ ├── abstracts/      # Tokens, mixins, breakpoints │ ├── base/           # Reset + global styles │ ├── components/     # Form, success message │ ├── layout/         # Overall structure │ └── main.scss ├── style.css          # Compiled CSS output └── README.md ``` </pre>

---

## Getting Started

1. Clone the repository:
   `git clone https://github.com/yourusername/newsletter-signup-form.git`

2. Navigate to the project directory:
   `cd newsletter-signup-form`

3. Compile SCSS to CSS (if using the CLI):
   `sass src/styles/main.scss style.css`

4. Open `index.html` in your browser to preview the layout.

---

## ⏱️ Time Estimates

| Task                             | Time Spent |
| -------------------------------- | ---------- |
| Initial Setup & File Scaffolding | 1 hr       |
| Layout & Styling (HTML + SCSS)   | 2 hrs      |
| Email Validation Logic (JS)      | 2 hrs      |
| Form-Success State Toggle Logic  | 1.5 hrs    |
| Final Refactor & QA              | 1.5 hrs    |
| **Total**                        | **~8 hrs** |

---

## Key Learnings

- Writing manual validation logic with regex in modern JavaScript

- Structuring DOM interaction and state transitions cleanly using MVC-lite patterns

- Handling responsive design with `<picture>` elements and mobile-first SCSS

- Organizing code for reusability and scalability across components

- Practicing clean Git commit hygiene and professional documentation

---

## Improvements (If time allowed)

- Add keyboard focus trap or ARIA live regions for enhanced accessibility

- Animate success state with transitions or fade-in effects

- Extend JS validation to include real-time feedback while typing

- Refactor validation logic into reusable utility module
