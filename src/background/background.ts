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

    if (req.action === 'loginCheck') {
        chrome.storage.local.get('user', (data) => {
            if (data.user) {
                sendResponse(true);
            } else {
                sendResponse(false);
            }
        });
        return true;
    }
    return false;

});





// chrome.tabs.onCreated.addListener((tab) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         // chrome.tabs.executeScript(tabs[0].id, {
//         //     code: 'document.body.style.backgroundColor = "yellow";'
//         // });
//         tabs.forEach(tab => {
//             alert(tab.url);
//         });
//     });
// });



