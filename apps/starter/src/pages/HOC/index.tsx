import HOCPage from './HOCPage'
import {likesHOC} from '@vam/shared/HOC'

export default function HOC() {
  const EnhanceHOCComponent = likesHOC(HOCPage)
  return <EnhanceHOCComponent />
}
