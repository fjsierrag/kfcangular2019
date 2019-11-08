import {Component, OnInit} from '@angular/core';
import {faCreditCard, faShieldAlt, faTags, faTruckMoving} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-shop-features',
    templateUrl: './shop-features.component.html',
    styleUrls: ['./shop-features.component.scss']
})
export class ShopFeaturesComponent implements OnInit {
    features = [
        {
            icon: faTruckMoving,
            name: "quick delivery",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {icon: faCreditCard, name: "pay with easy", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
        {icon: faTags, name: "best deal", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
        {icon: faShieldAlt, name: "secured payment", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
