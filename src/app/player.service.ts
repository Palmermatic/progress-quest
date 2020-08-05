import { Injectable } from '@angular/core';
import { ATTRIBUTES } from './attributes';
import { Attribute } from './attribute';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  ATTRIBUTES: Attribute[] = ATTRIBUTES;

  constructor(private messageService: MessageService) { }

  getAttributes(): Observable<Attribute[]> {
    this.messageService.add('PlayerService: fetched attributes');
    return of(ATTRIBUTES);
  }
}
