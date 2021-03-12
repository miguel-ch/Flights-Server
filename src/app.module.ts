import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cars } from './cars/cars.entity';
import { CarsModule } from './cars/cars.module';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'transportation',
      entities: [Cars, Flights],
      synchronize: true,
    }),
    CarsModule,
    FlightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
