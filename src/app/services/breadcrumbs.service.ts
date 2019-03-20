import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  constructor() { }


  getMenu(): Array<any> {
    const menu = [
      { name: 'Dashboard', path: '/home', children: [] },
      { name: 'Keep Notes', path: '/home/keep-notes', children: [] },
    ];
    return menu;
  }


}
