import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flight } from './flight.interface';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {

    constructor(
        @InjectRepository(Flights)
        private readonly flightsRepository: Repository<Flights>,
    ) { };

    //Flight CRUD
    async create(flight: Flight): Promise<any> {
        return this.flightsRepository.save(flight);
    }

    async findOne(id: number): Promise<any> {
        return this.flightsRepository.findOne(id);
    }

    async findAll(): Promise<Flights[]> {
        return this.flightsRepository.find();
    }

    async findByCities(origin: string, destiny: string): Promise<any> {
        return await this.flightsRepository.find({ origin: origin, destination: destiny });
    }

    async update(flight: Flight): Promise<UpdateResult> {
        return await this.flightsRepository.update(flight.id, flight);
    }


    async delete(id: number): Promise<any> {
        return this.flightsRepository.delete(id);
    }

    //Cities
    async getFlightOrigins(): Promise<String[]> {
        return this.flightsRepository.query("SELECT DISTINCT origin FROM flights");
    }

    async getFlightDestinations(): Promise<String[]> {
        return this.flightsRepository.query("SELECT DISTINCT destination FROM flights");
    }
}
