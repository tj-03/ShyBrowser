// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

async function getTabs(){
  let queryOptions = {};
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs;
}

async function removeTab(){
  let tabs = await getTabs();
  console.log(tabs.length);
  chrome.tabs.remove(tabs[tabs.length-2].id);
  
}

chrome.runtime.openOptionsPage(()=>{})
chrome.runtime.onMessage.addListener(async function(msg,sender,callback){
    await removeTab();
});


