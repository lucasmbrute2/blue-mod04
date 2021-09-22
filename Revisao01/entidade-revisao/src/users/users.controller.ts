import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Users } from './Users';
import { UsersService } from './users.service';

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAll() {
        return this.usersService.findAll()
    }

    @Get(':id')
    getId(@Param() params) {
        return this.usersService.findId(+params.id).catch(e => {
            throw new NotFoundException(e.user)
        })
    }

    @Post()
    create(@Body() user: Users) {
        return this.usersService.create(user)
    }
}
