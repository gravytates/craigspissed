import { CraigspissedPage } from './app.po';

describe('craigspissed App', () => {
  let page: CraigspissedPage;

  beforeEach(() => {
    page = new CraigspissedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
