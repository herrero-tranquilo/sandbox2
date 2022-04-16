import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  findOne(id): Cat {
    return {
      id,
      name: 'cat' + id,
      age: Math.ceil(Math.random() * 10),
      breed: 'Russian Blue',
    };
  }
  findAll(): Cat[] {
    return [{ id: 1, name: 'cat1', age: 2, breed: 'Russian Blue' }];
  }
}
