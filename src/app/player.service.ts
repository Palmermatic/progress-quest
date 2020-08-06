import { Injectable } from '@angular/core';
import { ATTRIBUTES } from './attributes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Player = {
    attributes: ATTRIBUTES
  };

  constructor(private messageService: MessageService) { }

  getPlayer(): Observable<Player> {
    this.messageService.add('PlayerService: fetched Player');
    return of(this.player);
  }

  addXP(attribute: string, xp: number): void {
    const attr = this.player.attributes.find(a => a.name === 'Experience');
    attr.value += xp;
    if (attr.value >= attr.max) {
      attr.value -= attr.max;
      attr.level++;
      this.messageService.add(attr.name + ' is now level ' + attr.level);
    }
  }
}
