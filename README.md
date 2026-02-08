# Saya Natural Beauty Website

This is a **Multi-Page Application (MPA)** for Saya Natural Beauty, built with React (via CDN) and Tailwind CSS. It supports **English** and **Arabic** languages with full RTL support.

## 📁 Project Structure

*   **`index.html`**, **`shop.html`**, etc.: Entry point HTML files for each page.
*   **`products.json`**: Data source for products and reviews (contains both English and Arabic content).
*   **`assets/`**:
    *   **`images/`**: Product and site images.
    *   **`css/`**: Custom styles (`styles.css`).
    *   **`js/`**:
        *   `translations.js`: Dictionary for static UI text (Buttons, Headers, Menus).
        *   `LanguageContext.js`: Manages language state (`en`/`ar`) and direction (`ltr`/`rtl`).
        *   `utils.js`: Shared helpers (Currency formatting, Data loading).
        *   `components/`: Shared components (`Navigation`, `Footer`, `Layout`).
        *   `pages/`: Page-specific logic (`home.js`, `shop.js`, etc.).

## 🛠️ How to Edit

### 1. Changing Text (Translations)
The site handles two types of text: **Static** (UI elements) and **Dynamic** (Products/Reviews).

#### Static Text (Buttons, Menus, Headers)
*   Open **`assets/js/translations.js`**.
*   This file contains a dictionary with `en` and `ar` keys.
*   Example:
    ```javascript
    export const translations = {
        en: {
            nav: { home: "Home", shop: "Shop" }
        },
        ar: {
            nav: { home: "الرئيسية", shop: "تسوق" }
        }
    };
    ```
*   To edit, simply change the text inside the quotes.

#### Dynamic Data (Products & Reviews)
*   Open **`products.json`**.
*   Each item has base fields (English) and `_ar` fields (Arabic).
*   **Example**:
    ```json
    {
      "id": 1,
      "name": "Lavender Soap",
      "name_ar": "صابون اللافندر",
      "description": "Soothing...",
      "description_ar": "مهدئ...",
      "price": 35
    }
    ```
*   **To Add a Product**: Copy a block, paste it, and fill in both English and `_ar` fields.
*   **Currency**: The currency symbol (L.E / ج.م) is applied automatically based on the selected language.
*   **Language Toggle**: A button ('AR' / 'EN') is available in the top navigation bar (next to the dark mode toggle) to switch between English and Arabic.

### 2. Changing Images
*   **Product Images**:
    1.  Place the new image in `assets/images/products/`.
    2.  Update the `image` path in `products.json`.
*   **Hero/Static Images**:
    1.  Place the image in `assets/images/`.
    2.  Update the reference in the relevant page file (e.g., `assets/js/pages/home.js`).

### 3. Styling
*   **Tailwind Config**: `assets/js/tailwind-config.js` (Colors, Fonts).
*   **Custom CSS**: `assets/css/styles.css`.
