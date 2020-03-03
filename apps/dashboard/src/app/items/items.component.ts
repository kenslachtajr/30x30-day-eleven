import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from '@ngrx-items/core-state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item } from '@ngrx-items/core-data';

@Component({
  selector: 'ngrx-items-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items$: Observable<Item[]> = this.itemsFacade.allItems$;
  item$: Observable<Item> = this.itemsFacade.currentItem$;
  loading$: Observable<boolean> = this.itemsFacade.itemsLoading$;
  form: FormGroup;

  constructor(
    private itemsFacade: ItemsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.itemsFacade.loadItems();
    this.itemsFacade.mutations$.subscribe(_ => this.reset());
    this.initForm();
  }

  selectItem(item: Item) {
    this.form.patchValue(item);
    this.itemsFacade.selectItem(item.id);
  }

  saveItem(item: Item) {
    if (this.form.valid) {
      item.id
        ? this.itemsFacade.updateItem(item)
        : this.itemsFacade.addItem(item);
    }
  }

  deleteItem(item: Item) {
    this.itemsFacade.deleteItem(item);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
