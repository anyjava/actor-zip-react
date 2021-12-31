import Feed from "../model/Feed";
import { FeedRepository } from "./FeedRepository";

export default class FeedRepositoryMock implements FeedRepository {
	// eslint-disable-next-line class-methods-use-this
	findAllBy(): Feed[] {
		return [
			new Feed('title1'),
			new Feed('title2'),
			new Feed('title3'),
			new Feed('title4'),
		];
	}
}