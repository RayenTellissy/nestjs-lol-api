import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AccountModule } from './account/account.module';
import { ChallengerModule } from './challenger/challenger.module';
import { ClashModule } from './clash/clash.module';

@Module({
  imports: [AccountModule, ChallengerModule, ClashModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
