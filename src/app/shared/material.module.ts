import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule,
     MatCardModule, MatSidenavModule,
      MatFormFieldModule, MatInputModule,
       MatSelectModule,
       MatButtonModule} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule

    ]
})
export class MaterialModule { }
