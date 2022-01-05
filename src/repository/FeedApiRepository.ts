import axios from "axios";

import Feed from "../model/Feed";
import { FeedRepository } from "./FeedRepository";

interface FeedsReponseContent {
	title: string,
	url: string,
	stieType: string,
	registrationDateTime: string
}

export class FeedApiRepository implements FeedRepository {
	private host = "https://83a1zafg25.execute-api.ap-northeast-2.amazonaws.com/dev";

	async findAllBy(): Promise<Feed[]> {
		return axios.get(`${this.host}/feeds`)
      .then((Response) => {
				const {content} = Response.data;
				return content.map((res: FeedsReponseContent) => {
					return new Feed(Math.random() * 100, res.title, res.url);
				})
      })
      .catch((e) => {;
				throw new Error(e.message);
      });
	}
}
