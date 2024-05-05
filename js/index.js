'use strict';

chrome.action.onClicked.addListener((tab) => {
  console.log(tab)
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['./js/content.js']
  })
})