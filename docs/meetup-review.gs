// Paste into the spreadsheet's Extensions > Apps Script editor.
// Set MEETUP_REVIEW_SECRET in Project Settings > Script properties.
const SPREADSHEET_ID = '17DnT_WuBJDakxwesOWM_Q7LK5WEbGBTtWYyumux2Yxg';
function doPost(e) {
  const json = value => ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
  const lock = LockService.getScriptLock();
  try {
    if (!e || !e.postData || e.postData.contents.length > 14000) return json({ok:false});
    const p = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty('MEETUP_REVIEW_SECRET');
    if (!secret || secret.length < 32 || p.secret !== secret) return json({ok:false});
    if (typeof p.submissionId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(p.submissionId) ||
      typeof p.eventDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(p.eventDate) ||
      !Number.isInteger(p.rating) || p.rating < 1 || p.rating > 5 ||
      typeof p.nickname !== 'string' || p.nickname.length > 40 ||
      typeof p.review !== 'string' || !p.review.trim() || p.review.length > 1000 || p.consent !== true || p.website !== '') return json({ok:false});
    if (!lock.tryLock(10000)) return json({ok:false});
    const book = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = book.getSheetByName('Reviews');
    if (!sheet) sheet = book.insertSheet('Reviews');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Submission ID','Submitted at (UTC)','Event date','Rating','Nickname','Review','Storage consent']);
      sheet.setFrozenRows(1);
    }
    // Retry the same submission safely if a response is lost after saving.
    if (sheet.getLastRow() > 1 && sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(p.submissionId).matchEntireCell(true).findNext()) return json({ok:true});
    const text = value => /^[\s]*[=+@-]/.test(value) ? "'" + value : value;
    sheet.appendRow([p.submissionId,new Date().toISOString(),p.eventDate,p.rating,text(p.nickname.trim()),text(p.review.trim()),'Yes']);
    SpreadsheetApp.flush();
    return json({ok:true});
  } catch (_) { return json({ok:false}); }
  finally { if (lock.hasLock()) lock.releaseLock(); }
}
