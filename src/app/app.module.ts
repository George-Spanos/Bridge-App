import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { BridgeApi} from './bridge.service';
import { BidFormComponent } from './bid-form/bid-form.component';
const routes = [
  {path: '', component: MainSectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    BidFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BridgeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
