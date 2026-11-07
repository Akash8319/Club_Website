# Club_Website
# 📱 Android Club — Official Showcase Website

<div align="center">

![Android Robot](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production--Ready-success?style=for-the-badge)

**A modern, responsive, and lightweight single-page website built for student developer clubs.**  
*Learn Kotlin. Build real applications. Ship to the world.*

[Live Demo](#-live-preview) • [Features](#-features) • [Quick Start](#-quick-start) • [Customization](#-customization-guide) • [Deployment](#-deployment)

</div>

---

## 📖 Overview

The **Android Club Website** is an open-source, production-ready landing page tailored for university clubs, developer circles, and student communities. It delivers a fast, interactive web presence with **zero dependencies, no bundlers, and no build configuration**.

Everything runs directly in the browser using standard web technologies: semantic HTML5, modern CSS variables, and vanilla ES6+ JavaScript.

---

## 📸 Page Sections

| Section | Description |
| :--- | :--- |
| **Hero** | Welcoming headline, call-to-action buttons, and an interactive phone frame running a simulated Kotlin/Compose code editor. |
| **About Us** | Highlights the core club values (**Learn**, **Build**, **Ship**) paired with animated milestone counters. |
| **Projects Showcase** | Curated project cards showing student projects built with Jetpack Compose, Firebase, Room DB, and ML Kit. |
| **Events** | Tabbed interactive schedule toggling smoothly between **Upcoming** workshops and **Past** study jams. |
| **Join Us (Contact)** | Accessible registration form with real-time field validation that composes a structured email directly to club leads. |

---

## ✨ Features

- ⚡ **Zero Build Tools & Dependencies**: No Node.js, Webpack, or Vite required. Edit and run anywhere instantly.
- 📱 **Interactive Kotlin Typing Simulator**:
  - Live animated code typer within a tilted Android phone mockup.
  - Tab switcher between `Main.kt` and `UI.kt`.
  - Built-in syntax highlighting tokens.
- 📈 **Animated Milestone Counters**:
  - Automatically triggers when scrolled into viewport using the native `IntersectionObserver` API.
  - Smooth 60 FPS count-up animation.
- 🗓️ **Accessible Event Tab Switcher**:
  - Seamless toggle between "Upcoming" and "Past" sessions.
  - Full keyboard and screen-reader accessibility (`role="tablist"`, `aria-selected`).
- 📬 **Zero-Backend Contact Form**:
  - Client-side validation for mandatory fields and RFC-compliant email formats.
  - Automatically generates an organized `mailto:` draft with user name, email, and reason to join.
- 🎨 **Modular Design Tokens (CSS Variables)**:
  - Easily tweak global palettes, typography, border radius, and container widths from `:root`.
- ♿ **Motion & Accessibility Mindful**:
  - Includes full support for `prefers-reduced-motion: reduce`.
  - High-visibility focus indicators (`:focus-visible`) for keyboard navigation.
- 📐 **Mobile-First Responsive Layout**:
  - Fluid typography with `clamp()`.
  - Collapsible mobile navigation drawer with touch-friendly targets.

---

## 📂 Project Structure

```text
Club_Website/
└── android-club-website/
    ├── index.html        # Main semantic markup & content
    ├── css/
    │   └── style.css     # CSS variables, layout, typography, animations & media queries
    ├── js/
    │   └── main.js       # Mobile drawer, typing animation, counter & form handler
    ├── assets/
    │   └── favicon.svg   # Vector Android mascot icon
    └── README.md         # Full project documentation
```

---

## 🚀 Quick Start

You can run and test this project in seconds using any of the methods below:

### 1. Direct Browser Launch
Simply double-click [`index.html`](android-club-website/index.html) or open it from your file explorer in any web browser.

### 2. Local Python Server (Recommended)
Open your terminal in the project directory:

```bash
# Navigate to the website directory
cd android-club-website

# Start local server (Python 3)
python -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

### 3. VS Code Live Server
1. Open the folder in **VS Code**.
2. Install the **Live Server** extension (`ritwickdey.LiveServer`).
3. Right-click `index.html` and choose **"Open with Live Server"**.

### 4. Node.js (via npx)
```bash
npx serve android-club-website
```

---

## 🎨 Customization Guide

### 1. Update Club Information & Text
Open [`android-club-website/index.html`](android-club-website/index.html):
- **Page Title & Metadata**: Update lines `6-7` with your club's name and mission.
- **Hero Headings**: Adjust the main headline and lead paragraph (lines `30-31`).
- **Milestones**: Modify the target numbers in the `data-count` attributes:
  ```html
  <li><strong data-count="150">0</strong> members</li>
  <li><strong data-count="20">0</strong> apps built</li>
  ```
- **Projects**: Replace cards in `#projects` with your members' apps, tech badges, and GitHub links.
- **Events**: Add your sessions in `#upcoming` and `#past` timelines.

### 2. Change Colors & Design Tokens
Open [`android-club-website/css/style.css`](android-club-website/css/style.css) and customize the `:root` variables:

```css
:root {
  --ink:    #10231C;   /* Main text & dark backgrounds */
  --paper:  #F3F7EF;   /* Clean light background */
  --card:   #FFFFFF;   /* Card surfaces */
  --green:  #3DDC84;   /* Android Accent Green */
  --deep:   #0B6B3A;   /* Primary dark green */
  --coral:  #FF6B4A;   /* Accent highlight & focus ring */
  --muted:  #4D6359;   /* Muted captions & secondary text */
  --line:   #D5E0D3;   /* Border lines */
  --radius: 18px;      /* Card and element rounding */
  --max:    1100px;    /* Container max-width */
}
```

### 3. Customize Code Simulator
Open [`android-club-website/js/main.js`](android-club-website/js/main.js) and update the `snippets` array (lines `16-19`) to display your preferred Kotlin or Jetpack Compose code:

```javascript
const snippets = [
  '<span class="c">// Main.kt</span>\n<span class="k">class</span> MainActivity : ComponentActivity() { ... }',
  '<span class="c">// UI.kt</span>\n@Composable\n<span class="k">fun</span> Greeting(name: String) { ... }'
];
```

### 4. Configure Contact Email
Update the receiving address in two places:
1. In [`index.html`](android-club-website/index.html) (line 140):
   ```html
   <a href="mailto:yourclub@yourcollege.edu">yourclub@yourcollege.edu</a>
   ```
2. In [`js/main.js`](android-club-website/js/main.js) (line 77):
   ```javascript
   window.location.href = 'mailto:yourclub@yourcollege.edu?subject=...';
   ```

---

## 🌐 Deployment

### Deploy to GitHub Pages (Free)
1. Push this repository to your GitHub account.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: Choose `/root` if `index.html` is at the root, or place `index.html` at repository root.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/` in under 2 minutes.

### Deploy to Netlify / Vercel
1. Log in to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Import your GitHub repository.
3. If `index.html` is in `android-club-website`, set the **Root Directory** to `android-club-website`.
4. Leave the build command and publish directory default.
5. Click **Deploy**.

---

## 📊 Performance & Compatibility

- **Browser Compatibility**: Tested across Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and mobile browsers.
- **Lighthouse Friendly**: High scores across Performance, Accessibility, Best Practices, and SEO.
- **Zero External JS Dependencies**: Zero vulnerability risks and instant load speeds.
- **Typography**: Uses modern web fonts loaded efficiently via Google Fonts CDN:
  - *Bricolage Grotesque* (Headings)
  - *DM Sans* (Body copy)

---

## 🤝 Contributing

We welcome contributions from club members and the open-source community!

1. Fork the repository.
2. Create your branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m 'Add NewFeature'`
4. Push to your branch: `git push origin feature/NewFeature`
5. Submit a **Pull Request**.

---

## 📜 License & Trademarks

- **Code & Design**: Licensed under the [MIT License](LICENSE).
- **Trademark Notice**: *Android is a registered trademark of Google LLC.* This project is an independent community template and is not affiliated with, sponsored by, or endorsed by Google LLC.

