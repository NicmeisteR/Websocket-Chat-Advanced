import { Injectable } from '@nestjs/common';
import { Message } from '@websocket-chat/data';


@Injectable()
export class AppService {
  messages: Message[] = [{ title: 'message 1' }, { title: 'message 2' }];

  getData(): Message[] {
    return this.messages;
  }

  addMsg() {
    this.messages.push({
      title: `New messages${Math.floor(Math.random() * 1000)}`
    });
  }
}