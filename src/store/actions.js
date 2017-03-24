import axios from 'axios'
import * as types from './mutations-types'

export const loadMarks = ({ commit }) => {
  axios.get('http://www.mocky.io/v2/58c0fff9110000310863edc4').then((response) => {
    commit(types.LOAD_MARKERS, response.data)
  }).catch((err) => {
    console.error(err)
  })
  // commit(types.LOAD_MARKERS, [{id: 1, name: 'Marker 1'}, {id: 2, name: 'Marker 2'}])
}
