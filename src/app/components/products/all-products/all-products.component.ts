import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
@Component({
	selector: 'app-all-products',
	templateUrl: './all-products.component.html',
	styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

	constructor(
        public data: DataService
    ) { }

	ngOnInit() {
	}

}
