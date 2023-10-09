import { vi, describe, it, expect } from 'vitest';

import { useConstant} from '../src/main.js';

vi.mock('../src/constant.js', () => ({
  default: "Mock value"
}));

describe('mock-constants', () => {
  it('should use mock value', () => {
    expect(useConstant()).toBe('Mock value');
  });
});
