import { YellowdirPage } from './app.po';

describe('yellowdir App', function() {
  let page: YellowdirPage;

  beforeEach(() => {
    page = new YellowdirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
