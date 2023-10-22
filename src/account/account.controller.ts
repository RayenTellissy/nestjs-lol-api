import { Controller, Get, Body } from "@nestjs/common";
import { AccountService } from "./account.service";

@Controller("account")
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Get("info")
  getSummonerDetails(
    @Body("summonerName") summonerName: string,
    @Body("region") region: string
  ) {
    return this.AccountService.getSummonerDetails(summonerName, region)
  }
}
