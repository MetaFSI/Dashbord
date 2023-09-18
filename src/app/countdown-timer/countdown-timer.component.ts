import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() initialMinutes!: number; 
  @Input() cp!: number;
  @Input() urg!:boolean; 
   // Input to specify the initial countdown time
  minutes!: number;
  seconds!: number;

  private subscription!: Subscription;

  constructor() { }

  ngOnInit() {
    this.resetTimer();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  resetTimer() {
  
    if(this.initialMinutes>0){
      this.minutes = this.initialMinutes;
    } else{
      this.minutes = this.initialMinutes*-1
    }
    this.seconds = 0;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = interval(1000).subscribe(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        // Timer has reached 0
        this.subscription.unsubscribe();
      } else if (this.seconds === 0) {
        // Decrement the minutes and set seconds to 59
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    });
  }
}
