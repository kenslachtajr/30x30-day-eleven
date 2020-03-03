import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrx-items-ui-login',
  templateUrl: './ui-login.component.html',
  styleUrls: ['./ui-login.component.scss']
})
export class UiLoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToItems() {
    this.router.navigate(['/items']);
  }
}
