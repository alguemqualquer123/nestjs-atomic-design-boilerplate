import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { V1Module } from './core/modules/v1/v1.module';

@Module({
  imports: [CoreModule, V1Module],
})
export class AppModule {}
