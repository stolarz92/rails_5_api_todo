import { MgrTodoPage } from './app.po';

describe('mgr-todo App', () => {
  let page: MgrTodoPage;

  beforeEach(() => {
    page = new MgrTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
