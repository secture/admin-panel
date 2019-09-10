export const GET_DATA = 'GET_DATA'
export const GET_CURRENT_TEAM = 'GET_CURRENT_TEAM'

export default {
  [GET_DATA]: (state: any) => state.data,
  [GET_CURRENT_TEAM]: (state: any) => state.data.currentTeam,
}
