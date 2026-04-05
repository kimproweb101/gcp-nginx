// nest-api/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // ✨ NODE_ENV 값에 따라 읽어올 .env 파일을 다르게 설정!
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',

      // 운영 환경(도커/GCP 등)에서는 파일 대신 시스템 환경 변수를 쓰도록 무시 옵션 추가
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
