let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color }); // this is setting a chrome storage value of color to a hex value that is green
  console.log('Default background color set to %cgreen', `color: ${color}`);
  console.log('This is another test for the console')
});