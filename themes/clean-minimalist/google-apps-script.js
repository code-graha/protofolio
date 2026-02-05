/**
 * Google Apps Script for Portfolio Contact Form
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to Google Sheets: https://sheets.google.com
 * 2. Create a new blank spreadsheet
 * 3. Go to Extensions > Apps Script
 * 4. Delete any existing code and paste this entire script
 * 5. Save the project (Ctrl+S)
 * 6. Run the "setupSheet" function first (select it from dropdown and click Run)
 * 7. Click "Deploy" > "New deployment"
 * 8. Select type: "Web app"
 * 9. Set: Execute as "Me", Who has access "Anyone"
 * 10. Click "Deploy" and authorize when prompted
 * 11. Copy the Web App URL to your portfolio-data.json as "googleScriptURL"
 */

var SHEET_NAME = 'Sheet1';
var NOTIFICATION_EMAIL = 'siddharth.mhjn99@gmail.com';
var SEND_EMAIL_NOTIFICATIONS = true;

/**
 * Handles POST requests from the contact form
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (!data.name || !data.email || !data.message) {
      return createResponse('error', 'Missing required fields');
    }

    if (!isValidEmail(data.email)) {
      return createResponse('error', 'Invalid email format');
    }

    var sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      message: sanitizeInput(data.message)
    };

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getActiveSheet();

    var timestamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MMM yyyy, hh:mm:ss a');

    sheet.appendRow([
      timestamp,
      sanitizedData.name,
      sanitizedData.email,
      sanitizedData.message
    ]);

    if (SEND_EMAIL_NOTIFICATIONS && NOTIFICATION_EMAIL) {
      sendEmailNotification(sanitizedData, timestamp);
    }

    return createResponse('success', 'Message received successfully');

  } catch (error) {
    console.error('Error:', error);
    return createResponse('error', 'Server error occurred');
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return createResponse('success', 'Contact form API is running. Use POST to submit data.');
}

/**
 * Creates a JSON response
 */
function createResponse(status, message) {
  var response = {
    status: status,
    message: message
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Validates email format
 */
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes input to prevent injection attacks
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';

  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .substring(0, 5000);
}

/**
 * Sends email notification for new form submissions
 */
function sendEmailNotification(data, timestamp) {
  try {
    var subject = 'New Portfolio Contact: ' + data.name;

    var htmlBody =
      '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
        '<h2 style="color: #040C3B; border-bottom: 2px solid #6CCFF6; padding-bottom: 10px;">' +
          'New Contact Form Submission' +
        '</h2>' +
        '<table style="width: 100%; border-collapse: collapse; margin-top: 20px;">' +
          '<tr>' +
            '<td style="padding: 10px; background-color: #f5f5f5; font-weight: bold; width: 120px;">Timestamp</td>' +
            '<td style="padding: 10px; background-color: #fafafa;">' + timestamp + '</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Name</td>' +
            '<td style="padding: 10px; background-color: #fafafa;">' + data.name + '</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Email</td>' +
            '<td style="padding: 10px; background-color: #fafafa;">' +
              '<a href="mailto:' + data.email + '" style="color: #040C3B;">' + data.email + '</a>' +
            '</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="padding: 10px; background-color: #f5f5f5; font-weight: bold; vertical-align: top;">Message</td>' +
            '<td style="padding: 10px; background-color: #fafafa; white-space: pre-wrap;">' + data.message + '</td>' +
          '</tr>' +
        '</table>' +
        '<div style="margin-top: 30px; padding: 15px; background-color: #040C3B; color: white; border-radius: 8px;">' +
          '<p style="margin: 0;">' +
            '<strong>Quick Reply:</strong> ' +
            '<a href="mailto:' + data.email + '?subject=Re: Your message on my portfolio" style="color: #6CCFF6; text-decoration: none;">' +
              'Click here to reply to ' + data.name +
            '</a>' +
          '</p>' +
        '</div>' +
        '<p style="margin-top: 20px; color: #666; font-size: 12px;">' +
          'This email was sent from your portfolio contact form.' +
        '</p>' +
      '</div>';

    var plainBody =
      'New Contact Form Submission\n' +
      '===========================\n\n' +
      'Timestamp: ' + timestamp + '\n' +
      'Name: ' + data.name + '\n' +
      'Email: ' + data.email + '\n\n' +
      'Message:\n' + data.message + '\n\n' +
      '---\n' +
      'Reply to: ' + data.email;

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody
    });

  } catch (error) {
    console.error('Error sending email:', error);
  }
}

/**
 * Test function - run this to verify the script works
 */
function testFormSubmission() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message from the portfolio contact form.'
      })
    }
  };

  var response = doPost(testData);
  console.log('Test response:', response.getContent());
}

/**
 * Initial setup function - run this once to set up the sheet headers
 */
function setupSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getActiveSheet();

  var firstRow = sheet.getRange(1, 1, 1, 4).getValues()[0];
  if (firstRow[0] === 'Timestamp') {
    console.log('Headers already set up.');
    return;
  }

  var headers = [['Timestamp', 'Name', 'Email', 'Message']];
  sheet.getRange(1, 1, 1, 4).setValues(headers);

  var headerRange = sheet.getRange(1, 1, 1, 4);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#040C3B');
  headerRange.setFontColor('#FFFFFF');

  sheet.setColumnWidth(1, 180);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 200);
  sheet.setColumnWidth(4, 400);

  sheet.setFrozenRows(1);

  console.log('Sheet setup complete!');
}
