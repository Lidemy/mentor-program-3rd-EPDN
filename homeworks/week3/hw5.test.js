const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });
  it('should return correct answer when a=1 and b=123', () => {
    expect(add('1', '123')).toBe('124');
  });
  it('should return correct answer when a=9 and b=9', () => {
    expect(add('9', '9')).toBe('18');
  });
  it('should return correct answer when a=39 and b=123', () => {
    expect(add('39', '123')).toBe('162');
  });
});
