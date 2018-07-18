import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatIconModule,
    MatCardModule, MatSidenavModule,
    MatFormFieldModule, MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatChipsModule
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
        MatProgressSpinnerModule,
        MatChipsModule
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
        MatProgressSpinnerModule,
        MatChipsModule

    ]
})
export class MaterialModule { }
