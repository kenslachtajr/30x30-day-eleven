import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-items-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Items';
  links = [
    { path: '/login', icon: 'person', label: 'Login' },
    { path: '/items', icon: 'loyalty', label: 'Items' }
  ];
}
