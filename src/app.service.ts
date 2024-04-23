import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheModule: Cache) {}

  async getHello() {
    const list = [
      { name: '1', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 3 },
      { name: '4', value: 4 },
      { name: '5', value: 5 },
    ];
    await this.cacheModule.set('key', list, 1000 * 60);
    console.log(await this.cacheModule.get('key'));
    return 'Hello World~~~~!~!!~!!';
  }

  async testCache() {
    const result = await this.cacheModule.get('key');
    console.log(result);
    // return result;
    return 'test';
  }
}
