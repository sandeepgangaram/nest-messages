import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'AllMessages';
  }

  @Post()
  createMessage() {
    return 'Successfully added a message';
  }

  @Get('/:id')
  getMessage() {
    return 'Got specific message';
  }
}
