
# Oxyma Menu

**Oxyma Menu** is a lightweight, mobile-first, fully accessible off-canvas menu component written in pure JavaScript and CSS — no dependencies. Designed to integrate seamlessly with any static HTML or CMS environment, or integrate in CMS like Wordpress or others. There is also a plugin version developed specifically for Wordpress. (oxy-mb-menu)

---

## :star: Features

- Off-canvas navigation menu (left, right or centered)
- Multi-level submenus (infinitely nested)
- Click-to-toggle dropdowns
- Animated hamburger → X toggle icon
- Dark mode auto support (via `prefers-color-scheme`)
- Touch swipe to close
- Overlay background with dismiss on click
- Fully accessible with `aria-*` attributes
- Heroicons SVG ready (or any icon set)
- Lightweight, dependency-free

---

## :wrench: Installation

1. Clone the repository or download ZIP
2. Place the files in your project folder:

```

your-site/
├── index.html
└── assets/
    └──css/
       └── oxyma-style.css
    └─── js/
       └── oxyma.js

````

3. Link the CSS and JS in your `<head>` and before `</body>`:

```html
<link rel="stylesheet" href="assets/css/oxyma-style.css">
...
<script src="assets/js/oxyma.js"></script>
````

---

## Usage

Wrap your menu inside the `.oxyma-menu-wrapper`, and provide a toggle button (`#oxyma-menu-toggle`) and a nav menu (`#oxyma-menu`):

```html
<div class="oxyma-menu-wrapper oxyma-align-left position-left" data-position="left">
  <nav id="oxyma-menu" class="oxyma-canvas-menu" aria-hidden="true" role="navigation">
    <ul>
      <li><a href="#">Home</a></li>
      <li>
        <a href="#">Services <svg class="caret">...</svg></a>
        <ul>
          <li><a href="#">Web</a></li>
          <li><a href="#">Mobile</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div class="oxyma-menu-overlay" tabindex="-1"></div>
  <div id="oxyma-menu-toggle" class="oxyma-hamburger" aria-controls="oxyma-menu" aria-expanded="false" role="button" tabindex="0">
    <span></span><span></span><span></span>
  </div>
</div>
```

---

## :gear: Options

| Attribute              | Description                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| `data-position="left"` | Set the menu slide direction: `left`, `right`, or `center`                                               |
| `.oxyma-align-left`    | Align menu items to the left (default). Use `.oxyma-align-center` or `.oxyma-align-between` for variants |
| `dark-mode-auto`       | Add to `<body>` or wrapper to enable automatic dark mode                                                 |

---

## :link: Live Demo

:point_right: **[Click 4 Demo](https://mbrughi.github.io/oxyma-menu)**

---

## :electric_plug: WordPress Plugin

* Can be integrated via shortcode
* Works seamlessly with Oxygen Builder or any theme
* Supports `wp_nav_menu()` with fallback

#### :link: Wordpress download

:point_right: **[https://](https://)**

---


## :page_facing_up: License

This project is licensed under the MIT License. You are free to use, modify, and distribute.

---


