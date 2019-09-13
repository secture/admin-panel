export interface InfoTeams {
  data: DataTeams
}

export interface DataTeams {
  page: Number
  pageSize: Number
  results: Team[]
  totalResults: Number
  currentTeam?: Team
}

export interface Team {
  badgeColor: string
  badgeGray: string
  badgeWhite: string
  name: string
  id: string
  shortName: string
  slug: string
  dspId: Number
  store: string
}
