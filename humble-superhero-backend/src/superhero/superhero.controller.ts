import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroDto } from './dto/superhero.dto';
import { SuperheroService } from './superhero.service';

@Controller('superheroes')
export class SuperheroController {
    constructor(private readonly superheroesService: SuperheroService) {}

    @Get()
    getAllSuperheroes() {
        return this.superheroesService.getAllSortedByHumilityScoreDesc();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    addNewSuperhero(@Body() superheroDto: SuperheroDto) {
        this.superheroesService.add(superheroDto);
    }
}
