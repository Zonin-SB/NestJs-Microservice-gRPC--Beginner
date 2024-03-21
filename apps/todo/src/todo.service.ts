/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { GrpcNotFoundException } from 'nestjs-grpc-exceptions';
import { PostTodoDTO, Todo, Todos } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'first todo',
      isDone: false,
    },
  ];

  postTodo(postTodoDTO: PostTodoDTO): Todo {
    const todo: Todo = {
      id: this.todos.length + 1,
      description: postTodoDTO.description,
      isDone: postTodoDTO.isDone,
    };
    this.todos.push(todo);
    return todo;
  }

  getTodo(): Todos {
    throw new GrpcNotFoundException("User Not Found.");
    return { Todos: this.todos };
  }
}
