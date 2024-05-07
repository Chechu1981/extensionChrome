'use strict';

chrome.action.onClicked.addListener((tab) => {
  console.log(tab)
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['./js/content.js']
  })
})

chrome.tabs.onUpdated.addListener((tab) => {
  if (tab.url?.startsWith("https://power-supply.kbrw.fr")){
    chrome.scripting.executeScript({
      target: {tabId: tab},
      files: ['./js/content.js']
    })
  }
})