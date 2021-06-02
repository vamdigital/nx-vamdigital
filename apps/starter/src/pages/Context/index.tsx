import ContextPage from './ContextPage'
import {LikesProvider} from '@vam/shared/context/Likes'

export default function Context() {
  return (
    <LikesProvider>
      <ContextPage />
    </LikesProvider>
  )
}
