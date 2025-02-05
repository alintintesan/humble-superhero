import { Injectable } from '@nestjs/common';
import { SuperheroDto } from './dto/superhero.dto';

@Injectable()
export class SuperheroService {
    private superheroes: SuperheroDto[] = [];

    getAllSortedByHumilityScoreDesc(): SuperheroDto[] {
        return this.superheroes.sort((hero1, hero2) => hero2.humilityScore - hero1.humilityScore);
    }

    add(superhero: SuperheroDto): void {
        this.superheroes.push(superhero);
    }
}
