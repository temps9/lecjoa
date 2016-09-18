/*
Open a new tab, and load "lecjo.html" into it.
*/
function lecjob() {
  console.log("injecting");
   chrome.tabs.create({
     "url": chrome.extension.getURL("lecjo.html")
   });
}


/*
Add lecjob() as a listener to clicks on the browser action.
*/
chrome.browserAction.onClicked.addListener(lecjob);
 
