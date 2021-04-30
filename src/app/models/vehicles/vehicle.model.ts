
interface VehicleAttributes {
  id?: number;
  plate?: string;
  model?: string;
  manufacturer?: string;
  color?: string;
  status?: boolean;
}

export class Vehicle implements VehicleAttributes {
  id: number;
  plate: string;
  model: string;
  manufacturer: string;
  color: string;
  status: boolean;

  constructor({
    ...attr
  }: VehicleAttributes = {}) {
    this.id = attr.id;
    this.plate = attr.plate;
    this.model = attr.model;
    this.manufacturer = attr.manufacturer;
    this.color = attr.color;
    this.status = attr.status;
  }
}
