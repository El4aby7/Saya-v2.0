# Saya Natural Beauty Website

This is a **Multi-Page Application (MPA)** for Saya Natural Beauty, built with React (via CDN) and Tailwind CSS. It uses separate HTML files for each page while maintaining a component-based structure.

## 📁 Project Structure

*   **`index.html`**: Home page.
*   **`shop.html`**: Products catalog page.
*   **`about.html`**: Brand story page.
*   **`reviews.html`**: Customer reviews page.
*   **`contact.html`**: Contact form page.
*   **`product-detail.html`**: Template for viewing a single product (uses `?id=...`).
*   **`products.json`**: Data source for products and reviews.
*   **`assets/`**:
    *   **`images/`**: Contains all product and hero images.
    *   **`css/`**: Custom styles (`styles.css`).
    *   **`js/`**:
        *   `utils.js`: Shared React imports and data loading logic.
        *   `tailwind-config.js`: Tailwind CSS configuration.
        *   `components/`: Shared components like `Navigation` and `Footer`.
        *   `pages/`: Logic for each specific page (`home.js`, `shop.js`, etc.).

## 🚀 How to Run

Since this project uses ES Modules (`type="module"`), you cannot run it directly by opening the HTML files in a browser from your file system (due to CORS policies).

**You must serve it using a local web server.**

### Option 1: VS Code Live Server
1.  Install the "Live Server" extension in VS Code.
2.  Right-click `index.html`.
3.  Select "Open with Live Server".

### Option 2: Python
Run this command in the project folder:
```bash
python3 -m http.server
```
Then open `http://localhost:8000`.

## 🛠️ How to Edit

### Changing Text
*   **Page Content**: Edit the corresponding JavaScript file in `assets/js/pages/`.
    *   Home: `assets/js/pages/home.js`
    *   About: `assets/js/pages/about.js`
    *   Contact: `assets/js/pages/contact.js`
*   **Navigation/Footer**: Edit `assets/js/components/Navigation.js` or `Footer.js`.

### Managing Products
Edit `products.json`.
*   **Add a Product**: Copy an existing product block and paste it into the list. Ensure the `id` is unique.
*   **Edit Details**: Change price, description, etc. directly in the JSON.
*   **Images**:
    1.  Add your image file to `assets/images/products/`.
    2.  Update the `image` field in `products.json` to match the path (e.g., `assets/images/products/my-new-soap.jpg`).

### Changing Images
*   **Product Images**: See above.
*   **Hero Image**: Replace `assets/images/hero.jpg` with your new image (keep the same name) OR update `assets/js/pages/home.js` to point to a new filename.

## 🎨 Styling
*   **Tailwind Config**: Edit `assets/js/tailwind-config.js` to change colors, fonts, or theme settings.
*   **Custom CSS**: Edit `assets/css/styles.css`.
