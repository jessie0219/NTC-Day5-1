import { createStore } from 'vuex'

export default createStore({
  state: {
    name:'Jessie',
    age:55,
    job:'student'
  },
  getters: {
    title(state){
      return `${state.name}:${state.job}`
    },
    fullTitle(state,getters){
      return `${getters.title}，${state.age}歲`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
