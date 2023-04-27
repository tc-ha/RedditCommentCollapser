chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    if (
      tab.url.match(
        /^https?:\/\/(www\.)?reddit\.com\/r\/\w+\/comments\/\w+\/\w+\/?$/
      )
    ) {
      chrome.tabs.update(tabId, { url: tab.url + "?depth=1" });
    }
  }
});
