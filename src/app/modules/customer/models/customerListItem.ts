import { AddressModel } from "src/app/models/address";

export class CustomerListItemModel {
  constructor(Name: string, Birthday: Date, LastLawyer: string, Address: AddressModel) {
    this.name = Name;
    this.birthday = Birthday;
    this.lastLawyer = LastLawyer;
    this.address = Address;
  }

  name: string;
  birthday: Date;
  lastLawyer: string;
  address: AddressModel;

  get age(): number {
    let timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age;
  }
}
