import styled from 'styled-components'
import {Box, Button, Typography} from '@material-ui/core'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import {ArrowForward} from '@material-ui/icons'
import {Colour} from '@vam/shared/styles/theme/config'
/* eslint-disable-next-line */
export interface SampleProps {}

const StyledComponents = styled.div`
  color: #333;
`
const VAMButton = withStyles(() => ({
  root: {
    '&:hover': {
      backgroundColor: Colour.hoverLinkColor,
    },
    '&:focus': {
      backgroundColor: Colour.focusColor,
      color: Colour.focusTextColor,
    },
  },
}))(Button)

const useStyles = makeStyles(() => ({
  padding: {
    padding: '20px',
  },
}))

export function Sample() {
  const classes = useStyles()
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
      <VAMButton
        className={classes.padding}
        color="secondary"
        variant="contained"
        endIcon={<ArrowForward />}
      >
        Mui Button
      </VAMButton>
    </StyledComponents>
  )
}

export default Sample
