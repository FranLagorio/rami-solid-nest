import { Module } from '@nestjs/common';

import { AxiosAdapter } from './adapters/axios.adapter';
import { FetchAdapter } from './adapters/fetch.adapter';
import {
  JsonUsersProvider,
  LocalProviderAdapter,
  WebApiProvider,
} from './adapters/usersProvider-adapter';

@Module({
  controllers: [],
  providers: [
    AxiosAdapter,
    FetchAdapter,
    JsonUsersProvider,
    LocalProviderAdapter,
    WebApiProvider,
  ],
  exports: [],
})
export class CommonModule {}
