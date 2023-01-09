import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'AllMessages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
    return 'Successfully added a message';
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
    return 'Got specific message';
  }
}
