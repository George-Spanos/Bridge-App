import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';


import { MainSectionComponent } from './main-section/main-section.component';
import { BridgeApi} from './bridge.service';
import { BidFormComponent } from './bid-form/bid-form.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PracticeComponent } from './practice/practice.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
const routes = [
  {path: '', component: HomepageComponent},
  {path: 'bid', component: MainSectionComponent},
  {path: 'practice', component: PracticeComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    BidFormComponent,
    HeaderComponent,
    HomepageComponent,
    PracticeComponent,
    DonateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BridgeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
