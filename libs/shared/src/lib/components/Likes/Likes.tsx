import styled from 'styled-components'

const LikesWrapper = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 142px);
`

const LikesButton = styled.button`
  border: 0;
  background: transparent;
  outline: 0;
  box-shadow: none;
  cursor: pointer;
  -webkit-appearance: none;
`

export interface ILikesProps {
  likesImageSource: string
  likesCount: number
  likesCountBackground: string
  likesCountColor: string
  clickHandler: () => void
}

const LikesCountWrapper = styled.div<
  Pick<ILikesProps, 'likesCountColor' | 'likesCountBackground'>
>`
  display: block;
  padding: 5px 10px;
  text-align: center;
  background: ${(props) => props.likesCountBackground};
  color: ${(props) => props.likesCountColor};
  margin-top: -22px;
`

export function LikesComponent({
  likesImageSource,
  likesCount,
  likesCountBackground,
  likesCountColor,
  clickHandler,
}: ILikesProps) {
  return (
    <LikesWrapper>
      <LikesButton type="button" onClick={clickHandler}>
        <img src={likesImageSource} alt="Likes Thumbs up" />
      </LikesButton>
      <LikesCountWrapper {...{likesCountBackground, likesCountColor}}>
        {likesCount}
      </LikesCountWrapper>
    </LikesWrapper>
  )
}

export default LikesComponent
