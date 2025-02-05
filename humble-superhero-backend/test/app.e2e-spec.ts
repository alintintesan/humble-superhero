import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { SuperheroController } from '../src/superhero/superhero.controller';
import { SuperheroService } from '../src/superhero/superhero.service';

describe('/superheroes', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should try adding a new superhero with invalid humility score', () => {
    const invalidSuperhero = {
      name: "Batman",
      superpower: "Being rich",
      humilityScore: 100
    };

    return request(app.getHttpServer())
      .post('/superheroes')
      .send(invalidSuperhero)
      .expect(400)
      .expect(({ body }) => {
        expect(body.message).toEqual(['humilityScore must not be greater than 10']);
      });
  });
});
