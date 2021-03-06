import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  options: {
    textbookId: '',
    editionId: '',
    subject: '',
    grade: '',
    textbookList: []
  },
  gaokao: {
    list: [],
    scroll: 0
  },
  sync: {
    list: [],
    scroll: 0
  },
  example: {
    options: {
      degree: 0,
      qType: 0
    },
    list: [],
    offset: '',
    count: 0,
    scroll: 0
  },
  choice: {
    list: [],
    offset: '',
    count: 0,
    scroll: 0
  }
}

const mutations = {
  [types.ASSEMBLE_OPTIONS_TEXTBOOK] (state, data) {
    state.options.textbookList = data
  },
  [types.ASSEMBLE_OPTIONS] (state, data) {
    state.options = {subject: data.subject, grade: data.grade, textbookId: data.textbookId, editionId: data.editionId, textbookList: state.options.textbookList}
  },
  [types.ASSEMBLE_SET_OPTIONS] (state, data) {
    state.options = {subject: data.subject, grade: data.grade, textbookId: data.textbookId, editionId: data.editionId, textbookList: state.options.textbookList}
    state.gaokao = { list: [], scroll: 0 }
    state.sync = { list: [], scroll: 0 }
  },
  [types.ASSEMBLE_SYNC] (state, data) {
    state.sync.list = state.sync.list ? state.sync.list.concat(data.chaper) : data.chaper
  },
  [types.ASSEMBLE_SYNC_SCROLL] (state, height) {
    state.choice.scroll = height
  },
  [types.ASSEMBLE_GAOKAO] (state, data) {
    state.gaokao.list = state.gaokao.list ? state.gaokao.list.concat(data.chaper) : data.chaper
  },
  [types.ASSEMBLE_GAOKAO_SCROLL] (state, height) {
    state.gaokao.scroll = height
  },
  [types.ASSEMBLE_EXAMPLE] (state, data) {
    state.example.list = state.example.list ? state.example.list.concat(data.list) : data.list
    state.example.offset = data.offset
    state.example.count = data.count
  },
  [types.ASSEMBLE_EXAMPLE_SCROLL] (state, height) {
    state.example.scroll = height
  },
  [types.ASSEMBLE_EXAMPLE_CLEAR] (state) {
    state.example = { list: [], offset: '', count: 0, scroll: 0 }
    state.example.options = {
      degree: 0,
      qType: 0
    }
  },
  [types.ASSEMBLE_EXAMPLE_OPTIONS] (state, payload) {
    state.example = { list: [], offset: '', count: 0, scroll: 0 }
    state.example.options = {
      degree: payload.degree,
      qType: payload.qType
    }
  },
  [types.ASSEMBLE_CHOICE] (state, data) {
    state.choice.list = state.choice.list ? state.choice.list.concat(data.list) : data.list
    state.choice.offset = data.offset
    state.choice.count = data.count
  },
  [types.ASSEMBLE_INTO] (state, payload) {
    if (payload.form === 1) {
      state['example']['list'][payload.index]['isAssembly'] = payload.data.isAssembly
      payload.data.isAssembly ? ++state.example.count : --state.example.count
    } else {
      state['choice']['list'][payload.index]['isAssembly'] = payload.data.isAssembly
      payload.data.isAssembly ? ++state.choice.count : --state.choice.count
    }
  },
  [types.ASSEMBLE_CHOICE_SCROLL] (state, height) {
    state.choice.scroll = height
  },
  [types.ASSEMBLE_CHOICE_CLEAR] (state) {
    state.choice = { list: [], offset: '', count: 0, scroll: 0 }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
