browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.update({ url: "https://www.google.com" });
});
