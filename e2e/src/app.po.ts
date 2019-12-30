import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSnippet(id: string, tab?: string) {
    if (tab) {
      const el = element(by.id(id)).element(by.cssContainingText('ul li', tab));
      el.click();
      browser.waitForAngular();
    }
    return element(by.id(id)).element(by.css('pre')).getText();
  }

  getButton(selector: string) {
    return element(by.css(selector));
  }

  getToast(inline = false) {
    return element(by.css(`${inline ? '[toastcontainer] ' : ''}#toast-container [toast-component]:first-child`)).getAttribute('class');
  }
}
