import {LIKES_INCREMENT} from '../../types'

export const likesIncrement = () => {
  return {
    type: LIKES_INCREMENT,
  }
}

export default likesIncrement
