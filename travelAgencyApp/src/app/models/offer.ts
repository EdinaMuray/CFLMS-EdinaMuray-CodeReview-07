export class Product {
	id: number;
	name: string;
	start: string;
	duration: string;
	description: string;
	price: number;
	image: string;

	constructor(id, name, start, duration, description = '', price = 0, image = 'assets/img/maui.png') {
		this.id = id;
		this.name = name;
		this.start = start;
		this.duration = duration;
		this.description = description;
		this.price = price;
		this.image = image;
	}
}
