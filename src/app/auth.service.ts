import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    messages = [];
    prodUrl = 'https://piyush20.herokuapp.com/auth/';
    localUrl = 'http://localhost:3000/auth/';
    host = this.prodUrl;

    TOKEN_KEY = 'token';

    constructor(private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    registerUser(registerData) {
        this.http.post<any>(this.host +  'register', registerData).subscribe(res => {
            this.saveToken(res.token);
        });
    }

    loginUser(loginData) {
        this.http.post<any>(this.host +  'login', loginData).subscribe(res => {
            this.saveToken(res.token);
        });
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

}
