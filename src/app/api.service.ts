import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    messages = [];
    users = [];
    prodUrl = 'https://piyush20.herokuapp.com/';
    localUrl = 'http://localhost:3000/';
    host = this.prodUrl;

    constructor(private http: Http) {}

    getMessages() {
        this.http.get(this.host + 'posts').subscribe(res => {
            this.messages = res.json();
        });
    }

    getUsers() {
        this.http.get(this.host + 'users').subscribe(res => {
            this.users = res.json();
        });
    }

    getProfile(id) {
        return this.http.get(this.host + 'profile/' + id);
    }



}
