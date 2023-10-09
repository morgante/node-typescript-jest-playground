import { useConstant} from '../src/main.js';

// jest.mock('../src/mock.js', () => ({
//   methodBar: () => 'foo',
//   methodFoo: () => 'bar',
// }));

describe('mock-constants', () => {
  it('should use mock value', () => {
    expect(useConstant()).toBe('Constant value');
  });
});
