import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dtos/restaurant.dto';
import { Restaurant } from './schema/restaurant.schema';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('restaurants')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Post('createRestaurant')
  @ApiOperation({summary: 'Create new restaurant'})
  @ApiResponse({status: 201, description: 'Create restaurant in Db'})
  @ApiBody({type: CreateRestaurantDto})
  async createRestaurant(
    @Body() body: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantService.createRestaurant(body);
  }

  @Get('getAllRestaurants')
  @ApiOperation({summary: 'Get list of all restaurants'})
  @ApiResponse({status: 200, description: 'Get list of all restaurants from Db'})
  async getAllRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantService.getAllRestaurants();
  }

  @Get('getRestaurantById:id')
  @ApiOperation({summary: 'Get restaurant by Id'})
  @ApiResponse({status: 200, description: 'Get restaurant by Id from Db'})
  @ApiParam({name: 'id', type: String, description: 'The id of the restaurant'})
  async getRestaurantById(@Param('id') id: string): Promise<Restaurant> {
    return await this.restaurantService.getRestaurantById(id);
  }

  @Delete('deleteRestaurant')
  @ApiOperation({summary: 'Delete restaurant by Id'})
  @ApiResponse({status: 200, description: 'Delete restaurant in Db'})
  @ApiQuery({name: 'id', required: true})
  async deleteRestaurant(@Query('id') id: string) {
    await this.restaurantService.getRestaurantById(id);
    return await this.restaurantService.deleteRestaurant(id);
  }

  @Put('updateRestaurant:id')
  @ApiOperation({summary: 'Update restaurant'})
  @ApiResponse({status: 200, description: 'Update restaurant in Db'})
  @ApiParam({name: 'id', type: String, description: 'The id of the restaurant'})
  @ApiBody({type: UpdateRestaurantDto})
  async updateRestaurant(@Param('id') id: string, @Body() body: UpdateRestaurantDto) {
    await this.restaurantService.getRestaurantById(id);
    return await this.restaurantService.updateRestaurant(id, body);
  }
}
