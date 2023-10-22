import { Controller, Get, Param } from "@nestjs/common";

import { ClashService } from "./clash.service";

@Controller("clash")
export class ClashController {
  constructor(private readonly ClashService: ClashService) {}

  @Get(":region")
  getUpcomingTournaments(@Param("region") region: string) {
    return this.ClashService.getUpcomingTournaments(region)
  }
}