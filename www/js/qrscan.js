$(function() {
  
  // event of scan
  $("#ScanButton").click(function() {
    scanBarcode();
    return false;
  });
  
  // event to open browser
  $("#BrowserOpenButton").click(function() {
    // 
    monaca.invokeBrowser($("#ResultMessage").text());
    return false;
  });
 
});
 
// excute function when click scan
function scanBarcode() {
  // BarcodeScanner
  window.plugins.barcodeScanner.scan(
    // success
    function(result) {
      // do nothing if cancelled
      if (result.cancelled) {
        return;
      }
      
      // show the text
      $("#ResultMessage").text(result.text);
      
      //  show button of " open browser" if results is URL
      if (result.text.indexOf("http") === 0) {
        $("#BrowserOpenButton").show();
      } else {
        $("#BrowserOpenButton").hide();
      }
    },
    // error
    function(error) {
      $("#ResultMessage").text(error);
    }
  );
};