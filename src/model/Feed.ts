
export default class Feed {
	private id: number

	private title: string

	private url: string

	constructor(id: number, title: string, url: string) {
		this.id = id;
		this.title = title;
		this.url = url;
	}

	getId(): number {
		return this.id;
	}

	getTitle(): string {
		return this.title;
	}

	getUrl(): string {
		return this.url;
	}
}