import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './products/components/productCard/productCard.component';
import { AboutComponent } from './home/components/about/about.component';
import { ProductComponent } from './products/products.component';
import { WhyChooseComponent } from './home/components/whyChoose/why-choose.component';
import { BannerComponent } from "./home/components/banner/banner.component";
import { MiddleComponent } from './home/components/middle/middle.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent,
    AboutComponent,
    WhyChooseComponent,
    HomeComponent,
    BannerComponent,
    MiddleComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
