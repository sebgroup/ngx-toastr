import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let previousSnippet: any;
  let currentSnippet: any;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct package name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('@sebgroup/ngx-toastr');
  });

  it('should display toastr config options', () => {
    currentSnippet = page.getSnippet('config_example');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;

  });

  it('should display unique app module example', () => {
    currentSnippet = page.getSnippet('module_example', 'app.module.ts');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;
  });

  it('should display unique app component example', () => {
    currentSnippet = page.getSnippet('module_example', 'app.component.ts');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;
  });

  it('should display unique style example', () => {
    currentSnippet = page.getSnippet('module_example', 'styles.scss');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;
  });

  it('should display markup for standard example', () => {
    currentSnippet = page.getSnippet('standard_example');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;
  });

  it('should display markup for example with timeout', () => {
    currentSnippet = page.getSnippet('timeout_example');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;
  });

  it('should display markup for inline example', () => {
    currentSnippet = page.getSnippet('inline_example');
    expect(currentSnippet).toBeTruthy();
    expect(currentSnippet).not.toEqual(previousSnippet);
    previousSnippet = currentSnippet;
  });

  it('should display standard info toast', () => {
    page.getButton('#standard .col-6:nth-child(1) .btn').click();
    expect(page.getToast()).toContain('toast-info');
  });

  it('should display standard success toast', () => {
    page.getButton('#standard .col-6:nth-child(2) .btn').click();
    expect(page.getToast()).toContain('toast-success');
  });

  it('should display standard warning toast', () => {
    page.getButton('#standard .col-6:nth-child(3) .btn').click();
    expect(page.getToast()).toContain('toast-warning');
  });

  it('should display standard error toast', () => {
    page.getButton('#standard .col-6:nth-child(4) .btn').click();
    expect(page.getToast()).toContain('toast-error');
  });

  it('should display info toast with timeout', () => {
    page.getButton('#timeout .col-6:nth-child(1) .btn').click();
    expect(page.getToast()).toContain('toast-info');
  });

  it('should display success toast with timeout', () => {
    page.getButton('#timeout .col-6:nth-child(2) .btn').click();
    expect(page.getToast()).toContain('toast-success');
  });

  it('should display warning toast with timeout', () => {
    page.getButton('#timeout .col-6:nth-child(3) .btn').click();
    expect(page.getToast()).toContain('toast-warning');
  });

  it('should display error toast with timeout', () => {
    page.getButton('#timeout .col-6:nth-child(4) .btn').click();
    expect(page.getToast()).toContain('toast-error');
  });

  it('should display info inline toast', () => {
    page.getButton('#inline .col-6:nth-child(1) .btn').click();
    expect(page.getToast(true)).toContain('toast-info');
  });

  it('should display success inline toast', () => {
    page.getButton('#inline .col-6:nth-child(2) .btn').click();
    expect(page.getToast(true)).toContain('toast-success');
  });

  it('should display warning inline toast', () => {
    page.getButton('#inline .col-6:nth-child(3) .btn').click();
    expect(page.getToast(true)).toContain('toast-warning');
  });

  it('should display error inline toast', () => {
    page.getButton('#inline .col-6:nth-child(4) .btn').click();
    expect(page.getToast(true)).toContain('toast-error');
  });
});
