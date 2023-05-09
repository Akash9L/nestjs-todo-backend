import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoListEntity, TodoListStatusEnum } from './todo.entity';
import { Repository } from 'typeorm';
import { TaskDto } from './task.dto';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(TodoListEntity)
    private todoListRepository: Repository<TodoListEntity>
  ) { }

  healthCheck() {
    return 'Hello World!';
  }

  getAllTasks() {
    return this.todoListRepository.find();
  }

  addTask(taskDto: TaskDto) {
    const task = new TodoListEntity()
    task.name = taskDto.name;
    task.description = taskDto.description;
    task.status = TodoListStatusEnum.INCOMPLETE;
    return this.todoListRepository.save(task);
  }

  deleteTaskById(id: number) {
    return this.todoListRepository.delete(id);
  }

}
