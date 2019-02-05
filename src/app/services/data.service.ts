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
            name: "Apple iPhone X 64,GB",
            description: 'The iPhone X models have a 5.8" (diagonal) widescreen LED-backlit True Tone, wide color (P3) "Super Retina" with 3D Touch and a 2436x1125 native resolution at 458 ppi ',
            price: '₹ 87049'
        },
        {
            id: 2,
            category: 1,
			image: "https://i.ibb.co/5jnXDv7/realme1.jpg",
            sub_category: "Smartphone",
            name: "RealMe 1 (Silver)",
            description: "13MP primary camera with beautify, filter, HDR, panorama, ultra HD and 8MP front facing camera 15.2 centimeters (6-inch) 1080p FHD capacitive touchscreen with 2160 x 1080 pixels resolution and 403 ppi pixel density Android v8.1 Oreo operating system with 2GHz MTK Helio P60 AI octa core processor with 8-cores CPU, 4GB RAM, 64GB internal memory expandable up to 256GB and dual SIM (nano+nano) dual-standby (4G+4G) 3410mAH lithium-ion battery providing talk-time of 30 hours and standby time of 380 hours 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase ",
            price: '₹ 10990'
        },
        {
            id: 3,
            category: 1,
            sub_category: "Smartphone",
            image: "https://i.ibb.co/d5QB740/moto-g6-2.jpg",
            name: "Moto G6 (Indigo Black)",
            description: '12+5MP dual rear cameras (f/1.8, single LED flash) with creative camera system; 16MP front facing camera with low light mode and LED flash Unlock your phone by simply letting the camera see your face. It knows who you are thanks to the face recognition software, so you don’t need to enter your password 14.5cm (5.7) FHD+ 18:9 Max Vision display with 1080*2160 pixels resolution; Premium 3D glass black 4GB RAM and 64GB internal memory expandable up to 256GB; Android v8.0 Oreo operating system with Snapdragon 450 1.8GHz Octa-core processor 3000mAh battery with 15W TurboPowerTM charging 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including battery from the date of purchase',
            price: '₹ 15999'
        },
        {
            id: 4,
            category: 1,
            sub_category: "Smartphone",
			image: "https://i.ibb.co/5jnXDv7/realme1.jpg",
            name: "Realme 1 (Diamond)",
            description: '13MP primary Camera with beautify, filter',
            price: '₹ 10990'
        },
        {
            id: 5,
            category: 2,
            sub_category: "Smartphone",
            image: "https://i.ibb.co/wKWY2gF/realme-2-640x360.jpg",
            name: "RealMe 2",
            description: '3 GB RAM | 32 GB ROM | Expandable Upto 256 GB 15.75 cm (6.2 inch) HD+ Display 13MP + 2MP | 8MP Front Camera 4230 mAh Li-ion Battery Qualcomm Snapdragon 450 Octa Core 1.8 GHz Processor',
            price: '₹ 9500'
        },
		{
            id: 6,
            category: 2,
            sub_category: "Smartphone",
            image: "https://i.ibb.co/g9Vk9jc/nokia8-1.jpg",
            name: "Nokia 8.1",
            description: '	4 GB RAM | 64 GB ROM | 15.7 cm (6.18 inch) Full HD+ Display 12MP + 13MP | 20MP Front Camera 3500 mAh Battery Qualcomm Snapdragon 710 Processor',
            price: '₹ 9500'
        }
    ];

	constructor() { }
}
