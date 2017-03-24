import * as types from './mutations-types'

export default{
  [types.LOAD_MARKERS] (state, markersList) {
    state.markers = markersList
  },
  [types.LOAD_MARKER] (state, marker) {
    state.marker = marker
  }
}
