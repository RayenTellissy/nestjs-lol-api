import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AccountService {
  
  async getSummonerDetails(summonerName: string, region: string) {
    const response = await axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
      headers: {
        "X-Riot-Token": process.env.riotToken
      }
    })
    return response.data
  }
}