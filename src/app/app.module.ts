import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { CoreModule } from './core/core.module';
import { BridgeApi } from './shared/Services/bridge.service';
import { User } from './shared/Services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { BidModule } from './Bid Section/bid.module';
import { SharedModule } from './shared/shared.module';
import { LeadModule } from './Lead Section/lead.module';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { TestpageComponent } from './testpage/testpage.component';
@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    ContactComponent,
    TestpageComponent,
  ],
  imports: [
    BrowserModule,
    BidModule,
    LeadModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BridgeApi, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
