import { User, Users } from 'src/users/entities/user.entity';

export interface UsersProvider {
  getUsers(): Promise<Users>;
  getUserById(id: number): Promise<User>;
}
