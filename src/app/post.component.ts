import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'post',
  template: `<mat-card>
  <mat-card-header>
      <mat-card-title>
          New Post
      </mat-card-title>
  </mat-card-header>
  <mat-card-content>
      <form>
          <mat-form-field style="width:100%">
              <textarea [(ngModel)]="postMsg" name="post" matInput placeholder="Post"></textarea>
          </mat-form-field>
          <button (click)="post()" mat-raised-button color="primary">Post</button>
      </form>
  </mat-card-content>
</mat-card>`
})
export class PostComponent {
  constructor (private apiService: ApiService) {}
  postMsg = '';

  post() {
    this.apiService.postMessage({msg : this.postMsg});
  }

}
