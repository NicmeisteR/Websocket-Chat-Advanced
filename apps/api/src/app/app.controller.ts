import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('messages')
  getData() {
    return this.appService.getData();
  }

  @Post('addMsg')
  addMsg() {
    return this.appService.addMsg();
  }
}