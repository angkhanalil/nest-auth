import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a user if found', async () => {
      const username = 'john';
      const user = await service.findOne(username);
      expect(user).toEqual({
        userId: 1,
        username: 'john',
        password: 'changeme', //expect.any(String), // The password is hashed, so we just expect a string
      });
    });

    it('should return undefined if user is not found', async () => {
      const username = 'nonexistent';
      const user = await service.findOne(username);
      expect(user).toBeUndefined();
    });
  });

  it('should return a user if found', async () => {
    const username = 'john';
    const user = await service.findOne(username);
    expect(user).toEqual({
      userId: 1,
      username: 'john',
      password: 'changeme', //expect.any(String), // The password is hashed, so we just expect a string
    });
  });
});
