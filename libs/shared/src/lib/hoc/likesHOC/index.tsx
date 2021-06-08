import {useState} from 'react'

export function likesHOC(WrappedComponent: any) {
  return function (props: T) {
    const [count, setCount] = useState(0)
    const incrementLikes = () => {
      setCount(count + 1)
    }

    return (
      <WrappedComponent
        likesCount={count}
        incrementLikes={incrementLikes}
        {...props}
      />
    )
  }
}
