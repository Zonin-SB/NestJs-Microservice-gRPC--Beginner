import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PostTodoDTO, Todo, TodoServiceController, Todos } from 'proto/todo';
import { TodoService } from './todo.service';

@Controller()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}
  @GrpcMethod('TodoService', 'PostTodo')
  postTodo(postTodoDTO: PostTodoDTO): Todo {
    return this.todoService.postTodo(postTodoDTO);
  }
  @GrpcMethod('TodoService', 'GetTodo')
  getTodo(): Todos {
    return this.todoService.getTodo();
  }
}
