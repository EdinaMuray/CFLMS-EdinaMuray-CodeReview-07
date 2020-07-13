import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/offer';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	products: Product[] = [
		new Product(
			1,
			'Great Barrier Reef',
			'Nov 12 2020',
			'3 weeks',
			'Your best decision ever! Where when not to the Great Barrier Reef?',
			1500,
			'/assets/img/great_barrier_reef.png'
		),
		new Product(
			2,
			'Maldives',
			'Sept 10 2020',
			'2 weeks',
			'Left the world and the stress behind You, travel to Maldives!',
			1300,
			'assets/img/maldives.png'
		),
		new Product(
			3,
			'Maui',
			'Dec 22 2020',
			'1 weeks',
			'Where is not just the guests also the beer is unique!',
			1000,
			'assets/img/maui.png'
		),
		new Product(
			4,
			'Seychelles',
			'Jan 30 2021',
			'2 weeks',
			'Extra care for you and your family in this perfect 2 weeks.',
			1200,
			'assets/img/seychelles.png'
		),
		new Product(
			5,
			'St. Lucia',
			'Feb 07 2021',
			'3 weeks',
			'Real adventure with big smile garantie when you book it now!',
			1600,
			'assets/img/st_lucia.png'
		),
		new Product(
			6,
			'Tahiti',
			'Marc 15 2021',
			'1 weeks',
			'Lot of fun on the most beautiful island with full sunshine.',
			1100,
			'assets/img/tahiti.png'
		)
	];

	constructor() {}

	// TODO: Populate products from an API and return Observable
	getProducts(): Product[] {
		return this.products;
	}
}
