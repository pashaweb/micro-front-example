/** @jest-environment jsdom */

import { createTextElement } from './helpers';

describe('createTextElement', () => {
  it('should create a text element', () => {
    const element = createTextElement('Hello World');
    expect(element.innerHTML).toBe('Hello World');
  });
  it('should create a text element with special characters', () => {
    const element = createTextElement('Hello World &');
    console.log(element.innerHTML);
    expect(element.innerHTML).toBe('Hello World &amp;');
  });
  it('should create a text element with special tags', () => {
    const element = createTextElement(encodeURIComponent('<p>Hello World</p>'));
    expect(element.innerHTML).toBe('<p>Hello World</p>');
  });
});