import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Item } from '@ngrx-items/core-data';

@Component({
  selector: 'ngrx-items-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent {
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();

  saveItem(item: Item) {
    this.saved.emit(item);
  }

  cancel() {
    this.canceled.emit();
  }
}
