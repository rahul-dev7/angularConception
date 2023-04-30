import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(
        private http: HttpClient
    ) {}

    get(url: string) {
        return this.http.get<any[]>(url);
    }

    post(url: string,data: any) {
       return this.http.post<any[]>(url, data);
    }
}