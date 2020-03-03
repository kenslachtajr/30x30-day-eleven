import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './items.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';
const model = 'items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  get(): Observable<Item[]> {
    return this.http.get<Item[]>(this.getForUrl());
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.getForUrl(), item);
  }

  update(item: Item): Observable<Item> {
    return this.http.patch<Item>(this.getForUrlId(item.id), item);
  }

  delete(itemId: number): any {
    return this.http.delete<any>(this.getForUrlId(itemId));
  }

  private getForUrl() {
    return `${BASE_URL}${model}`;
  }

  private getForUrlId(id: number) {
    return `${this.getForUrl()}/${id}`;
  }
}
