import { Provider } from '@nestjs/common';
import Bull from 'bull';

export const bullProvider: Provider = {
  provide: 'BULL_QUEUE',
  useFactory: () => {
    return new Bull('default', {
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    });
  },
};
