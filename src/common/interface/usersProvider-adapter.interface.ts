import { User, UsersAPI } from 'src/users/entities/user.entity';

export interface UsersProvider {
  getUsers(): Promise<UsersAPI>;
  getUserById(id: number): Promise<User>;
}
