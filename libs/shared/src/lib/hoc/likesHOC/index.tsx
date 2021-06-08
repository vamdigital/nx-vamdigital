import React, {useState} from 'react'

interface IWrapped {
  likesCount: number
  incrementLikes: () => void
}

export function likesHOC(WrappedComponent: React.ComponentType<IWrapped>) {
  return function () {
    const [count, setCount] = useState(0)
    const incrementLikes = () => {
      setCount(count + 1)
    }

    return (
      <WrappedComponent likesCount={count} incrementLikes={incrementLikes} />
    )
  }
}
