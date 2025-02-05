import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { SuperheroController } from './superhero/superhero.controller';
import { SuperheroService } from './superhero/superhero.service';

@Module({
  imports: [SuperheroModule],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class AppModule {}
