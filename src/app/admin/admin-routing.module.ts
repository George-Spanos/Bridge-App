import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadFormComponent } from './../Lead Section/lead-form/lead-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const AdminRoutes: Routes = [
    {
        path: '', component: AdminPanelComponent, children: [
            { path: 'lead', component: LeadFormComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
