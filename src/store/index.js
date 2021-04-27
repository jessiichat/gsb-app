import { createStore } from 'vuex'

export default createStore ({
    state() {
        return {
            user: localStorage.getItem('user')
        }
    },
    getters:{
        getLoginFromStore(state) {
            return state.user
        }
    },
    actions:{
        setLogin({commit}, user){
            commit('connexion', user)
        }
    },
    mutations:{
        connexion(state, user){
            localStorage.setItem('user', user);
            state.user = user;
        }
    }
})