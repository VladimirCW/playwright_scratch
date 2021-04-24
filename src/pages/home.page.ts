import { BasePage } from './base.page';

export class HomePage extends BasePage {

  constructor() {
    super();
  }

  open(): HomePage {
    this.logger.info("open");
    return this;
  }

  close(): HomePage {
    this.logger.info("close");
    return this;
  }

  signOut(): HomePage {
    this.logger.info(`Click "SignOut"`);
    return this;
  }
}