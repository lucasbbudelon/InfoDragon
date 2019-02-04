import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }
}
