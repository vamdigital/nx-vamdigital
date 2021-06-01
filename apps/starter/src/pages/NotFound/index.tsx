import notfound from '../../assets/icons/404.png'
import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 96px);
  justify-content: center;
  align-items: center;
`

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <img src={notfound} alt="Page Not Found" />
    </NotFoundWrapper>
  )
}
