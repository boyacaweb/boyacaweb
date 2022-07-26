import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { LandingComponent } from './components/body/landing/landing.component';
import { ServicesComponent } from './components/body/services/services.component';
import { AboutComponent } from './components/body/about/about.component';
import { PortafolioComponent } from './components/body/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
