import LikesComponent, {ILikesProps} from './Likes'

export function Likes({
  likesImageSource,
  likesCountBackground,
  likesCount,
  likesCountColor,
  clickHandler,
}: ILikesProps) {
  return (
    <LikesComponent
      {...{
        likesCount,
        likesCountBackground,
        likesCountColor,
        likesImageSource,
        clickHandler,
      }}
    />
  )
}

export default Likes
