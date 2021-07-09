import React, {useContext, useReducer} from 'react'
import LikesContext, {initialState} from './context'
import likesReducer from './likesReducer'
import {LikesAction} from './types'

interface ILikesProvider {
  children: React.ReactNode
}

export function LikesProvider({children}: ILikesProvider) {
  const [state, dispatch] = useReducer(likesReducer, initialState)

  const {likes} = state

  const incrementLikes = () => dispatch(LikesAction)

  return (
    <LikesContext.Provider value={{likes, incrementLikes}}>
      {children}
    </LikesContext.Provider>
  )
}

export const useLikesContext = () => {
  return useContext(LikesContext)
}
