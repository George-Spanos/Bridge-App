import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { MatToolbarModule, MatIconModule,
     MatCardModule, MatSidenavModule,
      MatFormFieldModule, MatInputModule,
       MatSelectModule,
       MatButtonModule} from '@angular/material';
>>>>>>> parent of 9b1a21b... Minor fixes to users

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
<<<<<<< HEAD
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatChipsModule
=======
        MatButtonModule
>>>>>>> parent of 9b1a21b... Minor fixes to users
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
