import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  layout: 'login', //分三部分：login, admin
  userInfo: {username: 'tttt'}
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setLayout (state, layout) {
    state.layout = layout;
  },
  increment (state, params) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  },
  setUserInfo (state, user){
    state.userInfo = user;
  }
}


// export const addToCart = ({ commit }, product) => {
//   if (product.inventory > 0) {
//     commit(types.ADD_TO_CART, {
//       id: product.id
//     })
//   }
// }
// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  setLayout:  ({ commit }, layout) => commit('setLayout', layout),
  increment: ({ commit }, params) => commit('increment', params),
  setUserInfo: ({ commit }, user) => commit('setUserInfo', user),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  layout: state => state.layout,
  userInfo: state => state.userInfo
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
