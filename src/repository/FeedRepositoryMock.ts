import Feed from "../model/Feed";
import { FeedRepository } from "./FeedRepository";

export default class FeedRepositoryMock implements FeedRepository {
	// eslint-disable-next-line class-methods-use-this
	findAllBy(): Feed[] {
		return [
			new Feed(1, 'title1'),
			new Feed(2, 'title2'),
			new Feed(3, 'title3'),
			new Feed(4, 'title4'),
		];
	}
}