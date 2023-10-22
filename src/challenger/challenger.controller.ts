import { Controller, Get, Param } from "@nestjs/common";

import { ChallengerService } from "./challenger.service";

@Controller("challenger")
export class ChallengerController {
  constructor(private readonly ChallengerService: ChallengerService) {}

  @Get(":region")
  getChallengerLeague(@Param("region") region: string) {
    return this.ChallengerService.getChallengerLeague(region)
  }
}