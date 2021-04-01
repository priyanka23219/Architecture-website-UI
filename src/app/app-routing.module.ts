import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {CustomerComponent} from './customer/customer.component';
import{ProjectsComponent} from './projects/projects.component';
import{FooterComponent}from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
const routes: Routes = [
  {
    path:"Home",
    component: HomeComponent
  },
 {

 
  path: "",   redirectTo: '/Home', pathMatch: 'full'
},
  {
    path:"About Us",
    component: AboutUsComponent
  },
  {
    path:"Contact_Us",
    component: ContactUsComponent
  },
  {
    path:"Customer",
    component: CustomerComponent
  },
 
  {
    path:"Projects",
    component:ProjectsComponent
  },
  {
    path:"Gallery",
    component:GalleryComponent
  },
  {
    path:"footer",
    component: FooterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
