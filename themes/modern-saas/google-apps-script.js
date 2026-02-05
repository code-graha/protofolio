/**
 * Google Apps Script for Portfolio Contact Form
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to Google Sheets (https://sheets.google.com) and create a new spreadsheet
 * 2. Name it "Portfolio Contact Form" (or any name you prefer)
 * 3. Add headers in Row 1: Timestamp | Name | Email | Subject | Message
 * 4. Go to Extensions > Apps Script
 * 5. Delete any existing code and paste this entire script
 * 6. Click "Deploy" > "New deployment"
 * 7. Select type: "Web app"
 * 8. Set "Execute as": "Me"
 * 9. Set "Who has access": "Anyone"
 * 10. Click "Deploy"
 * 11. Copy the Web App URL
 * 12. Paste the URL in your portfolio-data.json file under "googleScriptURL"
 *
 * IMPORTANT: After making changes, you must create a NEW deployment for changes to take effect.
 */

// Configuration - Update this with your Google Sheet ID
// You can find the Sheet ID in the URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your actual Sheet ID
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

/**
 * Handles POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // If headers don't exist, add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
    }

    // Append the new row with form data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Portfolio Contact Form API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: Send email notification when form is submitted
 * Uncomment and configure if you want email notifications
 */
/*
function sendEmailNotification(data) {
  const recipient = 'your.email@example.com'; // Your email
  const subject = `New Contact Form Submission from ${data.name}`;
  const body = `
    New contact form submission:

    Name: ${data.name}
    Email: ${data.email}
    Subject: ${data.subject}

    Message:
    ${data.message}

    Submitted at: ${data.timestamp}
  `;

  MailApp.sendEmail(recipient, subject, body);
}
*/
