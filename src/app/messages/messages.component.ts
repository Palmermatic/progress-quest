import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  show = true;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  close() {
    this.show = false;
  }
}
