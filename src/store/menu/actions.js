import { SET_MENU_ACTIVE, SET_MENU_OPENS } from './mutation-type'
export default {
  SET_MENU_ACTIVE({ commit }, data) {
    commit(SET_MENU_ACTIVE, data)
  },
  SET_MENU_OPENS({ commit }, data) {
    commit(SET_MENU_OPENS, data)
  }
}
