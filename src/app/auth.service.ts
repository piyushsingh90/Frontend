import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    messages = [];
    prodUrl = 'https://piyush20.herokuapp.com/';
    localUrl = 'http://localhost:3000/';
    host = this.prodUrl;

    constructor(private http: Http) {}

    registerUser(registerData) {
        this.http.post(this.host +  'register', registerData).subscribe(res => {
        });
    }

    loginUser(loginData) {
        this.http.post(this.host +  'login', loginData).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.json().token);
        });
    }



}
