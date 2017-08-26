import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { BridgeApi} from './bridge.service';
const routes = [
  {path: '', component: MainSectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [BridgeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
