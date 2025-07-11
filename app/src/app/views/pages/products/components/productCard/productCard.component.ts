import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-card-product',
    standalone: false,
    templateUrl: './productCard.component.html',
    styleUrl: './productCard.component.scss'
})

export class ProductCardComponent {
    @Input() product!: { title: string; image: string; description: string };
    imageLoaded = false;

    onImageLoad() {
        this.imageLoaded = true;
    }
}