import { LeadFormComponent } from './../Lead Section/lead-form/lead-form.component';
import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AdminPanelComponent,
        LeadFormComponent,
    ],
    imports: [CommonModule, FormsModule, SharedModule, AdminRoutingModule]
})
export class AdminModule {

}
