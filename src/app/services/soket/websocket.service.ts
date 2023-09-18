import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor(private socket: Socket) {}

  listenForData() {
    // Use the 'fromEvent' method to listen for a specific event from the WebSocket server
    // Replace 'eventName' with the actual event name you want to listen to
    return this.socket.fromEvent('findAllDashbord');
  }

  // Emit a custom event to the server
  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  // Listen for custom events from the server
  onMessage() {
    return this.socket.fromEvent('chat message');
  }

  // Connect to a WebSocket server using a specific URL
  connectToServer(url: string) {
    this.socket.disconnect(); // Disconnect from the current server (if any)
    this.socket.ioSocket.io.uri = url; // Set the new server URL
    this.socket.connect(); // Connect to the new server
  }
}
