import { CalendarNg2Page } from './app.po';

describe('calendar-ng2 App', function() {
  let page: CalendarNg2Page;

  beforeEach(() => {
    page = new CalendarNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
