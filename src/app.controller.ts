import { Body, Controller, Get, Post, Delete, ValidationPipe, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto } from './task.dto';

@Controller('api')
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

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.appService.deleteTaskById(Number(id));
  }

}
