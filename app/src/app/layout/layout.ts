import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.componet'
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}