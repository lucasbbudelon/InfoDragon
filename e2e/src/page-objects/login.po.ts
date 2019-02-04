import { by, element } from 'protractor';

export class Login {
    public userField = element(by.css('input#user'));
    public passwordField = element(by.css('input#password'));
    public buttonEnter = element(by.css('button'));
}
