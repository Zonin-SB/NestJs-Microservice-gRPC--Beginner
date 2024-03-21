import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { GrpcServerExceptionFilter } from 'nestjs-grpc-exceptions';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: APP_FILTER,
      useClass: GrpcServerExceptionFilter,
    },
  ],
})
export class TodoModule {}
