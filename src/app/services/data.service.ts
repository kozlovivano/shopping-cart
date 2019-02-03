import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {

    categories = [
        { id: 0, name: "All" },
        { id: 1, name: "Google" },
        { id: 2, name: "Apple" },
        { id: 3, name: "Samsung" },
        { id: 4, name: "Oneplus" },
        { id: 5, name: "Lenovo" },
        { id: 6, name: "Nokia" },
        { id: 7, name: "Motorolla" }
    ];

    products = [
        {
            id: 1,
            category: 2,
            sub_category: "Smartphone",
            image: "https://boygeniusreport.files.wordpress.com/2017/10/iphone-x-in-hand.jpg?quality=98&strip=all&w=640",
            name: "Apple iPhone X (Japan/A1902) 64,GB",
            description: 'The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi ',
            price: '₹ 87049'
        },
        {
            id: 2,
            category: 1,
            sub_category: "Smartphone",
            name: "Apple iPhone X (Japan/A1902) 64,GB",
            description: 'The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi ',
            price: '₹ 87049'
        },
        {
            id: 3,
            category: 1,
            sub_category: "Smartphone",
            image: "https://betanews.com/wp-content/uploads/2018/05/moto-g6-2.jpg",
            name: "Apple iPhone X (Japan/A1902) 64,GB",
            description: 'The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi ',
            price: '₹ 87049'
        },
        {
            id: 4,
            category: 1,
            sub_category: "Smartphone",
            name: "Apple iPhone X (Japan/A1902) 64,GB",
            description: 'The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi ',
            price: '₹ 87049'
        },
        {
            id: 5,
            category: 2,
            sub_category: "Smartphone",
            image: "https://betanews.com/wp-content/uploads/2018/05/moto-g6-2.jpg",
            name: "Apple iPhone X (Japan/A1902) 64,GB",
            description: 'The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi ',
            price: '₹ 87049'
        }
    ];

	constructor() { }
}
