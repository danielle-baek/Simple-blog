import {SET_CATEGORY} from '../actions/action'

let initialCategory = {
  categories: [
    {colour: '#f7B2B7', id: 1, isImage: 1, isText: 1, name: 'My Day'},
    {colour: '#BBC2E2', id: 2, isImage: null, isText: 1, name: 'Meditation'},
    {colour: '#A9E5BB', id: 3, isImage: null, isText: 1, name: 'Happy Things'},
    {colour: 'white', id: 4, isImage: 1, isText: null, name: 'Image'}
  ]}

export default function categoryReducer (state = initialCategory, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {categories: action.category}

    default:
      return state
  }
}
