import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interface/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json();
  }
}
