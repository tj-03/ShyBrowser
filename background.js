// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

async function getTabs(){
  let queryOptions = {};
  let [currentTab] = await chrome.tabs.query({active:true,currentWindow:true});

  let tabs = await chrome.tabs.query(queryOptions);

 
  return tabs;
}

async function removeTab(){
  let tabs = await getTabs();
  console.log(tabs.length);

  chrome.tabs.remove(tabs[Math.floor(Math.random()*tabs.length)].id);
  
}

chrome.runtime.openOptionsPage(()=>{})

chrome.runtime.onMessage.addListener(async function(msg,sender,callback){
    await removeTab();
});

chrome.runtime.onConnect.addListener(function(port) {
  if (port.name === "options") {
      port.onDisconnect.addListener(function() {
        chrome.runtime.openOptionsPage(()=>{})
      });
  }
});


