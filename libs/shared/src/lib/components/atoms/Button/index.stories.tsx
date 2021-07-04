import ButtonComponent from './index'
import {withKnobs, text} from '@storybook/addon-knobs'

export default {
  component: ButtonComponent,
  title: 'Button',
  decorators: [withKnobs],
}

export const primary = () => {
  return <ButtonComponent buttonText={text('button-text', 'hello-world')} />
}
