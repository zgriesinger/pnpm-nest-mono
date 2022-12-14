import { Module } from '@nestjs/common';
import { HealthCheckModule } from '@zg/healthcheck';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HealthCheckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
