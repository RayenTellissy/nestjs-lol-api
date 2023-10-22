import { Module } from "@nestjs/common";

import { ChallengerController } from "./challenger.controller";
import { ChallengerService } from "./challenger.service";

@Module({
  controllers: [ChallengerController],
  providers: [ChallengerService]
})

export class ChallengerModule {}