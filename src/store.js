import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        name: 'test',
        num:10
    },
    getters: {
        test(state) {
            console.log("getters==>")
            console.log(state)
            return state.name
        },
        jisuan(state){
            return state.num
        }
    },

    mutations: {
        add(state){
            console.log("mutations==>")
            console.log(state)
            state.num++
        },
        cut(state){
            console.log("mutations==>")
            console.log(state)
            state.num--
        }
    },
    actions: {
        add1(context){
            console.log("actions==>")
            console.log(context)
            console.log(state)
            context.commit('add')
        },
        cut1(context){
            console.log("actions==>")
            console.log(context)
            context.commit('cut')
        }
    },
});
