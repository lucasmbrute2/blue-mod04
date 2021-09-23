import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MessagesModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule { }
