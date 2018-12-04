import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Timeline } from "../model/timeline";
import { Injectable } from "@angular/core";
import { APICONFIG } from "../config/api.config";

@Injectable()
export class TimelineService {

    constructor(private http: HttpClient){ }

    getPosts(): Observable<Timeline[]>{
        return this.http.get<Timeline[]>(`${APICONFIG.url}`);
    }

}