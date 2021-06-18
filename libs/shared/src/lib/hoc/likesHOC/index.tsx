import React, {useState} from 'react'

type IWrapped = {
  likesCount: number
  incrementLikes: () => void
}

export function likesHOC<T>(
  WrappedComponent: React.ComponentType<T & IWrapped>,
) {
  return function (props: T) {
    const [count, setCount] = useState(0)
    const incrementLikes = () => {
      setCount(count + 1)
    }

    return (
      <WrappedComponent
        {...props}
        likesCount={count}
        incrementLikes={incrementLikes}
      />
    )
  }
}
