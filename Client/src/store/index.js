import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numAll:0,
    shopall:[]
  },
  mutations: {
    add(state){
      state.numAll++
    },
    sub(state){
      state.numAll--
    },
     num(){
      let shopall=JSON.parse(window.localStorage.getItem('productArr'))
       let num=0
       for(let i=0;i<shopall.length;i++){
         num+=shopall[i].num
         
       }
       this.state.numAll=num;
    }
  },
  actions: {},
  modules: {}
});
