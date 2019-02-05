import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
@Component({
	selector: 'app-all-products',
	templateUrl: './all-products.component.html',
	styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

	sideRow = 2;
	mainCol = 3;
	constructor(
        public data: DataService
    ) { }

	ngOnInit() {
	}
	onResize(event){
		this.sideRow = (window.innerWidth <= 768) ? 1 : 2;
		this.mainCol = (window.innerWidth <= 768) ? 12 : 3;
	}
}
