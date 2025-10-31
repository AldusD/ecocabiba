import HelloWorld from '../src/helloWorld.js';

describe('HelloWorld class', () => {
  test('sayHello() returns the expected string', () => {
    const hello = new HelloWorld();
    expect(hello.sayHello()).toBe('Hello, World!');
  });

  xtest('Always fails', () => {
    expect(false).toBeTruthy();
  });
});
