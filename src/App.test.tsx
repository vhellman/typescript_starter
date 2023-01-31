/* eslint-disable import/no-extraneous-dependencies */
// technically you don't have to import these...
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

// setup test suite
describe('App', () => {
  it('Renders hello world...', () => {
    // arrange
    render(<App />)

    // act
    // expect (assert)
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World')
  })
})
