import { IsString } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { TodoListEntity } from "./todo.entity";

export class TaskDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;
}

export class UpdateTaskDto extends PartialType(TodoListEntity) { }