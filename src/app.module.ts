import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListEntity } from './todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        url: configService.get('DB_URL'),
        entities: [
          'dist/**/*.entity{.ts,.js}',
          'node_modules/node-modules-internal/dist/**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      }),
    }),
    TypeOrmModule.forFeature([TodoListEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
