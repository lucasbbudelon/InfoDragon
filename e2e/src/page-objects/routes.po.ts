import { browser } from 'protractor';

export class Routes {
    navigateToHome() {
        return browser.get('/');
    }

    navigateToLogin() {
        return browser.get('/login');
    }
}
