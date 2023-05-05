export class ProductQueryModel {
  constructor(private _name: string, private _price: string) {}

  get name() {
    return this._name;
  }
  get price() {
    return `${this._price}$`;
  }
}
