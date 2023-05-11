import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoListEntity, TodoListStatusEnum } from './todo.entity';
import { Repository } from 'typeorm';
import { TaskDto, UpdateTaskDto } from './task.dto';

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
    return this.todoListRepository.find({
      order: {
        created_at: 'DESC'
      }
    });
  }

  addTask(taskDto: TaskDto) {
    const task = new TodoListEntity()
    task.name = taskDto.name;
    task.description = taskDto.description;
    task.status = TodoListStatusEnum.INCOMPLETE;
    return this.todoListRepository.save(task);
  }

  updateTask(taskId: number, updateDto: UpdateTaskDto) {
    return this.todoListRepository.update(taskId, updateDto)
  }

  deleteTaskById(id: number) {
    return this.todoListRepository.delete(id);
  }

}
