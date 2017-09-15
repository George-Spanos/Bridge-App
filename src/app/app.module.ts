import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { MainSectionComponent } from './Bid Section/main-section/main-section.component';
import { BridgeApi } from './Services/bridge.service';
import { BidFormComponent } from './Bid Section/bid-form/bid-form.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PracticeComponent } from './Bid Section/practice/practice.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { LeadFormComponent } from './Lead Section/lead-form/lead-form.component';
import { LeadPracticeComponent } from './Lead Section/lead-practice/lead-practice.component';
import { PracticeformComponent } from './Bid Section/practiceform/practiceform.component';
import { LeadMainComponent } from './Lead Section/lead-main/lead-main.component';
const routes = [
  { path: '', component: HomepageComponent },
  { path: 'bid', component: MainSectionComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'leadpractice', component: LeadPracticeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lead', component: LeadFormComponent },
  { path: '**', redirectTo: '' }
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
    ContactComponent,
    LeadFormComponent,
    LeadPracticeComponent,
    PracticeformComponent,
    LeadMainComponent
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
