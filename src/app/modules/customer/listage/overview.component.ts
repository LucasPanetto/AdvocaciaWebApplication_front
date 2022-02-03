import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/models/address';
import { CustomerListItemModel } from '../models/customerListItem';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
 title: string = "Título";
 data: CustomerListItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
    const item: CustomerListItemModel = new CustomerListItemModel('Lucas Panetto Santos', new Date('1998-06-21 00:00:00'), 'Lucas', new AddressModel('', '', 'ES', 0, ''));

    this.data.push(item);
  }
}
