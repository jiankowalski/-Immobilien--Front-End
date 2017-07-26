import { ImmobilienPage } from './app.po';

describe('immobilien App', () => {
  let page: ImmobilienPage;

  beforeEach(() => {
    page = new ImmobilienPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
