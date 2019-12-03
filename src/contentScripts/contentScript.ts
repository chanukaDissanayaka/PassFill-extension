function checkEmail() {
    const element = document.getElementById('email');
    if (element) {
        alert('email');
    } else {
        alert('no mail');
    }
}

chrome.webNavigation.onCompleted.addListener(() => {
    checkEmail();
});