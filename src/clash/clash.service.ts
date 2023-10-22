import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class ClashService {
  async getUpcomingTournaments(region: string) {
    const response = await axios.get(`https://${region}.api.riotgames.com/lol/clash/v1/tournaments`, {
      headers: {
        "X-Riot-Token": process.env.riotToken
      }
    })
    return response.data
  }
}