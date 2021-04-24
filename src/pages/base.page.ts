import { Logger } from 'log4js';

import { createLogger } from '../config';

export abstract class BasePage {

  protected readonly logger: Logger;

  protected constructor() {
    this.logger = createLogger(new.target.name);
  }

}