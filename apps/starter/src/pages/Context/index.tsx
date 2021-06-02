import ContextPage from './ContextPage'
import {LikesProvider} from '@vam/shared/context'

export default function Context() {
  return (
    <LikesProvider>
      <ContextPage />
    </LikesProvider>
  )
}
