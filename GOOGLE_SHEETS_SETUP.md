# 📧 GOOGLE SHEETS NEWSLETTER SETUP

This guide explains how to connect your website's newsletter form to a Google Sheet so you can collect emails automatically for free.

---

## 🚀 STEP 1: CREATE THE GOOGLE SHEET

1. Go to [Google Sheets](https://sheets.google.com).
2. Create a **New Spreadsheet**.
3. Name it something like `Saya Newsletter Subscribers`.
4. In the first row, add these headers:
   *   **Column A1:** `Date`
   *   **Column B1:** `Email`

---

## 📜 STEP 2: ADD THE SCRIPT

1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. A new tab will open.
3. Delete any code currently in the `Code.gs` file.
4. **Copy and paste** the following code exactly:

```javascript
/**
 * Google Apps Script to handle Newsletter Subscriptions
 *
 * Instructions:
 * 1. Paste this code into the script editor.
 * 2. Click "Deploy" > "New deployment".
 * 3. Select type: "Web app".
 * 4. Description: "Newsletter API".
 * 5. Execute as: "Me" (your email).
 * 6. Who has access: "Anyone" (IMPORTANT!).
 * 7. Click "Deploy".
 * 8. Copy the "Web app URL" provided.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    var email = data.email;
    var timestamp = new Date();

    // Validate email
    if (!email || email.trim() === "") {
      return ContentService.createTextOutput(JSON.stringify({
        "status": "error",
        "message": "Email is missing"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Append to sheet (Date, Email)
    sheet.appendRow([timestamp, email]);

    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "message": "Email subscribed successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error",
      "message": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS (Cross-Origin Resource Sharing) for OPTIONS requests
function doOptions(e) {
  var output = ContentService.createTextOutput("");
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}
```

5. Click the **Save** icon (disk) or press `Ctrl + S` (Cmd + S).

---

## ☁️ STEP 3: DEPLOY AS WEB APP

1. Click the blue **Deploy** button (top right).
2. Select **New deployment**.
3. Click the gear icon (⚙️) next to "Select type" and choose **Web app**.
4. Fill in these fields:
   *   **Description:** `Newsletter`
   *   **Execute as:** `Me` (your email) — *Leave this as default*
   *   **Who has access:** **Anyone** — *THIS IS CRITICAL! If you select "Myself" or "Google Account", it will not work.*
5. Click **Deploy**.
6. You might be asked to **Authorize access**.
   *   Click "Review permissions".
   *   Select your Google account.
   *   If you see "Google hasn't verified this app", click **Advanced** > **Go to (Script Name) (unsafe)**.
   *   Click **Allow**.
7. **COPY THE WEB APP URL.** It looks like:
   `https://script.google.com/macros/s/AKfycbx.../exec`

---

## 🔗 STEP 4: CONNECT TO WEBSITE

1. Open your `index.html` file on your computer (or GitHub).
2. Look for the line near the top of the script section:
   ```javascript
   const GOOGLE_SCRIPT_URL = "";
   ```
3. Paste your URL inside the quotes:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```
4. Save the file and upload/commit to GitHub.

---

## ✅ STEP 5: TEST IT

1. Open your website.
2. Go to the footer.
3. Enter an email and click Subscribe.
4. Check your Google Sheet — the email should appear instantly!
