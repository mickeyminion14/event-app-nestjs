import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entitites/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
