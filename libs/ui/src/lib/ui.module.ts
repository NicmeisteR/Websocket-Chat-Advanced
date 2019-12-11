import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketChatComponent } from './chat/chat.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WebsocketChatComponent],
  exports: [WebsocketChatComponent]
})
export class UiModule {}
