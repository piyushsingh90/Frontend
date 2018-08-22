import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  template: `
  <mat-card>
        <mat-card-header>
            <mat-card-title>
                Profile
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <mat-list>
                <mat-list-item>Name: Test</mat-list-item>
                <mat-list-item>Email: {{profile?.email}}</mat-list-item>
                <mat-list-item>Description: {{profile?.description}}</mat-list-item>
            </mat-list>
        </mat-card-content>
  </mat-card>
  `
})
export class ProfileComponent {

    constructor (private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

    profile;

    ngOnInit(){
        this.apiService.getProfile(this.activatedRoute.snapshot.params.id).subscribe(data => {
            this.profile = data.json();
        });
    }

}
