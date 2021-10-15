import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '123',
      name: 'Ove',
      username: 'oliver',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((e) => e.username === username);
  }
}
