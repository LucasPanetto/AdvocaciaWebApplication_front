export class AddressModel {

  constructor(Street?: string, District?: string, State?: string, Number?: number, Country?: string, City?: string) {
    this.street = Street || '';
    this.district = District || '';
    this.state = State || '';
    this.number = Number || 0;
    this.country = Country || '';
    this.city = City || '';
  }

  street: string;
  district: string;
  state: string;
  number: number;
  country: string;
  city: string;
}
