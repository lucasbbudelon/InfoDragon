import { BackEndFeedBack, DragonList, HomePage, Login, Routes } from './page-objects/_index';

describe('workspace-project App', () => {
  let backEndFeedBack: BackEndFeedBack;
  let dragonList: DragonList;
  let login: Login;
  let routes: Routes;

  beforeEach(() => {
    backEndFeedBack = new BackEndFeedBack();
    dragonList = new DragonList();
    login = new Login();
    routes = new Routes();
  });

  it('e2e login valid', () => {

    routes.navigateToHome();

    login.userField.sendKeys('lucas');
    login.passwordField.sendKeys('123456');
    login.buttonEnter.click();

    expect(backEndFeedBack.successMessage).toBeTruthy();
    expect(dragonList.list).toBeTruthy();
  });

  it('e2e login invalid', () => {

    routes.navigateToLogin();

    login.userField.sendKeys('lucas');
    login.passwordField.sendKeys('0000');
    login.buttonEnter.click();

    expect(backEndFeedBack.errorMessage).toBeTruthy();
  });
});
