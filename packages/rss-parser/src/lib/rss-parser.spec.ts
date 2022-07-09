import { rssParser } from './rss-parser';

describe('rssParser', () => {
  it('should work', () => {
    expect(rssParser()).toEqual('rss-parser');
  });
});
