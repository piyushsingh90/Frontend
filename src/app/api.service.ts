import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    messages = [];

    constructor(private http: Http) {}

    getMessages() {
        this.http.get('https://piyush20.herokuapp.com/posts').subscribe(res => {
            this.messages = res.json();
        });
    }

    sendUserRegistration(registerData) {
        this.http.post('https://piyush20.herokuapp.com/register', registerData).subscribe(res => {
        });
    }



}
