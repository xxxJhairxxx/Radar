import { Component } from "@angular/core";

@Component({
    selector:'app-product',
    standalone:false,
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.scss']
})
export class ProductComponent{
    listCards = [
  {
    id: 1,
    title: 'Card title 1',
    description: 'Some quick example text to build on the card title and make up the ',
    image: 'https://picsum.photos/id/1011/500/500'
  },
  {
    id: 2,
    title: 'Card title 2',
    description: 'This card provides a short description and an example image.',
    image: 'https://picsum.photos/id/1012/500/500'
  },
  {
    id: 3,
    title: 'Card title 3',
    description: 'Here is another sample card with a unique image and text.',
    image: 'https://picsum.photos/id/1013/500/500'
  },
  {
    id: 4,
    title: 'Card title 4',
    description: 'Use cards like this to showcase different pieces of content.',
    image: 'https://picsum.photos/id/1014/500/500'
  },
  {
    id: 5,
    title: 'Card title 5',
    description: 'Cards are useful UI components for organizing information.',
    image: 'https://picsum.photos/id/1015/500/500'
  },
  {
    id: 6,
    title: 'Card title 6',
    description: 'Display a brief summary or preview of your content here.',
    image: 'https://picsum.photos/id/1016/500/500'
  },
  {
    id: 7,
    title: 'Card title 7',
    description: 'You can include text, images, and even buttons in a card.',
    image: 'https://picsum.photos/id/1021/500/500'
  },
  {
    id: 8,
    title: 'Card title 8',
    description: 'This is yet another example of a well-structured card layout.',
    image: 'https://picsum.photos/id/1018/500/500'
  },
];
}