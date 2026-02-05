/**
 * Google Apps Script for Portfolio Contact Form
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Sheets (https://sheets.google.com) and create a new spreadsheet
 * 2. Name it "Portfolio Contact Form" (or any name you prefer)
 * 3. Add these headers in Row 1: Timestamp | Name | Email | Message
 * 4. Go to Extensions > Apps Script
 * 5. Delete any existing code and paste this entire file
 * 6. Save the project (Ctrl+S or Cmd+S)
 * 7. Click Deploy > New deployment
 * 8. Select "Web app" as the type
 * 9. Set "Execute as" to "Me"
 * 10. Set "Who has access" to "Anyone"
 * 11. Click Deploy and authorize when prompted
 * 12. Copy the Web App URL and paste it into your portfolio-data.json "scriptURL" field
 */

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return createResponse('error', 'Missing required fields');
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return createResponse('error', 'Invalid email format');
    }

    // Sanitize input data
    const sanitizedName = sanitizeInput(data.name);
    const sanitizedEmail = sanitizeInput(data.email);
    const sanitizedMessage = sanitizeInput(data.message);

    // Append the data to the spreadsheet
    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Timestamp in IST
      sanitizedName,
      sanitizedEmail,
      sanitizedMessage
    ]);

    // Optional: Send email notification
    // Uncomment the line below and replace with your email to receive notifications
    // sendEmailNotification(sanitizedName, sanitizedEmail, sanitizedMessage);

    return createResponse('success', 'Message received successfully');

  } catch (error) {
    console.error('Error processing request:', error);
    return createResponse('error', 'Failed to process request: ' + error.toString());
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return createResponse('success', 'Contact form API is running');
}

/**
 * Create a JSON response
 */
function createResponse(status, message) {
  const response = {
    status: status,
    message: message,
    timestamp: new Date().toISOString()
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize input to prevent injection
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .substring(0, 1000) // Limit length
    .replace(/[<>]/g, ''); // Remove potential HTML tags
}

/**
 * Optional: Send email notification when form is submitted
 * Uncomment the sendEmailNotification call in doPost to enable this
 */
function sendEmailNotification(name, email, message) {
  const recipientEmail = 'siddharth.mhjn99@gmail.com'; // Your email
  const subject = 'New Portfolio Contact Form Submission';
  const body = `
New contact form submission received:

Name: ${name}
Email: ${email}
Message: ${message}

Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

---
This is an automated notification from your portfolio website.
  `;

  try {
    MailApp.sendEmail(recipientEmail, subject, body);
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
}

/**
 * Test function - Run this to verify the script works
 */
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message'
      })
    }
  };

  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}
