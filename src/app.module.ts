import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { TrainerModule } from './context/trainer/trainer.module';

@Module({
  imports: [TrainerModule, RouterModule.register([{ path: "/api", module: TrainerModule }])],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
