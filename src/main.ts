
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // ← important to allow frontend to talk to backend
  app.use(bodyParser.json({limit: '50mb'}));
  await app.listen(3000);

  // Below log shows localhost:3000 in console 
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
