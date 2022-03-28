import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res, cur)=> res + Number(cur.value), 0)
    },
    getCategoryList: state => state.categoryList
  },
  mutations: {
    setPaymentListData(state, payload){
      state.paymentList = payload
    },
    addDataPaymentList(state, payload){
      // Vue.set(state.paymentList, 1, payload)
      state.paymentList.push(payload)
    },
    addCategoryList(state, payload){
      state.categoryList = payload
    }
  },
  actions: {
    fetchData({commit}){
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for(let i = 1; i <= 50; i++){
            items.push({
              date: "28.03.2022",
              category: "Food",
              value: 100,
            })
          }
          resolve(items)
        }, 1000)
      }).then(res => {
        commit('setPaymentListData', res)
      })
    },
    fetchCategoryList({commit}){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Sport', 'Education', 'Auto'])
        }, 1000)
      }).then(res => {
        commit('addCategoryList', res)
      })
    }
  },
})
