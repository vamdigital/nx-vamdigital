import styled from 'styled-components'
import {Box, Button, Typography} from '@material-ui/core'

/* eslint-disable-next-line */
export interface ComponentsProps {}

const StyledComponents = styled.div`
  color: #333;
`

export function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <Box {...{mb: 2}}>
        <Typography
          {...{
            variant: 'h4',
            component: 'h1',
          }}
        >
          Welcome to the VAM Digital Starter Template
        </Typography>
      </Box>
      <Button {...{color: 'primary', variant: 'contained'}}>Mui Button</Button>
    </StyledComponents>
  )
}

export default Components
