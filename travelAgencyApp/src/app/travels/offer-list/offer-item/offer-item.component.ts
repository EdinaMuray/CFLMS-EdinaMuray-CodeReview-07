import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/offer';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
	selector: 'app-offer-item',
	templateUrl: './offer-item.component.html',
	styleUrls: [ './offer-item.component.css' ]
})
export class OfferItemComponent implements OnInit {
	@Input() offerItem: Product;

	constructor(private msg: MessengerService) {}

	ngOnInit(): void {}

	handleAddToCart() {
		this.msg.sendMsg(this.offerItem);
	}
}
