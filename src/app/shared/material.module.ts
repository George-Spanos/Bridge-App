import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatIconModule,
    MatCardModule, MatSidenavModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule

    ]
})
export class MaterialModule { }
