import { AngularRouteTestPage } from './app.po';

describe('angular-route-test App', () => {
  let page: AngularRouteTestPage;

  beforeEach(() => {
    page = new AngularRouteTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
