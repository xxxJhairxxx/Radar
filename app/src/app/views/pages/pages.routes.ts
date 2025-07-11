import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
];
