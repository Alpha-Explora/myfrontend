import { SERVICE_NAME } from '../../src/index';

describe('myfrontend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('myfrontend');
  });
});