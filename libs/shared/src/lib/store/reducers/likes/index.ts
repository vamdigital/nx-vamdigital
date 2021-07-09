import {ActionType, LIKES_INCREMENT} from '../../types'

export interface IState {
  count: number
}

export const initialState = {
  count: 0,
}

export const likesReducer = (state = initialState, action: ActionType) => {
  const {type} = action
  if (type === LIKES_INCREMENT) {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state
}
