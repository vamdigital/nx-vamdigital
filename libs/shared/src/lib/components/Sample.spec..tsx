import {render} from '@testing-library/react'

import Components from './Sample'

describe('Components', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Components />)
    expect(baseElement).toBeTruthy()
  })
})
