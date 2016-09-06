import { InihilPhotographyPage } from './app.po';

describe('inihil-photography App', function() {
  let page: InihilPhotographyPage;

  beforeEach(() => {
    page = new InihilPhotographyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
