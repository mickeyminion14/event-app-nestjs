import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUsersDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  getUsers(@Param() params: any, @Query() query: any): string {
    return `Hello world from users controller ${JSON.stringify(params)}${JSON.stringify(query)}`;
  }

  @Post()
  createUser(@Body() body: CreateUsersDto) {
    console.log(body);

    return `${JSON.stringify(body)}`;
  }
}
