import Client from "./Client";
import Item from "./Item";

export default class Order {
    private _client: Client;
    private _items: Item[] = [];
    private _paymentMethod: string;
    private _discount = 0;

    constructor(client: Client, items: Item[] = [], paymentMethod: string, discount = 0) {
      this._client = client;
      this._items = items;
      this._paymentMethod = paymentMethod;
      this._discount = discount;
    }

    calculateSum():number {
        return this._items.reduce(function(acc, curr){
            const sum = acc + curr.price
            return sum;
          },0);;
    }

    calculateDiscount(): number {
        return this.calculateSum() * (1 - this._discount);
      }
}