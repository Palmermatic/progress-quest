import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  attributes: Attribute[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getAttributes();
  }

  getAttributes(): void {
    this.playerService.getAttributes()
      .subscribe(attrs => this.attributes = attrs);
  }
}
