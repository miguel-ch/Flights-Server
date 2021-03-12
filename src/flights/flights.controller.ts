import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Flight } from './flight.interface';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {

    constructor(private readonly flightService: FlightsService) { }

    //Create
    @Post()
    async create(@Body() flight:Flight):Promise<Flights[]>{
        return this.flightService.create(flight);
    }

    //Read
    @Get()
    findAll(): Promise<any> {
        return this.flightService.findAll();
    }

    @Get(':id')
    findById(@Param() param): Promise<any> {
        return this.flightService.findOne(param.id);
    }

    @Get('cities/origins')
    getOrigins(): Promise<String[]> {
        return this.flightService.getFlightOrigins();
    }

    @Get('cities/destinations')
    getDestinations(): Promise<String[]> {
        return this.flightService.getFlightDestinations();
    }

    @Get(":origin/:dest")
    async getByCities(@Param('origin') origin, @Param('dest') dest): Promise<any> {
        return this.flightService.findByCities(origin, dest);
    }

    //Update
    @Patch(':id/update')
    async update(@Param('id') id, @Body() flight: Flight): Promise<any>{
        flight.id = Number(id);
        return this.flightService.update(flight);
    }

    //Delete
    @Delete(':id/delete')
    async delete(@Param('id') id):Promise<any>{
        return this.flightService.delete(id);
    }
}
