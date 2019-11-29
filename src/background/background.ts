// chrome.runtime.onInstalled.addListener(() => {
//     chrome.webNavigation.onCompleted.addListener(() => {
//         chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
//             chrome.pageAction.show(id);
//             console.log('done');
//         });
//     }, { url: [{ urlMatches: 'google.com' }] });
// });

// chrome.runtime.onInstalled.addListener(() => {

//     console.log('background works');
//     alert('background');

//     chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
//         console.log(req);
//         sendResponse('hello');
//     });
// });

// chrome.runtime.onConnect.addListener(port => {
//     if (port.name === 'port') {
//         port.onMessage.addListener(msg => {
//             port.postMessage('hello  from background');
//         });
//     }
// });

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    console.log(req);
    const data = { Key: 'name', Value: 1 };
    const b = JSON.stringify(data);
    chrome.storage.local.set({ Key: 'a', Value: 'b' }, () => { });
    sendResponse('hello');
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.pageAction.show(id);
        });
    }, { url: [{ urlMatches: 'google.com' }] });
});