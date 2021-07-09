import {ILikesContext, initialState} from './context'
import {Action, ActionKind} from './types'

const likesReducer = (state: ILikesContext = initialState, action: Action) => {
  const {type} = action

  if (type === ActionKind.INCREMENT) {
    return {
      ...state,
      likes: state.likes + 1,
    }
  }
  return state
}

export default likesReducer
