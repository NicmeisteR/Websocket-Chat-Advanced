import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@websocket-chat/data';


@Component({
  selector: 'websocket-chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  messages: Message[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Message[]>('/api/messages').subscribe(t => (this.messages = t));
  }

  addMsg() {
    this.http.post('/api/addMsg', {}).subscribe(() => {
      this.fetch();
    });
  }
  title = 'websocket-chat';
}