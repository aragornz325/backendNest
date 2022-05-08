import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    //private config: ConfigService
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello() {
    const apiKey = this.configService.apiKey;
    const db = this.configService.database.name;
    return {
      messege: 'Hello to Shoppit API-REST',
      apikey: `the ApiKey is :${apiKey}`,
      dbName: `and the dbName is:${db}`,
    };
  }
}
