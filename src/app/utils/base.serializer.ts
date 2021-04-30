export type Entity<T> = T & { id?};

export interface SerializerInterface<T> {
  toJSON(entity: T): any;
  listFromJSON(jsonObject: any): T[];
  fromJSON(jsonObject: any): T;
  listToJSON(entityList: T[]): any;
}

export abstract class BaseSerializer<T> implements SerializerInterface<T>{
  
  abstract toJSON(entity: T);  
  
  listFromJSON(jsonObject: any): T[] {
    if (jsonObject == null) { jsonObject = [] }
    return jsonObject.map(entityJSON => this.fromJSON(entityJSON));
  }
  
  abstract fromJSON(jsonObject: any);
  
  listToJSON(entityList: T[]): any {
    if (entityList == null) { entityList = [] }
    return entityList.map(entity => this.toJSON(entity));
  }

}

