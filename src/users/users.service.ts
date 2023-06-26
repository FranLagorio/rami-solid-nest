/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersProvider } from 'src/common/interface/usersProvider-adapter.interface';

// import { UpdateUserDto } from './dto/update-user.dto';

const providersNames = {
  json: 'JsonUserProvider',
  local: 'LocalUserProvider',
  api: 'WebApiUserProvider',
};

@Injectable()
export class UsersService {
  constructor(
    @Inject(providersNames.json)
    private readonly usersProvider: UsersProvider,
  ) {}

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

interface HasEmail {
  name: string;
  email: string;
}

interface HasPhoneNumber {
  name: string;
  phone: string;
}

/* function contactPeople(method: "email", people: HasEmail): void;
function contactPeople(method: "phone", people: HasPhoneNumber): void;
function contactPeople(
  method: "email" | "phone",
  people: HasEmail | HasPhoneNumber
): void {
  if (method === "email") {
    console.log("Name: ", (people as HasEmail).name);
    console.log("Email: ", (people as HasEmail).email);
  } else {
    console.log("Name: ", (people as HasPhoneNumber).name);
    console.log("Phone: ", (people as HasPhoneNumber).phone);
  }
}

contactPeople("email", { name: "Nahuel", email: "12345678" });
! Error
// contactPeople('email', { name: 'Nahuel', phone: '12345678' });
 */
