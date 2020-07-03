import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Hello from global state',
    name: '',
    lastName: 'Colacilli',
    friends: [],
    friend: null
  },
  mutations: {
    addFriend(state) {
      state.friends = [state.friend,...state.friends]
    },
    otherFriend(state, otherfriend) {
      state.friends = [otherfriend,...state.friends]
    },
    removeFriend(state, index) {
      state.friends.splice(index, 1)
    }
  },
  actions: {
    addFriendAction(context) {
      context.commit('addFriend')
    },
    otherFriendAction(context, otherfriend) {
      context.commit('otherFriend', otherfriend)
    },
    removeFriendAction(context, index) {
      context.commit('removeFriend', index);
    }
  },
  modules: {
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getFullName(state) {
      return state.name + ' ' + state.lastName
    }
  }
})
