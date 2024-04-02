import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getAll(){
        return await this.userService.getAll()
    }


    @Post()
    async create(@Body() user: UserDto){
        return await this.userService.create(user)
    }
}