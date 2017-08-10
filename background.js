/*Pamela Munghen 2017*/

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('breathe.html'), 'selected': true});
});