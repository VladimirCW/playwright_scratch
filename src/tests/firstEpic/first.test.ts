import { createLogger } from '../../config';
import { HomePage, LoginPage } from '../../pages';

const logger = createLogger('First suite test');

describe('Root suite', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeAll(async () => {
    logger.info('Before All step');
    loginPage
        .open()
        .setUserName('User1')
        .setPassword('123')
        .signIn();
    homePage.open();
  });

  afterAll(async () => {
    logger.info('After All step');
    homePage.signOut();
  });

  it('first assert', async () => {
    logger.info('First assert');
    expect(true).toEqual(true);
  });

  it('second assert', async () => {
    logger.info('Second assert');
    expect(true).toEqual(true);
  });
});