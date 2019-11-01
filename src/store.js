import Vue from 'vue';
import Vuex from 'vuex';
import contexts from "less/lib/less/contexts";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        searchName:'',
        searchAge:''
    },
    getters: {
    },

    mutations: {
        changeValue(state,newVal){
            console.log(newVal)
            state.searchName =  newVal
        },
        setAge(state,newVal){
            state.searchAge = newVal
        }
    },
    actions: {
        changeAge(context,value){
            console.log(value)
            context.commit("setAge",value)
        }
    },
});
