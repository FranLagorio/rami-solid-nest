/* 
? En este script lo que busco es que cada el USER SERVICE no tenga la responsabilidad de tener un metodo para cada fuente de datos
? 

* Principio de /Sustitucion de Liskov/ - utilizo implements para que cumplan con los metodos requeridos

* Utilizo el pincipio /DRY/ ya que sino tendria que hacer otra clase para fetch y seria repetir codigo

* Utilizo inyeccion de dependencia para que las consultas solo dependan de la variable/propiedad http que puede ser Fetch o Axios
*/

import { Injectable } from '@nestjs/common';

import { UsersProvider } from '../interface/usersProvider-adapter.interface';
import { User, Users } from 'src/users/entities/user.entity';
import jsonUsers from '../../data/usersLocalJson.json';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpAdapter } from '../interface/http-adapter.interface';
import { AxiosAdapter } from './axios.adapter';

const userLocalData = {
  users: [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      username: 'atuny0',
      password: '9uQFF1Lh',
      birthDate: new Date('2000-12-25'),
      image: 'https://robohash.org/hicveldicta.png',
      bloodGroup: 'A−',
      height: 189,
      weight: 75.4,
      eyeColor: 'Green',
      hair: {
        color: 'Black',
        type: 'Strands',
      },
      domain: 'slashdot.org',
      ip: '117.29.86.254',
      address: {
        address: '1745 T Street Southeast',
        city: 'Washington',
        coordinates: {
          lat: 38.867033,
          lng: -76.979235,
        },
        postalCode: '20020',
        state: 'DC',
      },
      macAddress: '13:69:BA:56:A3:74',
      university: 'Capitol University',
      bank: {
        cardExpire: '06/22',
        cardNumber: '50380955204220685',
        cardType: 'maestro',
        currency: 'Peso',
        iban: 'NO17 0695 2754 967',
      },
      company: {
        address: {
          address: '629 Debbie Drive',
          city: 'Nashville',
          coordinates: {
            lat: 36.208114,
            lng: -86.58621199999999,
          },
          postalCode: '37076',
          state: 'TN',
        },
        department: 'Marketing',
        name: "Blanda-O'Keefe",
        title: 'Help Desk Operator',
      },
      ein: '20-9487066',
      ssn: '661-64-2976',
      userAgent:
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
    },
  ],
  total: 1,
  skip: 0,
  limit: 1,
};

@Injectable()
export class JsonUsersProvider implements UsersProvider {
  async getUsers(): Promise<Users> {
    const response = jsonUsers;

    const usersSerialized = response?.users.map((user) => {
      const birthDate = new Date(user.birthDate);
      return { ...user, birthDate };
    });

    const data = { ...response, users: usersSerialized };
    return data as Users;
  }

  async getUserById(id: number): Promise<User> {
    const user = jsonUsers.users.find((user) => user.id === id);

    if (user !== undefined) {
      const birthDate = new Date(user.birthDate);
      const userSerialized = { ...user, birthDate };
      return userSerialized as User;
    }

    throw new Error('User not found');
  }
}

@Injectable()
export class LocalUsersProvider implements UsersProvider {
  async getUsers(): Promise<Users> {
    return userLocalData as Users;
  }

  async getUserById(id: number): Promise<User> {
    const user = userLocalData.users.find((user) => user.id === id);
    if (user !== undefined) {
      return user as User;
    }

    throw new Error('User not found');
  }
}

@Injectable()
export class WebApiUserProvider implements UsersProvider {
  /*
   constructor(private http: FetchAdapter) {}
   */
  private http: AxiosAdapter;
  constructor() {
    this.http = new AxiosAdapter();
  }

  async getUsers(): Promise<Users> {
    const data = await this.http.get<Users>('https://dummyjson.com/users');
    return data;
  }

  async getUserById(id: number): Promise<User> {
    const data = await this.http.get<User>(`https://dummyjson.com/users/${id}`);
    return data;
  }
}
