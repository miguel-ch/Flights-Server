import { Body, Controller, Get, Param, Post, Req, Request } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carService: CarsService) { }

    @Get()
    findAll(@Req() request: Request): {} {
        return this.carService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): {} {
        return this.carService.findOne(param.id);
    }
}
