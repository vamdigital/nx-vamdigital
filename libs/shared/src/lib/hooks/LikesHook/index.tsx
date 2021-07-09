import {useState} from 'react'

export const useLikes = () => {
  const [likes, setLikes] = useState(0)

  const incrementLikes = () => {
    setLikes((like) => like + 1)
  }

  return {likes, incrementLikes}
}
