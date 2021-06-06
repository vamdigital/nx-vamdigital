import {LIKES_INCREMENT, ActionType} from '../../types'

export interface IState {
  count: number
}

export const initialState = {
  count: 0,
}

export const likesReducer = (state = initialState, action: ActionType) => {
  const {type} = action
  switch (type) {
    case LIKES_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}
