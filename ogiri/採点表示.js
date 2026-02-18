let ss = SpreadsheetApp.openById("1motBqK3t874KSGT9erJBU4HChFW2OCd0-AfU15hU7JA");


function doGet() {
  // 「コード」という名前のHTMLファイルを読み込む
  const template = HtmlService.createTemplateFromFile('コード');
  const htmlOutput = template.evaluate();
  
  // スマホの画面幅に合わせるための重要な設定（viewport）
  htmlOutput
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('大喜利採点ボタン')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    
  return htmlOutput;
}

function saveData(result){
  register_sheet = ss.getSheetByName('シート1');
  register_sheet.appendRow(result)
  result=["","",""]
  return 
}
function saveCsv(result){
  register_sheet = ss.getSheetByName('シート2');
  register_sheet.getRange(register_sheet.getLastRow() + 1, 1, 2, 6).setValues(result)
  return 
}
function undoLastRow(){
  register_sheet = ss.getSheetByName('シート1');
  const lastRow = register_sheet.getLastRow();
  if (lastRow > 1) {
    register_sheet.deleteRow(lastRow);
  }
  return 
}