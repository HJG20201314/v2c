import { SET_MENU_ACTIVE, SET_MENU_OPENS } from './mutation-type'
export default {
  [SET_MENU_ACTIVE](state, data) {
    state.menuActive = data
  },
  [SET_MENU_OPENS](state, data) {
    state.menuOpens = data
  }
}
