import { MapperFOPage } from './app.po';

describe('mapper-fo App', function() {
  let page: MapperFOPage;

  beforeEach(() => {
    page = new MapperFOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
