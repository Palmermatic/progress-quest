import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: any[] = [];

  add(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.messages.push({ textOrTpl, ...options });
  }

  clear(message) {
    this.messages = this.messages.filter(m => m !== message);
  }
}
