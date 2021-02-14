import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApplyComponent } from './apply/apply.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricechartComponent } from './pricechart/pricechart.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
// import { ApplyProvider } from './services/apply';
import { AddProvider } from './services/add';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
// import { HttpModule,HttpClient } from '@angular/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplyComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    PricechartComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
  
  ],
  providers: [
    AddProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
