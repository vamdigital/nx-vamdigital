import {useState} from 'react'

export const useLikes = () => {
  const [likes, setLikes] = useState(0)

  const incrementLikes = () => {
    setLikes((likes) => likes + 1)
  }

  return {likes, incrementLikes}
}
