import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
  <mat-card>
        <mat-card-header>
            <mat-card-title>
                Login
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field style="width:100%">
                    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Email" type="email">
                </mat-form-field>
                <mat-form-field style="width:100%">
                    <input [(ngModel)]="loginData.pwd" matInput placeholder="Password" name="password" type="password">
                </mat-form-field>
                <button (click)="post()" mat-raised-button color="primary">Login</button>
            </form>
        </mat-card-content>
  </mat-card>
  `
})
export class LoginComponent {
    loginData = {};

    constructor (private authService: AuthService) {}

    post() {
        this.authService.loginUser(this.loginData);
    }
}
