import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // declare empty messages array of type: string
  messages: string[] = [];

  // add message of type string to messages array
  add(message: string) {
    this.messages.push(message);
  }

  // function to empty messages array
  clear() {
    this.messages = [];
  }
}