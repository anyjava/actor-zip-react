import { FeedApiRepository } from './FeedApiRepository';

describe('api inegration test', () => {
  const feedRepository = new FeedApiRepository();
  it('shoud be resolve feeds', async () => {
    const feeds = await feedRepository.findAllBy();

    expect(feeds.length).toBe(20);
  });
});
