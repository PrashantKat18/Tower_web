import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app/about/about.component';
import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { PricechartComponent } from '../app/pricechart/pricechart.component';
import { ServiceComponent } from '../app/service/service.component';
import { ApplyComponent } from '../app/apply/apply.component';
import { HomeComponent } from '../app/home/home.component';
import { ContactComponent } from '../app/contact/contact.component'
const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'priceChart',
    component:PricechartComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'apply',
    component:ApplyComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
