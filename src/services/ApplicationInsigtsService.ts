import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

export interface Log {

}

@Injectable()
export class ApplicationInsigtsService {
    constructor(private http: Http) { }

    getForApp(name: string, key: string): Observable<Log[]> {

        var headers = new Headers({
            'X-Api-Key': key
        });

        return this.http.get(`https://api.applicationinsights.io/beta/apps/${name}/events/exceptions?timespan=PT24H`, {
            headers: headers
        }).map(resp => resp.json()).do(console.log.bind(console)); 
    }
}