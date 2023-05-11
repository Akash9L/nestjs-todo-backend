import { Body, Controller, Get, Post, Delete, ValidationPipe, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto, UpdateTaskDto } from './task.dto';

@Controller('api/task')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('health-check')
  healthCheck(): string {
    return this.appService.healthCheck();
  }

  @Get('')
  getAllTasks() {
    return this.appService.getAllTasks();
  }

  @Post('')
  createItem(@Body(new ValidationPipe()) taskDto: TaskDto) {
    return this.appService.addTask(taskDto);
  }

  @Patch(':id')
  updateItem(@Param('id') id: string, @Body(new ValidationPipe()) taskDto: UpdateTaskDto) {
    return this.appService.updateTask(Number(id), taskDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.appService.deleteTaskById(Number(id));
  }

}
