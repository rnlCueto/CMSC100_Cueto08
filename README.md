# CMSC100_Cueto08

# Exercise 08: React JS Part 1 (Components)
- Raven Nathalie L. Cueto
- BS Computer Science
- October 12, 2026

## Code Description
- The homepage of "Lazado", a Barbie-themed online store, built with React (Vite).
- The page is separated into reusable components, all inside `src/components/`:
    - `StoreHeader.jsx` (top bar: logo, store name, and the navigation panel),
    - `NavButton.jsx` (one navigation button, reused for every button),
    - `ProductList.jsx` (the page body: all the product cards), and
    - `ProductCard.jsx` (one product with its picture, name, and an Add to cart button).
- `App.jsx` holds the data (`navigationButtons` and `products`) and passes it down to the components through props.
- `App.css` holds the styling. No stylesheet framework is used.
- The page layout follows the recommended interface of the exercise:
    - a header with the store name on the left and the navigation buttons on the right, and
    - a body with the product cards side by side.
    - Both the header and the body use flexbox.

### Page Behavior
- The navigation panel has four buttons (Appliances, Groceries, Gadgets, Clothing). They are created from the `navigationButtons` array using `.map()`, one `NavButton` for each item. They only link to `#`, since the other pages are not part of the exercise.
- The body shows eight product cards. They are created from the `products` array using `.map()`, one `ProductCard` for each item.
- Every item created with `.map()` has a unique `key` (its `id`).
- Clicking Add to cart on a product card (`addToCart` in `ProductCard.jsx`):
    - saves the product name in the `cartItems` array,
    - prints `Added <product name> to the cart!` in the browser console, and
    - shows an alert saying the product has been added and to check the console.
- The header and the navigation buttons wrap to the next line when the screen is too narrow (`flex-wrap`).

### Build for GitHub Pages (`docs/`)
- GitHub Pages can only host built files and cannot run the React development server.
- `vite.config.js` sets `base: './'` (so the links in the built page are relative) and `build.outDir: 'docs'` (so the finished site is placed in `docs/`).
- `npm run build` generates `docs/`. It is not edited by hand and must be rebuilt after every change.
- Live page: `https://rnlCueto.github.io/CMSC100_Cueto08/`

## Project Structure
```
CMSC100_Cueto08/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── src/
   ├── main.jsx
   ├── App.jsx
   ├── App.css
   ├── images/
   └── components/
        ├── StoreHeader.jsx
        ├── NavButton.jsx
        ├── ProductList.jsx
        └── ProductCard.jsx
└── docs/                (built site, served by GitHub Pages)
```

## How to use
### Case 1: Run locally with the Vite development server
1. Install dependencies (only needed once):
```bash
   npm install
```
2. Start the development server:
```bash
   npm run dev
```
   - Wait for the `Local: http://localhost:5173/` message.
3. Open `http://localhost:5173/` in a browser.
4. Open the browser console (F12 > Console).
5. Click Add to cart on any product card. An alert appears, and after closing it, the message `Added <product name> to the cart!` is shown in the console.
6. To rebuild the site for GitHub Pages:
```bash
   npm run build
```

### Case 2: Open the GitHub Pages version
1. Go to `https://rnlCueto.github.io/CMSC100_Cueto08/`.
2. Use the page the same way as steps 4 and 5 above (no server needed).

## Dependencies
- `react` and `react-dom` — build