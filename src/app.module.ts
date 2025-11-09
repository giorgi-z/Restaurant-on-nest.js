import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RestaurantModule,
    // connection string
    MongooseModule.forRoot('mongodb://localhost/restaurant'),
  ]
})
export class AppModule {}
