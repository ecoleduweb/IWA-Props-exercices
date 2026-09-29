import Rank from "./RankEnum"
import LightSaberColor from "./LightSaberColorEnum"

interface ForceWeilder {
  name: string
  lightsaberColor: LightSaberColor
  rank: Rank
  forceLevel: number
}


export type { ForceWeilder }