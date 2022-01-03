import Feed from '../model/Feed';

export interface FeedRepository {
  findAllBy(): Array<Feed>;
}
