import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Attribute } from '../attribute';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player = {
    name: 'noob',
    startTime: new Date(),
    attributes: null
  };

  age = new Date().getMilliseconds() - this.player.startTime.getMilliseconds();


  constructor(private playerService: PlayerService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAttributes();
  }

  getAttributes(): void {
    this.playerService.getAttributes()
      .subscribe(attrs => this.player.attributes = attrs);
  }
}
