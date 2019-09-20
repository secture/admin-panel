import { Team } from '@/models/teams'

export interface InfoPlayers {
  data: DataPlayers
}

export interface DataPlayers {
  page: Number
  pageSize: Number
  results: Player[]
  totalResults: Number
  currentPlayer?: Player
}

export interface PlayerStats {
  weekNumber: Number
  totalPoints: Number
}

export interface Player {
  points: Number
  weekPoints: Number
  images: any
  id: string
  team: Team
  name: string
  lastSeasonPoints: Number
  nickname: string
  slug: string
  birthDate: string
  birthplace: string
  positionId: Number
  position: string
  height: number
  image30x30: string
  image250x250: string
  image96x96: string
  playerStats: PlayerStats[]
  marketValue: Number
  playerStatus: string
}
