import {createSelector} from 'reselect'
import {RootState} from '../../index'

const likesState = (state: RootState) => state.likes

export const likesSelector = createSelector(likesState, (likes) => likes.count)
