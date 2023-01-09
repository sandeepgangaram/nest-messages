import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/message-create.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'AllMessages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    console.log(body);
    return 'Successfully added a message';
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
    return 'Got specific message';
  }
}
