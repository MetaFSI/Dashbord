import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/soket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
best3T  :any[] = [];
worst3T :any[] = [];
sectours:any[]=[]
command :any[]=[]
expOrder:any[]=[]


// Soket handling
message        !: string;
receivedMessage!: string;
receivedData   : any;

constructor(private websocketService: WebsocketService) {}

sendMessage() {this.websocketService.sendMessage(this.message); this.message = ''}
connectToDifferentServer(url: string) { this.websocketService.connectToServer(url);}

ngOnInit() {
    this.websocketService.onMessage().subscribe((message: any) => {
      this.receivedMessage = message;
    });
  
    this.websocketService.listenForData().subscribe((data) => {
      this.receivedData = data;
      console.log(this.receivedData,  this.receivedData.secteurs.filter((item:any)=>item.nextDepart!==null)      );
  
      this.handelData(data);   
      this.mergeArrays(data); 
    });
  }

  handelData(data:any) {
    this.best3T = this.getTop3ByLigne(data.tirStats);
    this.worst3T= this.getBottom3ByLigne(data.tirStats.sort((a:any, b:any) => a.LIGNE- b.LIGNE));

    this.sectours = this.sortByClosestTime(this.sectours);
    this.expOrder.sort((a:any, b:any) => a.leftTime - b.leftTime);
  }
  getTop3ByLigne(arr:any) {
    arr.sort((a:any, b:any) => b.LIGNE - a.LIGNE);
    return arr.slice(0, 3);
  }
  getBottom3ByLigne(arr: any[]) {
    arr.sort((a, b) => a.LIGNE - b.LIGNE);
    return arr.slice(0, 3)
  }












// Merge  waiting commande with secteurs
mergeArrays(data: any): void {
  data.waitingCmd.forEach((firstObj: any) => {
    const matchingSecondObj = data.secteurs.find(
      (secondObj: any) =>
        firstObj.EVT_SECT === secondObj.code &&
        firstObj.nextDepart !== null
    );
    if (matchingSecondObj) {
      const existingObjIndex = this.command.findIndex(
        (existingObj: any) => existingObj.EVT_SECT === firstObj.EVT_SECT
      );
      if (existingObjIndex !== -1) {
        const existingObj = this.command[existingObjIndex];
        Object.assign(existingObj, firstObj, matchingSecondObj);
      } else {
        const mergedObj = { ...firstObj, ...matchingSecondObj };
        this.command.push(mergedObj);
      }
    }
  });
}







 

  sortByClosestTime(data: any[]): any[] {
    // Sort the data by the closest time
    data.sort((a, b) => {
      const timeA = a.nextDepart.split(':');
      const timeB = b.nextDepart.split(':');

      const hoursA = parseInt(timeA[0], 10);
      const hoursB = parseInt(timeB[0], 10);

      if (hoursA === hoursB) {
        // If hours are the same, compare minutes
        const minutesA = parseInt(timeA[1], 10);
        const minutesB = parseInt(timeB[1], 10);
        return minutesA - minutesB;
      } else {
        return hoursA - hoursB;
      }
    });

    return data;
  }
  calculateTimeDifference(inputTime: string): string {
    // Get the current date and time
    const currentTime = new Date();
  
    // Extract the hours and minutes from the input time string
    const inputHours = parseInt(inputTime.substring(0, 2), 10);
    const inputMinutes = parseInt(inputTime.substring(2, 4), 10);
  
    // Set the current date and time to match the input hours and minutes
    currentTime.setHours(inputHours, inputMinutes, 0, 0);
  
    // Calculate the time difference in milliseconds
    const timeDifferenceMs = currentTime.getTime() - Date.now();
  
    // Check if the time is in the past or future
    const isPast = timeDifferenceMs < 0;
    const isFuture = timeDifferenceMs > 0;
  
    // Calculate the absolute time difference
    const absoluteDifferenceMs = Math.abs(timeDifferenceMs);
  
    // Calculate hours and minutes
    const hours = Math.floor(absoluteDifferenceMs / 3600000);
    const minutes = Math.floor((absoluteDifferenceMs % 3600000) / 60000);
  
    // Construct the result string
    let result = '';
  
    if (isPast) {
      result += '';
    } else if (isFuture) {
      result += ' ';
    }
  
    if (hours > 0) {
      result += `${hours} H${hours > 1 ? '' : ''} `;
    }
  
    if (minutes > 0) {
      result += `${minutes} M${minutes > 1 ? '' : ''}`;
    }
  
    return result.trim();
  }
 getTimeDifferenceInMinutes(targetTime: string): number {
    // Parse the target time string
    const targetParts = targetTime.split(':');
    if (targetParts.length !== 3) {
      throw new Error('Invalid time format. Use HH:mm:ss');
    }
  
    const targetHour = parseInt(targetParts[0], 10);
    const targetMinute = parseInt(targetParts[1], 10);
    const targetSecond = parseInt(targetParts[2], 10);
  
    // Get the current time
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
  
    // Calculate the time difference in minutes
    const hoursDifference = targetHour - currentHour;
    const minutesDifference = targetMinute - currentMinute;
    const secondsDifference = targetSecond - currentSecond;
  
    const totalMinutesDifference = hoursDifference * 60 + minutesDifference + secondsDifference / 60;
  
    // Round the result to the nearest integer
    const roundedDifference = Math.round(totalMinutesDifference);
  
    return roundedDifference;
  }

  pushHndle(){
   console.log(this.best3T, this.worst3T)
  }
}