import {Action, ActionKind} from './types'
import {ILikesContext, initialState} from './context'

const likesReducer = (state: ILikesContext = initialState, action: Action) => {
  const {type} = action
  switch (type) {
    case ActionKind.INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      }
    default:
      return state
  }
}

export default likesReducer
