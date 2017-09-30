import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { BidThreadComponent } from './Bid Section/bid-thread/bid-thread.component';
import { BridgeApi } from './Services/bridge.service';
import { User } from './Services/user.service';
import { BidFormComponent } from './Bid Section/bid-form/bid-form.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PracticeComponent } from './Bid Section/practice/practice.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { LeadFormComponent } from './Lead Section/lead-form/lead-form.component';
import { LeadPracticeComponent } from './Lead Section/lead-practice/lead-practice.component';
import { PracticeformComponent } from './Bid Section/practiceform/practiceform.component';
import { TestpageComponent } from './testpage/testpage.component';
import { CardBoardComponent } from './shared-components/card-board/card-board.component';
import { ContractDesignComponent } from './shared-components/contract-design/contract-design.component';
import { SuitImgComponent } from './shared-components/suit-img/suit-img.component';
import { DropdownDirective } from './shared-directives/dropdown.directive';
import { LeadThreadComponent } from './Lead Section/lead-thread/lead-thread.component';
import { LeadThreadFormComponent } from './Lead Section/lead-thread-form/lead-thread-form.component';
import { CommentComponent } from './shared-components/comment/comment.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account-page/account/account.component';
const routes = [
  { path: '', component: HomepageComponent },
  { path: 'bid', component: BidThreadComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'leadpractice', component: LeadPracticeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lead', component: LeadFormComponent },
  { path: 'leadthread', component: LeadThreadComponent },
  { path: 'myaccount', component: AccountComponent },
  { path: 'test', component: TestpageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    BidThreadComponent,
    BidFormComponent,
    HeaderComponent,
    HomepageComponent,
    PracticeComponent,
    DonateComponent,
    ContactComponent,
    LeadFormComponent,
    LeadPracticeComponent,
    PracticeformComponent,
    TestpageComponent,
    CardBoardComponent,
    ContractDesignComponent,
    SuitImgComponent,
    DropdownDirective,
    LeadThreadComponent,
    LeadThreadFormComponent,
    CommentComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BridgeApi, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
