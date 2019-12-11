import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@websocket-chat/data';

@Component({
  selector: 'websocket-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class WebsocketChatComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
