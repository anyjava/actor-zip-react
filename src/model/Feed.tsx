
export default class Feed {
	title: string

	constructor(title: string) {
		this.title = title;
	}

	getTitle(): string {
		return this.title;
	}
}