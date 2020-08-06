import { Component, OnInit, Input } from '@angular/core';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Input() player: Player;

  value = 0;
  max = 100;
  timer$: Observable<any>;
  private reset$ = new Subject();

  constructor(private playerService: PlayerService) {
    this.observableTimer();
  }

  ngOnInit(): void { }

  observableTimer() {
    this.timer$ = timer(100, 100).pipe(takeUntil(this.reset$));
    this.timer$.subscribe(val => {
      if (val === this.max) {
        this.value = 0;
        this.playerService.addXP('Experience', 1);
        this.reset$.next();
        this.observableTimer();
      }
      else { this.value = val; }
    });
  }

}
