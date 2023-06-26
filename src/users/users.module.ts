import { Module, Provider } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CommonModule } from 'src/common/common.module';
import {
  LocalUsersProvider,
  JsonUsersProvider,
  WebApiUserProvider,
} from 'src/common/adapters/usersProvider-adapter';

const JsonProvider: Provider = {
  provide: 'JsonUserProvider',
  useFactory: () => {
    return new JsonUsersProvider();
  },
};

const LocalProvider: Provider = {
  provide: 'LocalUserProvider',
  useFactory: () => {
    return new LocalUsersProvider();
  },
};

const ApiProvider: Provider = {
  provide: 'WebApiUserProvider',
  useFactory: () => {
    return new WebApiUserProvider();
  },
};

@Module({
  controllers: [UsersController],
  providers: [UsersService, JsonProvider, LocalProvider, ApiProvider],
  imports: [CommonModule],
})
export class UsersModule {}
