import {createContext} from 'react'

export interface ILikesContext {
  likes: number
  incrementLikes: () => void
}

export const initialState: ILikesContext = {
  likes: 0,
  incrementLikes: () => {},
}

const LikesContext = createContext(initialState)

LikesContext.displayName = 'LikesContext'

export default LikesContext
