import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Users } from './Users';
import { UsersService } from './users.service';
import { UsersDto } from './UsersDto';

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
    create(@Body() user: UsersDto) {
        return this.usersService.create(user)

    }
    @Put(':id')
    update(@Body() user: Users, @Param() params) {
        return this.usersService.update(+params.id, user)
    }
    @Delete(':id')
    delete(@Param() params) {
        return this.usersService.delete(+params.id).catch(e => {
            throw new NotFoundException(e.user)
        })
    }
}
