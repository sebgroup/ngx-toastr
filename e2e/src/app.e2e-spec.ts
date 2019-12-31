import { AppPage } from './app.po';
import {browser, ElementFinder, protractor} from 'protractor';

describe('Test documentation', () => {
  let page: AppPage;
  let previousSnippet: any;
  let currentSnippet: any;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct package name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('@sebgroup/ngx-toastr');
  });

  const SNIPPETS = [
    {id: 'config'},
    {id: 'module', tab: 'app.module.ts'},
    {id: 'module', tab: 'app.component.ts'},
    {id: 'module', tab: 'styles.scss'},
    {id: 'standard'},
    {id: 'timeout'},
    {id: 'inline'},
    ];
  describe('Test code snippets', () => {
    // create tests for each snippet
    SNIPPETS.map(snippet => {
      it(`should display unique example for ${snippet.id}${snippet.tab ? ' and ' + snippet.tab : ''}`, () => {
        currentSnippet = page.getSnippet(`${snippet.id}_example`, snippet.tab);
        expect(currentSnippet).toBeTruthy();
        expect(currentSnippet).not.toEqual(previousSnippet);
        previousSnippet = currentSnippet;
      });
    });
  });

  const TOASTS = [
    {id: 'standard', selector: '.col-6:nth-child(1) .btn', type: 'info'},
    {id: 'standard', selector: '.col-6:nth-child(2) .btn', type: 'success'},
    {id: 'standard', selector: '.col-6:nth-child(3) .btn', type: 'warning'},
    {id: 'standard', selector: '.col-6:nth-child(4) .btn', type: 'error'},
    {id: 'timeout', selector: '.col-6:nth-child(1) .btn', type: 'info'},
    {id: 'timeout', selector: '.col-6:nth-child(2) .btn', type: 'success'},
    {id: 'timeout', selector: '.col-6:nth-child(3) .btn', type: 'warning'},
    {id: 'timeout', selector: '.col-6:nth-child(4) .btn', type: 'error'},
    {id: 'inline', selector: '.col-6:nth-child(1) .btn',  type: 'info'},
    {id: 'inline', selector: '.col-6:nth-child(2) .btn',  type: 'success'},
    {id: 'inline', selector: '.col-6:nth-child(3) .btn',  type: 'warning'},
    {id: 'inline', selector: '.col-6:nth-child(4) .btn',  type: 'error'},
    ];
  const getTestDescription = (toast: any, action: string = 'display', trigger: string = 'button click') => {
    switch (toast.id) {
      case 'inline':
        return `should ${action} ${toast.type} toast inline on ${toast.type} ${trigger}`;
      case 'timeout':
        return `should ${action} ${toast.type} toast with timeout on ${toast.type} ${trigger}`;
      default:
        return `should ${action} ${toast.type} toast on ${toast.type} ${trigger}`;
    }
  };
  describe('Test toasts', () => {
    let toastEl: ElementFinder;
    let inline = false; // is toast displayed inline

    beforeEach(() => {
      toastEl =  page.getToast(inline);
    });

    // create tests for each toast type
    TOASTS.map(toast => {
      it(getTestDescription(toast), () => {
        inline = toast.id === 'inline'; // set inline to true if id equals inline
        page.getButton(`#${toast.id} ${toast.selector}`).click();
        expect(toastEl.getAttribute('class')).toContain(`toast-${toast.type}`);
      });
      it(getTestDescription(toast, 'close', 'toast click'), () => {
        inline = toast.id === 'inline'; // set inline to true if id equals inline
        toastEl.click();
        browser.wait(EC.not(EC.presenceOf(toastEl))); // wait until toast has been removed
        expect(toastEl.isPresent()).toBeFalsy();
      });
    });
  });
});
