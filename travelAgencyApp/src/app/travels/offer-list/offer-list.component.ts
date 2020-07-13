import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/offer';

@Component({
	selector: 'app-offer-list',
	templateUrl: './offer-list.component.html',
	styleUrls: [ './offer-list.component.css' ]
})
export class OfferListComponent implements OnInit {
	productList: Product[] = [];

	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.productList = this.productService.getProducts();
	}
}
