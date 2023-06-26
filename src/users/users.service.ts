/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersProvider } from 'src/common/interface/usersProvider-adapter.interface';
import {
  JsonUsersProvider,
  LocalUserProvider,
  WebApiUserProvider,
} from 'src/common/adapters/usersProvider-adapter';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private usersProvider: UsersProvider;
  constructor() {
    //! Esto genera un acoplamiento fuerte - tengo entendido que esta mal, no pude lograr hacer andar por ahora que el provider venga del controller
    //! me queda pendiente revisarlo, en teoria es con el decorador @Inject() de NestJs
    //! tengo dudas todavia de este caso
    this.usersProvider = new WebApiUserProvider();
  }

  create(createUserDto: CreateUserDto) {
    return `User created : ${JSON.stringify(createUserDto)}`;
  }

  async findAll() {
    try {
      const data = await this.usersProvider.getUsers();
      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: number) {
    try {
      const data = await this.usersProvider.getUserById(id);
      return data;
    } catch (error) {
      throw new BadRequestException(`User with id:${id} not found`);
    }
  }
}
