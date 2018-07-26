import {Injectable} from '@angular/core';
import {CommonServiceService} from "./common-service.service";
import {HttpClient} from "@angular/common/http";

const url_roles = CommonServiceService.GET_GETWAY_URL;

@Injectable({
  providedIn: 'root'
})

export class RolesServiceService {

  constructor(private http: HttpClient) {
  }

  getAllRoles() {
    let url = url_roles + 'www';

    this.http.get(url);

    // .subscribe((response) => {
    //   console.log(response);
    // })

  }

}
