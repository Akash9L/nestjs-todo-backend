import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum TodoListStatusEnum {
    INCOMPLETE = 'INCOMPLETE',
    COMPLETED = 'COMPLETE',
}
@Entity()
export class TodoListEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 50, nullable: true, default: TodoListStatusEnum.INCOMPLETE })
    status: TodoListStatusEnum;

    @CreateDateColumn({ nullable: true })
    created_at: Date;

    @UpdateDateColumn({ nullable: true })
    updated_at: Date;
}
