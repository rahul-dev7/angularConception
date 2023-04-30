import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private commonService: CommonService
        , private http: HttpClient) {}

    getUsers(): Observable<any[]>  {
         return this.commonService.get('https://localhost:8080/api/users');
    }
}