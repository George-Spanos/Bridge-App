import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadPracticeComponent } from './lead-practice/lead-practice.component';
import { LeadThreadComponent } from './lead-thread/lead-thread.component';
import { LeadThreadFormComponent } from './lead-thread-form/lead-thread-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LeadPracticeComponent,
    LeadThreadComponent,
    LeadThreadFormComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class LeadModule {}
