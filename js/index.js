'use strict';

chrome.action.onClicked.addListener((tab) => {
  console.log(tab)
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['./js/content.js']
  })
})

chrome.action.onLoaded.addListener((tab) => {
  alert(tab)
})
/*
if (chrome.action.location.href.includes('power-supply')){
  const parrafos = document.getElementsByClassName('psa-order-content-line')
  parrafos[5].innerHTML = '<button>Hola mundo</button>'
}*/