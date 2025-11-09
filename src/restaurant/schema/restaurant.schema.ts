import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema()
export class Contact {
  @Prop()
  phone: string;

  @Prop()
  email: string;
}

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  contact: Contact;

  @Prop()
  rating: number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
