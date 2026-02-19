// Google Apps Script - Paste this in your Google Sheet
// Extensions → Apps Script

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get current timestamp in IST
    var timestamp = new Date();
    var istTime = Utilities.formatDate(timestamp, "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Mobile Number', 'Status']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold').setBackground('#4CAF50').setFontColor('#FFFFFF');
    }
    
    // Append the data
    sheet.appendRow([
      istTime,
      data.name || '',
      data.phone || '',
      'New'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function test() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: "Test User",
        phone: "9876543210"
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
