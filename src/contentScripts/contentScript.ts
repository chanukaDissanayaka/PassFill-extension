function inspectForm(form: HTMLFormElement) {
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
        return true;
    } else {
        return false;
    }
}

function isALoginPage(): any {
    const forms = document.getElementsByTagName('form');
    if (forms) {
        let loginPageFound = false;

        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < forms.length; index++) {
            if (!loginPageFound) {
                const form = forms[index];
                loginPageFound = inspectForm(form);
            }
        }
        return loginPageFound;

    } else {
        return false;
    }
}



function fillForm(username: string, password: string) {
    const forms = document.getElementsByTagName('form');
    if (forms) {
        let loginPageFound = false;
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < forms.length; index++) {
            if (!loginPageFound) {
                const form = forms[index];
                loginPageFound = inspectForm(form);
                alert('found');

                if (loginPageFound) {
                    const fields = form.getElementsByTagName('input');

                    // tslint:disable-next-line: prefer-for-of
                    for (let item = 0; item < fields.length; item++) {
                        const element = fields[item];
                        if (element.type === 'text' || element.type === 'email') {
                            console.log('email');
                            element.value = username;
                        } else if (element.type === 'password') {
                            console.log('pass');
                            element.value = password;
                        }
                    }
                }
            }
        }
    }
}

const containsLogin = isALoginPage();
alert(containsLogin);
if (containsLogin) {
    fillForm('username', 'password');
}

