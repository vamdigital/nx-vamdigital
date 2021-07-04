import {Button} from '@material-ui/core'
type IProps = {
  buttonText: string
}

export default function ButtonComponent({buttonText}: IProps) {
  return <Button variant="contained">Hello 👋 {buttonText}</Button>
}
