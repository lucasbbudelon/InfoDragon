import { by, element } from 'protractor';

export class BackEndFeedBack {
    public loading = element(by.css('.loading'));
    public successMessage = element(by.css('.success-message'));
    public errorMessage = element(by.css('.error-message'));
}
