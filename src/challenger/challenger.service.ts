import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class ChallengerService {
  async getChallengerLeague(region: string) {
    const response = await axios.get(`https://${region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`, {
      headers: {
        "X-Riot-Token": process.env.riotToken
      }
    })
    return response.data
  }
}