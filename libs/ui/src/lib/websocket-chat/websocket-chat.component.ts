import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@websocket-chat/data';

@Component({
  selector: 'websocket-chat-websocket-chat',
  templateUrl: './websocket-chat.component.html',
  styleUrls: ['./websocket-chat.component.scss']
})

export class WebsocketChatComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
