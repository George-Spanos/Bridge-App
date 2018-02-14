import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardBoardComponent } from './shared-components/card-board/card-board.component';
import { CommentComponent } from './shared-components/comment/comment.component';
import { ContractDesignComponent } from './shared-components/contract-design/contract-design.component';
import { SuitImgComponent } from './shared-components/suit-img/suit-img.component';
import { DropdownDirective } from './shared-directives/dropdown.directive';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CardBoardComponent,
    CommentComponent,
    ContractDesignComponent,
    SuitImgComponent,
    DropdownDirective
  ],
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DropdownDirective,
    CardBoardComponent,
    CommentComponent,
    ContractDesignComponent,
    SuitImgComponent,
    DropdownDirective]
})
export class SharedModule { }
