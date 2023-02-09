class Television {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`${this._brand, this._size, this._resolution, this._connections}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
        this._connectedTo = value;
        console.log(this._connectedTo);
      } else {
        console.log('Sorry, connection unavailable!');
      }
    }
}

const t1 = new Television('Samsung', 52, '1080', ['HDMI', 'Ethernet', 'USB']);
t1.connectedTo = 'HDMI';
console.log('Connected to: ', t1.connectedTo);

// console.log(t1.brand, t1.size, t1.resolution, t1.connections);

t1.turnOn();
