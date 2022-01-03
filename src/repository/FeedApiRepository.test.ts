import { FeedApiRepository } from './FeedApiRepository';

describe('api integration test', async () => {
  const feedRepository = new FeedApiRepository();
  it('shoud be resolve feeds', async () => {
    const feeds = await feedRepository.findByAll();

    expect(feeds.length).toBe(20);
  });
});
