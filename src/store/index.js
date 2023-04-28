import { createStore } from 'vuex'

export default createStore({
  state: {
    users:[]
  },
  mutations: {
    addusers(state,payload){
      state.users.push(payload)
    },
    editusers(state,payload){
      state.users[payload.index] = payload.data
    },
    deleteuser(state,payload){
      state.users.splice(payload,1)
    },
  },
  actions: {
    addusers({commit},payload){
      commit("addusers",payload)
    },
    editusers({commit},payload){
      console.log("TEST LOG",payload)
      commit("editusers",payload)
    },
    deleteuser({commit},payload){
      console.log("TEST LOG",payload)
      commit("deleteuser",payload)
    },

  },
  modules: {
  }
 })
