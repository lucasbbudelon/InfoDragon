import { by, element } from 'protractor';

export class HomePage {
    public title = element(by.css('#page-title h1'));
}
