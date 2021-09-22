import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { MessageInterface } from './Message';
import { MessagesService } from './messages.service';
import { MessageDto } from './MessageDto';
@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService) { }
    @Get()
    getAll() {
        return this.messageService.findAll()
    }

    @Get(':id')
    getById(@Param() params) {
        return this.messageService.findById(+params.id).catch(e => {
            throw new NotFoundException(e.message)
        })
    }

    @Post('add')
    create(@Body() message: MessageDto) {
        return this.messageService.create(message)
    }

    @Put(':id')
    update(@Param() params, @Body() message: MessageDto) {
        return this.messageService.update(+params.id, message)
    }
    @Delete(':id')
    delete(@Param() params) {
        return this.messageService.delete(+params.id)
    }


}
