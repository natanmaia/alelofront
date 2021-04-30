
import { BaseSerializer } from 'src/app/utils/base.serializer';
import { JSON } from 'src/app/utils/json.interface';
import { Vehicle } from './vehicle.model';

export class InteracaoCanalSerializer extends BaseSerializer<Vehicle> {

  fromJSON(json: JSON): Vehicle {
    if (json == null) { json = {}; }

    return new Vehicle({
      id: json.id,
      plate: json.plate,
      model: json.model,
      manufacturer: json.manufacturer,
      color: json.color,
      status: json.status,
    });
  }

  toJSON(model: Vehicle): JSON {
    const json: JSON = {};

    if (model.id) { json.id = model.id; }
    if (model.plate) { json.plate = model.plate; }
    if (model.model) { json.model = model.model; }
    if (model.manufacturer) { json.manufacturer = model.manufacturer; }
    if (model.color) { json.color = model.color; }
    { json.status = model.status; }

    return json;
  }

}
