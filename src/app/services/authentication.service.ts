import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
    readonly rootUrl = 'https://github.com';
    reqHeader = new HttpHeaders();
    constructor(private http: HttpClient) { }

    userAuthentication() {
        const clientId = environment.clientId;
        const clientSecret = environment.secretId;

        this.reqHeader.set('Content-Type', 'application/json; charset=utf-8');
        this.reqHeader.set('Accept', 'application/json');
        return this.http.get('https://github.com/login/oauth/authorize?client_id=cca4717acc2909c33327', { headers: this.reqHeader })
            .map((res: Response) => res.json());
        // return this.http.get(this.rootUrl + `/login/oauth/authorize?client_id=${clientId}`, { headers: this.reqHeader });
    }

    generateAuthToken(code: string) {
        const clientId = environment.clientId;
        const clientSecret = environment.secretId;

        const param = {
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        };

        this.reqHeader.set('Accept', 'application/json');

        return this.http.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', param, { headers: this.reqHeader })
            .map((res: Response) => res.json());
    }

    getUserRepos() {

    }

}
