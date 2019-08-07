export const GET_TEAMS = 'GET_TEAMS'
export const GET_CURRENT_TEAM = 'GET_CURRENT_TEAM'

export default {
  [GET_TEAMS]: state => state.teams,
  [GET_CURRENT_TEAM]: state => state.currentTeam,
}
