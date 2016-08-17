import { Ng2GoalRc5Page } from './app.po';

describe('ng2-goal-rc5 App', function() {
  let page: Ng2GoalRc5Page;

  beforeEach(() => {
    page = new Ng2GoalRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
