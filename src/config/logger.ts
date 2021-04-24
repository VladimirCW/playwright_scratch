import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    console: {
      type: 'stdout', layout:
          {
            type: 'pattern',
            pattern: '%[[%d] [%5p] %c %]- %m'
          }
    }
  },
  categories: {
    default: { appenders: ['console'], level: process.env.LOG_LEVEL || 'all' }
  }
});

export const createLogger = (name: string): log4js.Logger => {
  return log4js.getLogger(`[${name.padStart(35, '-')}]`);
};