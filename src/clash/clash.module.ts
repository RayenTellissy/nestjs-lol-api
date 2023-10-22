import { Module } from "@nestjs/common";

import { ClashController } from "./clash.controller";
import { ClashService } from "./clash.service";

@Module({
  controllers: [ClashController],
  providers: [ClashService]
})

export class ClashModule {}