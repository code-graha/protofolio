/**
 * Google Apps Script for Portfolio Contact Form
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Create a new Google Sheet with the following column headers in Row 1:
 *    A: Timestamp | B: First Name | C: Last Name | D: Email | E: Project Type | F: Budget Range | G: Message
 *
 * 2. Go to Extensions > Apps Script
 *
 * 3. Delete all existing code and paste this entire script
 *
 * 4. Click "Deploy" > "New deployment"
 *
 * 5. Select type: "Web app"
 *    - Description: "Portfolio Contact Form"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *
 * 6. Click "Deploy" and authorize the app when prompted
 *
 * 7. Copy the Web App URL and paste it in your portfolio-data.json file
 *    under contact.googleScriptURL
 *
 * 8. Test the form on your website!
 */

// Configuration
const SHEET_NAME = 'Sheet1'; // Change this if your sheet has a different name

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      return createResponse(false, 'Sheet not found');
    }

    // Format timestamp
    const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    const formattedTimestamp = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

    // Append the data to the sheet
    sheet.appendRow([
      formattedTimestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.projectType || '',
      data.budgetRange || '',
      data.message || ''
    ]);

    // Optional: Send email notification
    // Uncomment the line below and replace with your email to receive notifications
    // sendEmailNotification(data);

    return createResponse(true, 'Form submitted successfully');

  } catch (error) {
    console.error('Error processing form submission:', error);
    return createResponse(false, error.toString());
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return createResponse(true, 'Portfolio Contact Form API is running!');
}

/**
 * Create a JSON response
 */
function createResponse(success, message) {
  return ContentService
    .createTextOutput(JSON.stringify({ success: success, message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: Send email notification when form is submitted
 * Uncomment the sendEmailNotification call in doPost to enable this
 */
function sendEmailNotification(data) {
  const recipientEmail = 'siddharth.mhjn99@gmail.com'; // Change to your email
  const subject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;

  const body = `
New contact form submission received!

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Project Type: ${data.projectType}
Budget Range: ${data.budgetRange}

Message:
${data.message}

---
Submitted at: ${data.timestamp}
  `;

  MailApp.sendEmail(recipientEmail, subject, body);
}

/**
 * Test function - Run this to verify your setup
 */
function testSetup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  if (sheet) {
    console.log('Sheet found: ' + SHEET_NAME);
    console.log('Number of rows: ' + sheet.getLastRow());
    console.log('Setup looks good!');
  } else {
    console.log('ERROR: Sheet "' + SHEET_NAME + '" not found. Please check your sheet name.');
  }
}
