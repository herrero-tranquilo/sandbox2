import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  getCat(@Param('id') id: string): Cat {
    return this.catsService.findOne(id);
  }
  @Get()
  getCats(): Cat[] {
    return this.catsService.findAll();
  }
}
