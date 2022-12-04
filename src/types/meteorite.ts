import { GeoPoint } from "firebase/firestore";

export interface NewMeteoriteType {
    coordinates?: GeoPoint;
    name?:string;
    shortDescription?: string;
    visible?:string;
  }
  
  export interface AddMeteoriteType {
    coordinates?: GeoPoint;
    name?:string;
    shortDescription?: string;
    visible?:string;
  }
  