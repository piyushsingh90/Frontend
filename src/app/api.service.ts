import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    messages = [];
    users = [];
    prodUrl = 'https://piyush20.herokuapp.com/';
    localUrl = 'http://localhost:3000/';
    host = this.prodUrl;

    constructor(private http: HttpClient) {}

    getMessages(userId) {
        this.http.get<any>(this.host + 'posts/' + userId).subscribe(res => {
            this.messages = res;
        });
    }

    postMessage(message) {
        this.http.post(this.host + 'post', message).subscribe(res => {
        });
    }

    getUsers() {
        this.http.get<any>(this.host + 'users').subscribe(res => {
            this.users = res;
        });
    }

    getProfile(id) {
        return this.http.get(this.host + 'profile/' + id);
    }



}
