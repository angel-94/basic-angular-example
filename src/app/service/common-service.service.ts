import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  public static GET_GETWAY_URL(): string{
    return environment.gatwayUlr;
  }

}
