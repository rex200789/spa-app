import { SanitizePipe } from './sanitize.pipe';

describe('Pipe: SanitizePipe', () => {
  let pipe: SanitizePipe;

  beforeEach(() => {
    pipe = new SanitizePipe();
  });

  it('providing no value returns no value', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('providing a value returns value', () => {
    expect(pipe.transform('http://local:3000')).toBe('http://local:3000');
  });

  it('providing html returns sanitized', () => {
    expect(pipe.transform('<p>hello</p>')).toBe('hello');
  });
});
