import {createContext} from 'react'

export interface ILikesContext {
  likes: number
  incrementLikes: () => void
}

export const initialState: ILikesContext = {
  likes: 0,
  incrementLikes: () => {
    // This is signature of the function. Intentionally left blank
  },
}

const LikesContext = createContext(initialState)

LikesContext.displayName = 'LikesContext'

export default LikesContext
