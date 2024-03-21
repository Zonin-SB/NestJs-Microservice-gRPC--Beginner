import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PostTodoDTO, TODO_SERVICE_NAME, TodoServiceClient } from 'proto/todo';

@Injectable()
export class AppService implements OnModuleInit {
  private todoServiceClient: TodoServiceClient;
  constructor(@Inject('todo') private client: ClientGrpc) {}

  onModuleInit() {
    this.todoServiceClient =
      this.client.getService<TodoServiceClient>(TODO_SERVICE_NAME);
  }

  postTodo(postTodoDTO: PostTodoDTO) {
    return this.todoServiceClient.postTodo(postTodoDTO);
  }

  getTodo() {
    return this.todoServiceClient.getTodo({});
  }
}
