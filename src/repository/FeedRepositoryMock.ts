import Feed from "../model/Feed";
import { FeedRepository } from "./FeedRepository";

export default class FeedRepositoryMock implements FeedRepository {
	// eslint-disable-next-line class-methods-use-this
	async findAllBy(): Promise<Feed[]> {
		return new Promise((resolve, reject) => {
				resolve([
					new Feed(1, 'title1', 'url'),
					new Feed(2, 'title2', 'url'),
					new Feed(3, 'title3', 'url'),
					new Feed(4, 'title4', 'url'),
				]);
			}
		);
	}
}
