import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
describe('Cats Controller', () => {
  let catController: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catController = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(Array.isArray(catController.getCats())).toBe(true);
  });
});
