import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getByID(@Param('id') id: string){
    return await this.userService.getByID(id)
  }


  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }


  @Delete()
  async deleteUserById(@Body('id') id: string){
    return await this.userService.deleteUserById(id)
  }
}
