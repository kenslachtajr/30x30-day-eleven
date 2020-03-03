import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoginComponent } from './ui-login/ui-login.component';
import { MaterialModule } from '@ngrx-items/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [UiLoginComponent]
})
export class UiLoginModule {}
