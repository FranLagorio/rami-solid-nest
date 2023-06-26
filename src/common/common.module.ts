import { Module } from '@nestjs/common';

import { AxiosAdapter } from './adapters/axios.adapter';
import { FetchAdapter } from './adapters/fetch.adapter';
import {
  JsonUsersProvider,
  LocalUsersProvider,
  WebApiUserProvider,
} from './adapters/usersProvider-adapter';

@Module({
  controllers: [],
  providers: [
    AxiosAdapter,
    FetchAdapter,
    JsonUsersProvider,
    LocalUsersProvider,
    WebApiUserProvider,
  ],
  exports: [],
})
export class CommonModule {}
