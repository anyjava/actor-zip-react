
export default class Feed {
	title: string

	constructor(title: string) {
		this.title = title;
	}

	getTitle() {
		return this.title;
	}
}