import { BasePage } from './base.page';

export class LoginPage extends BasePage {

  constructor() {
    super();
  }

  open(): LoginPage {
    this.logger.info('open');
    return this;
  }

  setUserName(user: string): LoginPage {
    this.logger.info(`Set username "${user}"`);
    return this;
  }

  setPassword(passw: string): LoginPage {
    this.logger.info(`Set password "******"`);
    return this;
  }

  signIn(): LoginPage {
    this.logger.info(`Click "SignIn"`);
    return this;
  }
}