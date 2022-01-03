import axios from "axios";
import Feed from "../model/Feed";

interface FeedsReponseContent {
	title: string,
	url: string,
	stieType: string,
	registrationDateTime: string
}

export class FeedApiRepository {
	private host = "https://83a1zafg25.execute-api.ap-northeast-2.amazonaws.com/dev";

	async findByAll() : Promise<Feed[]> {
		return axios.get(`${this.host}/feeds`)
      .then((Response) => {
				const {content} = Response.data;
				return content.map((res: FeedsReponseContent) => {
					return new Feed(1, res.title);
				})
      })
      .catch((e) => {;
        console.log(e);
				throw new Error(e.message);
      });
	}
}
