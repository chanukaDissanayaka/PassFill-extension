chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onCompleted.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
            chrome.pageAction.show(id);
            console.log('done');
        });
    }, { url: [{ urlMatches: 'google.com' }] });
});

console.log('background works');
alert('background');