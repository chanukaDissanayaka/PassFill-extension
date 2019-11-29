import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../model/login.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { timeout } from 'rxjs/operators';
import { SignupRequest, SignupResponse } from '../model/signup.model';

@Injectable()
export class MainDataService {
    constructor(private http: HttpClient) { }

    apiUrl: string = environment.API;

    Login(request: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiUrl + 'login', request).pipe(timeout(400000));
    }

    signup(request: SignupRequest): Observable<SignupResponse> {
        return this.http.post<SignupResponse>(this.apiUrl + 'signup', request).pipe(timeout(400000));
    }
}
