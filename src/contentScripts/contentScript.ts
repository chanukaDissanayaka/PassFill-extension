function isALoginPage(): any {
    const forms = document.getElementsByTagName('form');
    if (forms) {
        let loginPageFound = false;
        let loginForm;
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < forms.length; index++) {
            if (!loginPageFound) {
                const form = forms[index];
                const inputFields = form.getElementsByTagName('input');

                let textCount = 0;
                let passwordCount = 0;

                // tslint:disable-next-line: prefer-for-of
                for (let index = 0; index < inputFields.length; index++) {
                    const element = inputFields[index];
                    if (element.type === 'text') {
                        textCount++;
                    } else if (element.type === 'email') {
                        textCount++;
                    } else if (element.type === 'password') {
                        passwordCount++;
                    }
                }

                const msg = 'textCount : ' + textCount + ', passwordCount : ' + passwordCount;
                if (textCount === 1 && passwordCount === 1) {
                    loginPageFound = true;
                    loginForm = form;
                    alert('login page found');
                }
            }
        }

        return loginForm;
    }
    return null;
}

// const loginFrom = isALoginPage();
// if (loginFrom) {
//     const inputs = loginFrom.getElementsByTagName('input');
//     for (let index = 0; index < inputs.length; index++) {
//         const input = inputs[index];
//         input.text = 'aaaaa';
//     }
// }
