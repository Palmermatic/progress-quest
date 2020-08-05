import { Component, OnInit } from '@angular/core';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  value = 0;
  max = 100;
  timer$: Observable<any>;
  private reset$ = new Subject();

  constructor() {
    this.observableTimer();
  }

  ngOnInit(): void { }

  tick(): void {

  }

  observableTimer() {
    this.timer$ = timer(100, 100).pipe(takeUntil(this.reset$));
    this.timer$.subscribe(val => {
      if (val === this.max) {
        this.value = 0;
        this.reset$.next();
        this.observableTimer();
      }
      else { this.value = val; }
    });
  }

}
