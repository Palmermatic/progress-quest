import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  value = 0;
  max = 100;
  timeLeft = 60;
  interval;
  subscribeTimer: any;

  constructor() {
    setInterval(() => {
      if (this.value >= this.max) {
        this.value = 0;
        this.tick();
      }
      else {
        this.value++;
      }
    }, 100);
  }

  ngOnInit(): void { }

  tick(): void {

  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
