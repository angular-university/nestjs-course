

import * as mongoose from 'mongoose';
import {MONGO_CONNECTION} from '../constants';
import {Module} from '@nestjs/common';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(MONGO_CONNECTION),
  },
];



@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
