import { TesssttPage } from './app.po';

describe('tessstt App', function() {
  let page: TesssttPage;

  beforeEach(() => {
    page = new TesssttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
