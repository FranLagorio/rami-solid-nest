import { Module } from '@nestjs/common';

import { AxiosAdapter } from './adapters/axios.adapter';
import { FetchAdapter } from './adapters/fetch.adapter';
import {
  JsonUsersProvider,
  LocalUserProvider,
  WebApiUserProvider,
} from './adapters/usersProvider-adapter';

@Module({
  controllers: [],
  providers: [
    AxiosAdapter,
    FetchAdapter,
    JsonUsersProvider,
    LocalUserProvider,
    WebApiUserProvider,
  ],
  exports: [],
})
export class CommonModule {}
