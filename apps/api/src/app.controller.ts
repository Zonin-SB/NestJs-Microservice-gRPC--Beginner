/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTodoDTO } from 'proto/todo';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller('todo')
@UseInterceptors(GrpcToHttpInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  postTodo(@Body() postTodoDto: PostTodoDTO) {
    return this.appService.postTodo(postTodoDto);
  }

  @Get()
  getTodo() {
    return this.appService.getTodo();
  }
}
