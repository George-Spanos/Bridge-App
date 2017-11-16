import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BidThreadComponent } from './Bid Section/bid-thread/bid-thread.component';
import { PracticeComponent } from './Bid Section/practice/practice.component';
import { LeadPracticeComponent } from './Lead Section/lead-practice/lead-practice.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { LeadFormComponent } from './Lead Section/lead-form/lead-form.component';
import { LeadThreadComponent } from './Lead Section/lead-thread/lead-thread.component';
import { AccountComponent } from './core/auth/account-page/account/account.component';
import { TestpageComponent } from './testpage/testpage.component';

const Approutes: Routes = [
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
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
