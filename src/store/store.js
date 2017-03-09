import Vue from 'vue'
import Vuex from 'vuex'
import localStorageService from 'core/localStorageService';
let chessTrainer = localStorageService.get();

Vue.use(Vuex)

const state = {
    chessTrainer: {
        points: chessTrainer.points || 0,
        currentKata: {
            level: chessTrainer.currentKata.level || 0,
            kata: chessTrainer.currentKata.kata || 0
        }
    }
}

const mutations = {
    UPDATE_KATA (state, kataIndex){
        state.currentKata.kata = kataIndex;
    },
    UPDATE_LEVEL (state, levelIndex){
        state.currentKata.level = levelIndex;
    },
    UPDATE_POINTS (state, points){
        state.chessTrainer.points = points;
    }
}

const actions = {
    updateKata ({ commit }, kataIndex) {
        commit('UPDATE_KATA', kataIndex);
    },
    updateLevel ({ commit }, levelIndex) {
        commit('UPDATE_LEVEL', kataIndex);
    },
    updatePoints ({ commit }, points) {
        commit('UPDATE_POINTS', points);
    }
}

const getters = {
    getPoints: state => state.chessTrainer.points,
    getCurrentLevel: state => state.chessTrainer.currentKata.level,
    getCurrentKata: state => state.chessTrainer.currentKata.kata
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})