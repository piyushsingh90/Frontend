import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'messages',
  template: `<div *ngFor="let message of apiService.messages">
                <mat-card>{{message.msg}}</mat-card>
            </div>`
})
export class MessagesComponent {
  constructor (private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.apiService.getMessages(this.activatedRoute.snapshot.params.id);
  }

}
